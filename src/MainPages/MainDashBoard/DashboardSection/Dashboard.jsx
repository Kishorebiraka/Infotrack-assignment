import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import DashboardCard from "./DashboardCard";
import { dashboardCardsList } from "./config";

const Dashboard = () => {
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
					Dashboard
				</Typography>
			</Box>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: {
						xs: "repeat(1, 1fr)",
						sm: "repeat(2, 1fr)",
						md: "repeat(4, 1fr)",
						lg: "repeat(5, 1fr)",
					},
					gap: 2,
					margin: 0,
					padding: 0,
				}}
			>
				{dashboardCardsList?.map((item, index) => (
					<DashboardCard
						cardDetails={item}
						index={index}
						key={`card-dashboard-${index}`}
					/>
				))}
			</Box>
		</Box>
	);
};

export default Dashboard;
