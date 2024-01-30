import { Box, Typography } from "@mui/material";
import React, { useState, memo } from "react";
import RecordsTable from "./RecordsTable";
import { debounceEffect } from "../../../utils";

const Records = memo(() => {
	const [searchText, setSearchText] = useState("");

	const handleChange = (text) => {
		setSearchText(text);
	};

	const debounce = debounceEffect(handleChange, 1000);

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
						Records
					</Typography>
				</Box>

				<Box>
					<input
						type="text"
						placeholder="search with title or category..."
						style={{ padding: "8px 12px", borderRadius: "8px" }}
						onChange={(event) => debounce(event.target.value)}
					/>
				</Box>
			</Box>

			<RecordsTable searchText={searchText} />
		</Box>
	);
});

export default Records;
