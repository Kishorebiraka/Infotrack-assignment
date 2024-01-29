import React from "react";
import { Box, Typography } from "@mui/material";
import { MdDashboard } from "react-icons/md";

import { FaMapMarkerAlt } from "react-icons/fa";

import { BsGraphUpArrow } from "react-icons/bs";

const sideBarList = [
	{
		id: 1,
		icon: <MdDashboard size={20} />,
		title: "Dashboard",
	},
	{
		id: 2,
		icon: <FaMapMarkerAlt size={20} />,
		title: "Track on map",
	},

	{
		id: 3,
		icon: <BsGraphUpArrow size={20} />,
		title: "Report",
	},
];

const Sidebar = () => {
	return (
		<Box
			width="10rem"
			position="absolute"
			left="0"
			top="0"
			height="100%"
			boxShadow={5}
			zIndex={10}
			bgcolor="white"
			padding={0.5}
		>
			<Typography variant="h4" sx={{ display: "flex" }}>
				<span style={{ color: "#b8040d" }}>Info</span>{" "}
				<span style={{ color: "#020430" }}>Track</span>
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexDirection: " column",
					gap: 3,
					marginTop: 5,
					paddingLeft: 0.5,
				}}
			>
				{sideBarList?.map((item, index) => (
					<Box
						sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
						padding={1}
						borderRadius={1}
						key={`${item?.title}+${index}`}
						bgcolor={index === 0 ? "#c77980" : ""}
					>
						<Box>{item?.icon}</Box>
						<Typography variant="body1">{item?.title}</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default Sidebar;
