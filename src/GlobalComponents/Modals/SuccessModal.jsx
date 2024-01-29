import { Box } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
};

const SuccessModal = ({ isDeleted, setIsDeleted }) => {
	return (
		<Modal
			open={isDeleted}
			onClose={() => {
				setIsDeleted(null);
			}}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>Deleted Record Successfully!!!</Box>
		</Modal>
	);
};

export default SuccessModal;
