import { Chart } from "chart.js/auto";
import { core } from "@printf83/bsts";

export const setupChart = (container: HTMLCanvasElement) => {
	const fillColor = core.getCSSVarRgbColor("--bs-primary-bg-subtle", 0.5);
	const lineColor = core.getCSSVarRgbColor("--bs-primary");
	const gridColor = core.getCSSVarRgbColor("--bs-tertiary-bg");

	return new Chart(container, {
		type: "line",
		data: {
			labels: Array(30).fill(""),
			datasets: [
				{
					data: Array(30).fill(0),
					borderWidth: 1,
					pointRadius: 0,
					borderColor: lineColor,
					borderDash: [3, 3],
				},
				{
					data: Array(30).fill(0),
					borderWidth: 1,
					pointRadius: 0,
					tension: 0.5,
					borderColor: lineColor,
					fill: {
						target: "origin",
						above: fillColor,
					},
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: true,
			aspectRatio: 2,
			plugins: {
				legend: {
					display: false,
				},
				tooltip: {
					enabled: false,
				},
			},
			scales: {
				y: {
					display: true,
					beginAtZero: true,
					grid: { color: gridColor },
				},
				x: {
					ticks: { display: false },
					grid: { color: gridColor },
				},
			},
		},
	});
};
