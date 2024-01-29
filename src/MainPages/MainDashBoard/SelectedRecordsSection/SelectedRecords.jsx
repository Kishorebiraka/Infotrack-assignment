import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import RecordBarChart from "./BarCharts/RecordBarChart";
import SelectedRecordsTable from "./SelectedRecordsTable";
const SelectedRecords = () => {
	return (
		<Box
			sx={{
				margin: 0,
				padding: 0,
				display: "flex",
				flexDirection: "column",
				gap: 1,
			}}
		>
			<Box>
				<Typography variant="h6" fontWeight={600} sx={{ margin: 0 }}>
					Selected Records
				</Typography>
			</Box>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: {
						xs: "repeat(1, 1fr)",
						sm: "repeat(2, 1fr)",
					},
					gap: 2,
					margin: 0,
					padding: 0,
				}}
			>
				<Box>
					<SelectedRecordsTable />{" "}
				</Box>

				<Box>
					<RecordBarChart />
				</Box>
			</Box>
		</Box>
	);
};

export default SelectedRecords;
