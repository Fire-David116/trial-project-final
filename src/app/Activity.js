"use client";
import React, { useState } from 'react';
import Image from "next/image";
import coinact from "./style/svgs/coin-activity.svg";
import bcoinact from "./style/svgs/bcoin-activity.svg";
import ucoinact from "./style/svgs//ucoin-activity.svg";
import ecoinact from "./style/svgs//ecoin-activity.svg";
import mcoinact from "./style/mcoin-activity.png";
import arrowoutward from "./style/svgs/arrow.svg";
import TablePagination from '@mui/material/TablePagination';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
const rows = [
    createData(1, 'Pepe PEPE', 1000520, 3500, 8750, '/pepe.png'),
    createData(3, 'Frax FRAX', 350, 3500, 8750, '/frax.png'),
    createData(4, 'Ethereum ETH', 2.5, 3500, 8750, '/eth.png'),
    createData(5, 'Uniswap UNI', 25, 3500, 8750, '/uni.png'),
    createData(6, 'Chainlink Token LINK', 50, 3500, 8750, '/chain.png'),
    createData(7, 'Wrapped Bitcoin WBTC', 0.05, 3500, 8750, '/wbtc.png'),
    createData(8, 'Shiba INU SHIB', 3800, 3500, 8750, '/shiba.png'),
    createData(10, 'Lido DAO Token LDO', 1, 3500, 8750, '/lido.png'),
    createData(11, 'Maker MKR', 1, 3500, 8750, '/mkr.png'),
    createData(12, 'Ribbon RBN', 350, 3500, 8750, '/rbn.png'),
];

