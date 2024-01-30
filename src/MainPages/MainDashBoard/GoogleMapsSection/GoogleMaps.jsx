import { Box, Typography } from "@mui/material";
import React, {memo} from "react";
import GoogleMapScreen from "./GoogleMapScreen";

const GoogleMaps = memo(() => {
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
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Box>
					<Typography variant="h6" fontWeight={600} sx={{ margin: 0 }}>
						Track on map
					</Typography>
				</Box>
			</Box>
			<GoogleMapScreen />
		</Box>
	);
})

export default GoogleMaps;
