import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useContext } from "react";
import { tableHeaders } from "../RecordsSection/RecordsTable";
import { dashBoardContext } from "./../../../App";

const SelectedRecordsTable = () => {
	const dashBoardContextApi = useContext(dashBoardContext);

	const { handleSelectedRecords, selectedRecords, setSelectedRecords } =
		dashBoardContextApi;

	return (
		<TableContainer>
			{selectedRecords?.length ? (
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							{tableHeaders?.map(
								(headerName, index) =>
									index < 6 && (
										<TableCell key={`recordheaderselected + ${index}`}>
											{headerName}
										</TableCell>
									)
							)}
						</TableRow>
					</TableHead>
					<TableBody>
						{selectedRecords?.map((row, index) => (
							<TableRow
								key={`recordtable-selected-row-${index}`}
								// bgcolor={index % 2 !== 0 ? "secondary" : "gray"}
							>
								<TableCell component="th" scope="row">
									{row?.id}
								</TableCell>
								<TableCell>{row?.title}</TableCell>
								<TableCell>
									<Avatar src={row?.image} alt={row?.title} />
								</TableCell>
								<TableCell>{row?.category}</TableCell>
								<TableCell>{row?.price.toFixed(0)}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			) : (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: 500,
					}}
					color="red"
				>
					No Data Found
				</Box>
			)}
		</TableContainer>
	);
};

export default SelectedRecordsTable;
