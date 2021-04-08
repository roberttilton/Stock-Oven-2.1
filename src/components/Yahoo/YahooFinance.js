import React from "react";

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

function YahooFinance () {

}