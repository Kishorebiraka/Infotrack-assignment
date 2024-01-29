import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import ReactECharts from "echarts-for-react";

const RecordBarChart = () => {
	const options = {
		grid: { top: 20, right: 40, bottom: 20, left: 40 },

		tooltip: {
			trigger: "axis",
		},
		// legend: {
		//     data: ['Lorem', 'Ipsum']
		// },
		xAxis: {
			type: "category",
			data: ["April", "May", "June", "July"],
		},
		yAxis: {
			type: "value",
			min: 0,
			max: 80,
			interval: 20,
		},
		series: [
			{
				name: "Lorem",
				type: "bar",
				data: [20, 35, 40, 50],
				color: "#f26f22",
			},
			{
				name: "Ipsum",
				type: "bar",
				data: [45, 65, 45, 75],
				color: "#610875",
			},
		],
		graphic: [
			{
				type: "text",
				right: 180,
				top: 5,
				z: 100,
				style: {
					text: "DAY",
					fill: "black",
					padding: [5, 10],
				},
			},
			{
				type: "text",
				right: 130,
				top: 5, // Adjust the top position for WEEK
				z: 100,
				style: {
					text: "WEEK",
					fill: "black",
				},
			},
			{
				type: "text",
				right: 50,
				top: 0, // Adjust the top position for MONTH
				z: 100,
				style: {
					text: "MONTH",
					fill: "#610875",
					padding: [5, 10],
					borderRadius: 1, // Border radius
					backgroundColor: "#ded3b6",
				},
			},
		],
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
			<Box
				border="1px solid white"
				bgcolor="white"
				boxShadow={5}
				borderRadius={5}
			>
				<ReactECharts
					option={options}
					style={{ width: "600px", height: "300px" }}
				/>
			</Box>
			<Box sx={{ display: "flex", gap: 5 }}>
				<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
					<Box
						border="1px solid #f26f22"
						width="40px"
						height="15px"
						bgcolor="#f26f22"
					></Box>
					<Typography variant="body1" style={{ fontSize: "12px" }}>
						LOREUM
					</Typography>
				</Box>

				<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
					<Box
						border="1px solid #610875"
						width="40px"
						height="15px"
						bgcolor="#610875"
					></Box>
					<Typography variant="body1" style={{ fontSize: "12px" }}>
						IPSUM
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default RecordBarChart;
