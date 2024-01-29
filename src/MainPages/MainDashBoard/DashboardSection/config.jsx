import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { HiOutlineKey } from "react-icons/hi";
import { MdOutlineSignalWifiOff } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

export const dashboardCardsList = [
	{
		id: 1,
		icon: <FaArrowRightArrowLeft size={20} fill={"white"} />,
		iconText: "Moving",
		percentageText: "70%",
		valueText: 264,
		detailsText: "View Details",
		mapText: "View on map",
		bgColor: "#036e1a",
	},
	{
		id: 2,
		icon: <RxCrossCircled size={20} fill={"white"} />,
		iconText: "Stopped",
		percentageText: "70%",
		valueText: 264,
		detailsText: "View Details",
		mapText: "View on map",
		bgColor: "#eb2d17",
	},
	{
		id: 3,
		icon: <HiOutlineKey size={20} fill={"white"} />,
		iconText: "Idle",
		percentageText: "70%",
		valueText: 264,
		detailsText: "View Details",
		mapText: "View on map",
		bgColor: "#fc9e0f",
	},
	{
		id: 4,
		icon: <MdOutlineSignalWifiOff size={20} fill={"white"} />,
		iconText: "Inactive",
		percentageText: "70%",
		valueText: 264,
		detailsText: "View Details",
		mapText: "View on map",
		bgColor: "#736756",
	},
	{
		id: 5,
		icon: <IoLogOutOutline size={20} fill={"white"} />,
		iconText: "Out of service",
		percentageText: "70%",
		valueText: 264,
		detailsText: "View Details",
		mapText: "View on map",
		bgColor: "#850312",
	},
];
