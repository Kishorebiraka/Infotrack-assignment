import React from "react";
import { Box } from "@mui/material";
import Dashboard from "./DashboardSection/Dashboard";
import SelectedRecords from "./SelectedRecordsSection/SelectedRecords";
import Records from "./RecordsSection/Records";
import GoogleMaps from "./GoogleMapsSection/GoogleMaps";

const MainDashboard = () => {
	return (
		<Box
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
			<GoogleMaps />
			<SelectedRecords />
			<Records />
		</Box>
	);
};

export default MainDashboard;
