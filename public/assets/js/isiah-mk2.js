fetch("assets/txt/stock_symbols.txt")
	.then(response => response.text())
	.then(
		data => {
			// Variable created for all US stock names
			var stockNames = data.split(",");

			$("#search").autocomplete({
				source: stockNames
			});

			var searchButton = document.querySelector("#button"); //Variable to create search button

			searchButton.addEventListener("click", function (event) { //Function for when the search button is clicked, the program reads the stock chosen and displays the corresponding stock chart grabbed from yahoo finance api
				event.preventDefault();
				var stockSearch = document.querySelector("#search").value;
				console.log(stockSearch)
				fetchStock(stockSearch);
			});
		}
	)
;
