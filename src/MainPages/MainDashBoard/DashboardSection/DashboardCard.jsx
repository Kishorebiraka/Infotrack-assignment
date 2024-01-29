import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const DashboardCard = (props) => {
	const { cardDetails, index } = props;

	return (
		<Box
			border="1px solid white"
			bgcolor="white"
			boxShadow={5}
			borderRadius={5}
			sx={{
				display: "grid",
				gridTemplateColumns: "repeat(2, 1fr)",
				columnGap: 5,
			}}
			key={`cards+${index}+${cardDetails?.id}`}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box
					bgcolor={cardDetails?.bgColor}
					width="4rem"
					sx={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}
				>
					<Box
						sx={{
							transform: "translateY(-35%)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							borderTopLeftRadius: 5,
							borderTopRightRadius: 5,
							paddingTop: 1.5,
						}}
						bgcolor={cardDetails?.bgColor}
					>
						{cardDetails?.icon}
					</Box>
				</Box>
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-end",
					alignItems: "center",
				}}
				marginX={1}
			>
				<Typography
					variant="body1"
					style={{ fontSize: "14px" }}
					color={cardDetails?.bgColor}
				>
					{cardDetails?.iconText}
				</Typography>
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					paddingY: 0.35,
				}}
				marginX={1}
			>
				<Typography variant="body1" style={{ fontSize: "12px" }}>
					70%
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-end",
				}}
				marginX={1}
			>
				<Typography variant="h6" style={{ fontSize: "16px", fontWeight: 600 }}>
					264
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
				marginX={1}
			>
				<Typography variant="body1" style={{ fontSize: "12px" }}>
					View Details
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-end",
				}}
				marginX={1}
			>
				<Typography variant="body1" style={{ fontSize: "12px" }}>
					View on map
				</Typography>
			</Box>
		</Box>
	);
};

export default DashboardCard;
