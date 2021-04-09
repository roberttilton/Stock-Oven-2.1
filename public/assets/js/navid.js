var candlePoints = [];

var currentStock = "";
var currentRange = localStorage.getItem("range") || "r-5d";
var currentInterval = localStorage.getItem("interval") || "i-60m";
var stockInput = "";


/**
 * Grab every x points (determined by 'interval') over a time 'range' and plot them with ApexCharts
 * @param {string} range the range over which to graph the stock shifts for
 * @param {string} interval the amount of time between each point (plot what the stocks were every 5 min, half hour, etc.)
 */
function renderGraph(range, interval) {
	console.log(`Called renderGraph(range=${range}, interval=${interval})`);

	currentRange = range;
	currentInterval = interval;

	document.querySelector("#stock-graph").innerHTML = "";

	/**
	 * 5 minutes: i++;
	 * 15 minutes: i += 3;
	 * 60 minutes: - += 12;
	 * 1 day : i += 288;
	 */
	const incrementTable = {
		"i-5m": 1,
		"i-15m": 3,
		"i-60m": 12,
		"i-1d": 288
	};

	let filteredData = [];

	for (let i = candlePoints.length - 1; i >= 0; i -= incrementTable[interval]) {
		if (range === "r-1d" && i < candlePoints.length - 186) {
			console.log("Short circuiting after one day");
			break;
		} else if (range === "r-5d" && i < candlePoints.length - 930) {
			console.log("Short circuiting after five days");
			break;
		}

		filteredData.push(candlePoints[i]);
	}

	console.log(`Rendering ${filteredData.length} points`);

	// create an object for the properties of our graph. Based off ApexCharts rubric.
	var options = {
		series: [{
			name: "candle",
			type: "candlestick",
			data: filteredData
		}],
		chart: {
			height: "100%",
			type: 'candlestick',
			zoom: {
				enabled: true,
				type: "xy"
			}
		},
		title: {
			text: currentStock + ' Stock Chart',
			align: 'left'
		},
		theme: {
			mode: "dark"
		},
		xaxis: {
			type: 'datetime'
		},
		yaxis: {
			tickAmount: 10
		},
		responsive: [
			{
				breakpoint: 1650,
				options: {
					chart: {
						width: "50%"
					}
				}
			}
		]
	};

	var chart = new ApexCharts(document.querySelector("#stock-graph"), options);
	chart.render();

	try {
		var triggers = document.querySelector(".resize-triggers");
		triggers.parentElement.removeChild(triggers);
	} catch (error) {
		return;
	}
}


/**
 * Make a fetch request to Yahoo Finance API, to be parsed and passed into renderGraph()
 * @param {string} stockInput the 1-5 letter stock symbol to fetch stock information for
 */
async function fetchStock(stockInput) {
	currentStock = stockInput;
	// fetch the stock chart data from the yahoo finance api
	await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?interval=5m&symbol=" + stockInput + "&range=1mo&region=US", {
	// await fetch("sample_responses/sample_yahoo_chart_response.json", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "f092a8eb4fmsh4f233fe4c58b077p1e4652jsncb1161a414f6",
			"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
		}
	})
	// convert the response into json
	.then(response => response.json())
	.then(data => {
		// Create a for-loop to grab the values from the response array
		for (let i = 0; i < data.chart.result[0].timestamp.length; i++) {
			// Grab the timestamps from the response's array & multiply by 1000 since in unix
			const timestamp = new Date(data.chart.result[0].timestamp[i] * 1000);

			try {
				const close = data.chart.result[0].indicators.quote[0].close[i].toFixed(2);
				const high = data.chart.result[0].indicators.quote[0].high[i].toFixed(2);
				const low = data.chart.result[0].indicators.quote[0].low[i].toFixed(2);
				const open = data.chart.result[0].indicators.quote[0].open[i].toFixed(2);

				// set the x and y axis of our graph
				candlePoints.push({
					x: timestamp,
					y: [open, high, low, close]
				});
			} catch (error) {
				continue;
			}
		}

		console.log(`Successfully fetched ${candlePoints.length} data points.`);
	});
}

// call the function
fetchStock("GME").then(_ => renderGraph(currentRange, currentInterval));

// fetch a response for the top movers
fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers?region=US&lang=en-US&start=0&count=5", {
// fetch("sample_responses/sample_yahoo_movers_response.json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f092a8eb4fmsh4f233fe4c58b077p1e4652jsncb1161a414f6",
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	}
})
	// convert the response into json
	.then(response => response.json())
	.then(data => {
		// create a for loop to grab from the top movers array
		document.querySelector("#top-movers").innerHTML = "";
		for (let i = 0; i < data.finance.result[2].quotes.length; i++) {
			const stockName = data.finance.result[2].quotes[i].symbol;

			var stockElement = document.createElement("a");
			stockElement.className = "mover-link";
			stockElement.href = "https://finance.yahoo.com/quote/" + stockName + "?p=" + stockName;
			stockElement.innerText = stockName;
			document.querySelector("#top-movers").appendChild(stockElement);
		}
	})
	.catch(err => {
		console.error(err);
	});
