import "./App.css";

import { Box } from "@mui/material";
import Navbar from "./MainPages/NavBar/Navbar";
import Sidebar from "./MainPages/SideBar/Sidebar";
import MainDashboard from "./MainPages/MainDashBoard/MainDashboard";
import { createContext, useContext, useState } from "react";

export const dashBoardContext = createContext();


function App() {
	const [tableRecords, setTableRecords] = useState([]);

	const [selectedRecords, setSelectedRecords] = useState([]);


	return (
		<dashBoardContext.Provider
			value={{
				tableRecords,
				setTableRecords,
				selectedRecords,
				setSelectedRecords,
			}}
		>
			<Box
				width="100%"
				height="100vh"
				maxWidth="1600px"
				margin="auto"
				border="1px solid black"
				position="relative"
			>
				<Navbar />
				<Sidebar />
				<MainDashboard />
			</Box>
		</dashBoardContext.Provider>
	);
}

export default App;
