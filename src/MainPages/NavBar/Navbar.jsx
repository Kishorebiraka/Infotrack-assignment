import React from "react";
import { Box } from "@mui/material";
import { IoIosNotifications } from "react-icons/io";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
	return (
		<Box
			height="3rem"
			boxShadow={5}
			bgcolor={"#ffffff"}
			sx={{
				display: "flex",
				justifyContent: "flex-end",
				alignItems: "center",
				gap: 3,
			}}
		>
			<Box bgcolor={"#c77980"} padding={0.5} borderRadius={5}>
				<IoIosNotifications size={25} />
			</Box>
			<Box>
				<Avatar
					src={
						"https://www.timedoctor.com/blog/images/2019/08/remote-employee-software-585x390.jpg"
					}
					alt={"profile-pic"}
				/>
			</Box>
		</Box>
	);
};

export default Navbar;
