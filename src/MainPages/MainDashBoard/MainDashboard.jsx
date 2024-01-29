import React from "react";
import { Box } from "@mui/material";
import Dashboard from "./DashboardSection/Dashboard";
import SelectedRecords from "./SelectedRecordsSection/SelectedRecords";
import Records from "./RecordsSection/Records";

const MainDashboard = () => {
	return (
		<Box
			border="5px solid yellow"
			position={"absolute"}
			left={"10rem"}
			width="calc(100% - 10rem)"
			height="calc(100% - 3rem)"
			padding={"1rem"}
			display={"flex"}
			flexDirection={"column"}
			gap={2}
			overflow={"auto"}
		>
			<Dashboard />
			<SelectedRecords />
			<Records />
		</Box>
	);
};

export default MainDashboard;