function createData(id, name, calories, fat, carbs, avatar) {
    return {
        id,
        name,
        calories,
        fat,
        carbs,
        avatar
    };
}
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}
const Activity = () => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHoveredA] = useState(false);
    const [isHovered2, setIsHoveredB] = useState(false);
    const [isHovered3, setIsHoveredC] = useState(false);
    const [isHovered4, setIsHoveredD] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handleMouseEnterA = () => {
        setIsHoveredA(true);
    };
    const handleMouseLeaveA = () => {
        setIsHoveredA(false);
    };
    const handleMouseEnterB = () => {
        setIsHoveredB(true);
    };
    const handleMouseLeaveB = () => {
        setIsHoveredB(false);
    };
    const handleMouseEnterC = () => {
        setIsHoveredC(true);
    };
    const handleMouseLeaveC = () => {
        setIsHoveredC(false);
    };
    const handleMouseEnterD = () => {
        setIsHoveredD(true);
    };
    const handleMouseLeaveD = () => {
        setIsHoveredD(false);
    };
    return (
        <activity>
            <div className="w-auto">
                <div
                    className={`w-full h-[70px] flex-none rounded-lg flex-shrink-0 mr-5 ${isHovered ? 'bg-[#190f01]' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="flex h-[70px]">
                        <div className="w-1/8 flex-none">
                            <div className="w-20 md:w-24 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2">
                                <Image
                                    src={coinact}
                                    alt="Arrow"
                                    className="w-full h-auto"
                                    sizes="20vw"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-7/8 flex flex-col w-[100%]">
                            <div className={`h-1/2 flex font-bold items-center ml-2 text-lg justify-between ${isHovered ? 'text-[#c86c00] transition-colors duration-300' : 'text-white'}`}>
                                <span>Swapped</span>
                                <span className="text-[13px] text-base text-white">03/19/23</span>
                            </div>
                            <div className="text-white h-1/2 flex items-center ml-2 text-[13px] md:text-[16px] justify-between">
                                <span>20 LINK For 0.1074ETH</span>
                                <div style={{ width: "12px", height: "12px" }} className={isHovered ? 'animate-bounce' : ''}>
                                    <Image
                                        src={arrowoutward}
                                        alt="Arrow"
                                        className="w-full h-auto"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[70px] flex-none rounded-lg flex-shrink-0 mr-5 hover:bg-[#190f01]"
                                    onMouseEnter={handleMouseEnterA}
                                    onMouseLeave={handleMouseLeaveA}
                                    >
                    <div className="flex h-[70px]">
                        <div className="w-1/8 flex-none">
                            <div
                                className="w-20 md:w-24 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                            >
                                <Image
                                    src={mcoinact}
                                    alt="Arrow"
                                    className="w-full h-auto"
                                    sizes="20vw"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-7/8 flex flex-col w-[100%]">
                            <div className={`h-1/2 flex font-bold items-center  text-white ml-2 text-lg justify-between ${isHovered1 ? 'text-[#c86c00] transition-colors duration-300' : 'text-white'}`}>Received<span className="text-[13px] text-base text-white">03/19/23</span></div>
                            <div className="h-1/2 flex items-center text-white ml-2  justify-between">NFT From mutant.ens
                                <div style={{ width: "12px", height: "12px" }} className={isHovered1 ? 'animate-bounce' : ''}>
                                    <Image
                                        src={arrowoutward}
                                        alt="Arrow"
                                        className="w-full h-auto"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[70px] flex-none rounded-lg flex-shrink-0 mr-5  hover:bg-[#190f01] hover:text-[colo]"
                                                    onMouseEnter={handleMouseEnterB}
                                                    onMouseLeave={handleMouseLeaveB}
                                                    >
                    <div className="flex h-[70px]">
                        <div className="w-1/8 flex-none">
                            <div
                                className="w-20 md:w-24 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                            >
                                <Image
                                    src={bcoinact}
                                    alt="Arrow"
                                    className="w-full h-auto"
                                    sizes="20vw"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-7/8 flex flex-col w-[100%]">
                            <div className={`h-1/2 flex font-bold items-center  text-white ml-2 text-lg justify-between ${isHovered2 ? 'text-[#c86c00] transition-colors duration-300' : 'text-white'}`}>Transferred<span className="text-[13px] text-base  text-white">03/19/23</span></div>
                            <div className="h-1/2 flex items-center text-white ml-2  justify-between">WBTC To 0x6584...BD68
                                <div style={{ width: "12px", height: "12px" }} className={isHovered2 ? 'animate-bounce' : ''}>
                                    <Image
                                        src={arrowoutward}
                                        alt="Arrow"
                                        className="w-full h-auto"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[70px] flex-none rounded-lg flex-shrink-0 mr-5 hover:bg-[#190f01] "
                                                                    onMouseEnter={handleMouseEnterC}
                                                                    onMouseLeave={handleMouseLeaveC}>
                    <div className="flex h-[70px]">
                        <div className="w-1/8 flex-none">
                            <div
                                className="w-20 md:w-24 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                            >
                                <Image
                                    src={ucoinact}
                                    alt="Arrow"
                                    className="w-full h-auto"
                                    sizes="20vw"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-7/8 flex flex-col w-[100%]">
                            <div className={`h-1/2 flex font-bold items-center  text-white ml-2 text-lg justify-between ${isHovered3 ? 'text-[#c86c00] transition-colors duration-300' : 'text-white'}`}>Bridged<span className="text-[13px] ext-base text-white">03/19/23</span></div>
                            <div className="h-1/2 flex items-center text-white ml-2  justify-between">ethereum to Polygon
                                <div style={{ width: "12px", height: "12px" }} className={isHovered3 ? 'animate-bounce' : ''}>
                                    <Image
                                        src={arrowoutward}
                                        alt="Arrow"
                                        className="w-full h-auto"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[70px] flex-none rounded-lg flex-shrink-0 mr-5 hover:bg-[#190f01]"
                                                                    onMouseEnter={handleMouseEnterD}
                                                                    onMouseLeave={handleMouseLeaveD}>
                    <div className="flex h-[70px]">
                        <div className="w-1/8 flex-none">
                            <div
                                className="w-20 md:w-24 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                            >
                                <Image
                                    src={ecoinact}
                                    alt="Arrow"
                                    className="w-full h-auto"
                                    sizes="20vw"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-7/8 flex flex-col w-[100%]">
                            <div className={`h-1/2 flex font-bold items-center  text-white ml-2 text-lg justify-between ${isHovered4 ? 'text-[#c86c00] transition-colors duration-300' : 'text-white'}`}>Swapped<span className="text-[13px] text-base text-white">03/19/23</span></div>
                            <div className="h-1/2 flex items-center text-white ml-2  justify-between">1ETH For 3,500 USDC
                                <div style={{ width: "12px", height: "12px" }} className={isHovered4 ? 'animate-bounce' : ''}>
                                    <Image
                                        src={arrowoutward}
                                        alt="Arrow"
                                        className="w-full h-auto"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col items-center justify-center md:mt-[0px]">
                        <TablePagination
                            className="bg-[#110A01] text-[#C86C00]"
                            rowsPerPageOptions={[]} // Hide rows per page options
                            component="div"
                            count={rows.length * 5}
                            page={page}
                            onPageChange={handleChangePage}
                            labelDisplayedRows={({ from, to, count }) => `Page ${page + 1} of ${Math.ceil(count / rowsPerPage)}`} // Displayed rows label
                            rowsPerPage={rowsPerPage} // Current rows per page
                            onChangeRowsPerPage={handleChangeRowsPerPage} // Function to handle rows per page change
                            nextIconButton={<KeyboardArrowRightIcon />} // Next button icon
                            backIconButton={<KeyboardArrowLeftIcon />} // Back button icon
                        />
                    </div>
                </div>
            </div>
        </activity>
    );
};

export default Activity;