import React, { useContext, useEffect, useState, memo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { getTableRecordsApiCall } from "../APIS/Records/records.service";
import { dashBoardContext } from "../../../App";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { MdDelete } from "react-icons/md";
import SuccessModal from "../../../GlobalComponents/Modals/SuccessModal";

export const tableHeaders = [
	"S.No",
	"Title",
	"Image",
	"Category",
	"Price",
	"Select",
	"Delete",
];

const RecordsTable = memo(({ searchText }) => {
	const dashboardContextApi = useContext(dashBoardContext);

	const { tableRecords, setTableRecords, selectedRecords, setSelectedRecords } =
		dashboardContextApi;

	const [isDeleted, setIsDeleted] = useState(null);

	const [filteredTableList, setFilteredTableList] = useState([]);

	const handleSelectedRecords = (rowItem) => {
		if (selectedRecords?.length) {
			const previousRecords = [...selectedRecords];
			const newRecords = previousRecords?.every((each, index) => {
				if (each?.id !== rowItem?.id) {
					return each;
				}
			});
			return (
				newRecords && setSelectedRecords((prevState) => [...prevState, rowItem])
			);
		} else {
			setSelectedRecords((prevState) => [...prevState, rowItem]);
		}
	};

	const handleSearchResults = () => {
		if (searchText?.length) {
			const tableList = filteredTableList?.filter((each) => {
				if (
					each?.title.toLowerCase().includes(searchText.toLowerCase()) ||
					each?.category.toLowerCase().includes(searchText.toLowerCase())
				) {
					return each;
				}
			});

			setFilteredTableList(tableList);
		} else {
			setFilteredTableList(tableRecords);
		}
	};

	const handleDeleteRecord = (rowItem) => {
		setIsDeleted(rowItem);
	};

	async function handleGetTableRecordApiCall() {
		const response = await getTableRecordsApiCall();
		try {
			if (response?.status === 200) {
				setTableRecords(response?.data);
				setFilteredTableList(response?.data);
			}
		} catch (error) {
			console.log(error, "error");
			alert("Error while fetching records!!!");
			setTableRecords([]);
			setFilteredTableList([]);
		}
	}

	useEffect(() => {
		handleGetTableRecordApiCall();
	}, []);

	useEffect(() => {
		if (isDeleted) {
			const tableList = filteredTableList?.filter(
				(each) => each?.id !== isDeleted?.id
			);

			setFilteredTableList(tableList);
		}
	}, [isDeleted]);

	useEffect(() => {
		handleSearchResults();
	}, [searchText]);

	return (
		<>
			<TableContainer>
				{filteredTableList?.length ? (
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								{tableHeaders?.map((headerName, index) => (
									<TableCell key={`recordheader + ${index}`}>
										{headerName}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{filteredTableList?.map((row, index) => (
								<TableRow
									key={`recordtable-row-${index}`}
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
									<TableCell>
										<Button
											variant="contained"
											color="secondary"
											onClick={() => handleSelectedRecords(row)}
										>
											Select
										</Button>
									</TableCell>
									<TableCell>
										<Button
											variant="contained"
											color="error"
											startIcon={<MdDelete />}
											onClick={() => handleDeleteRecord(row)}
										>
											Delete
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				) : (
					<Box sx={{ display: "flex", justifyContent: "center" }} color="red">
						No Data Found
					</Box>
				)}
			</TableContainer>

			{isDeleted && (
				<SuccessModal isDeleted={isDeleted} setIsDeleted={setIsDeleted} />
			)}
		</>
	);
});

export default RecordsTable;
