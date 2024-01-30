import { Box } from "@mui/material";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, { useState, memo } from "react";

export const GOOGLE_API_Key = "AIzaSyDrmUuJ0sdooSkdJkRuku1izn1GhwBirSk";

const GoogleMapScreen = memo(() => {

	const [center, setCenter] = useState({
		lat: 17.383304080636297,
		lng: 78.40105384197322,
	});

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: GOOGLE_API_Key,
	});

	const loadHandler = (map) => {};

	const renderMap = () => {
		return (
			<>
				<GoogleMap
					onLoad={loadHandler}
					center={center}
					zoom={15}
					mapContainerStyle={{
						height: "70vh",
						width: "100%",
						borderRadius: 20,
					}}
				>
					<Marker position={center} />
				</GoogleMap>
			</>
		);
	};

	return (
		<Box
			height="100%"
			width="100%"
			border="1px solid #6e798a"
			borderRadius={5}
			position="relative"
		>
			<Box position={"absolute"} top={"1.5rem"} right={"1.5rem"} zIndex={2}>
				<input
					type="text"
					placeholder="search..."
					style={{ padding: "8px 12px", borderRadius: "8px" }}
				/>
			</Box>
			<Box height="70vh" width="100%">
				{isLoaded ? renderMap() : null}
			</Box>
		</Box>
	);
});

export default GoogleMapScreen;
