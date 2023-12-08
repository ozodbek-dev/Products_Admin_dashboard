import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data: ChartData<"doughnut", number[], string> = {
	labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(153, 102, 255, 0.2)",
				"rgba(255, 159, 64, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				"rgba(255, 159, 64, 1)",
			],
			borderWidth: 1,
		},
	],
};

interface IDoughnutChartProps {
	labels: string[];
	data: number[];
	backgroundColor: string[];
	cutout: number | string;
	legends?: boolean;
	offset?: number;
}

export default function DoughnutChart({
	labels,
	data,
	backgroundColor,
	cutout,
	legends = true,
	offset = 0,
}: IDoughnutChartProps) {
	const doughtnutChartData: ChartData<"doughnut", number[], string> = {
		labels,
		datasets: [
			{
				label: "# of Votes",
				data,
				borderWidth: 0,
				offset,
				backgroundColor,
			},
		],
	};
	const doughnutChartOptions: ChartOptions<"doughnut"> = {
		responsive: true,
		plugins: {
			legend: {
				display: legends,
				position: "bottom",
				labels: {
					padding: 40,
				},
			},
		},
		cutout,
	};
	return <Doughnut data={doughtnutChartData} options={doughnutChartOptions} />;
}
