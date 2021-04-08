var rangeSelectors = document.querySelectorAll("#range-labels .modes label");
var intervalSelectors = document.querySelectorAll("#interval-labels .modes label");

for (const [i, selector] of Object.entries(rangeSelectors)) {
	selector.addEventListener("click", function (event) {
		let slider = event.currentTarget.closest("div").parentNode.children[0];
		slider.style.left = `${(i) / rangeSelectors.length * 100}%`;
		localStorage.setItem("range", event.currentTarget.htmlFor);

		renderGraph(event.currentTarget.htmlFor, currentInterval);
	});
}

for (const [i, selector] of Object.entries(intervalSelectors)) {
	selector.addEventListener("click", function (event) {
		let slider = event.currentTarget.closest("div").parentNode.children[0];
		slider.style.left = `${(i) / intervalSelectors.length * 100}%`;
		localStorage.setItem("interval", event.currentTarget.htmlFor);

		renderGraph(currentRange, event.currentTarget.htmlFor);
	});
}

var currentRange = localStorage.getItem("range") || "r-5d";
var currentInterval = localStorage.getItem("interval") || "i-60m";

$(`label[for='${currentRange}']`).trigger("click");
$(`label[for='${currentInterval}']`).trigger("click");
