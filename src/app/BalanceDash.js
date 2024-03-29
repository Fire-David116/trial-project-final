"use client"
import arrowImage from "./style/svgs/arrow.svg";
import Image from "next/image";
import bigCoinImg from "./style/svgs/bigcoinImage.svg"
import eth from "./style/svgs/eth.svg";
import wbtc from "./style/svgs/wbtc.svg";
import pepe from "./style/svgs/pepe.svg";
import mkr from "./style/svgs/mkr.svg";
import frax from "./style/svgs/frax.svg"
import trendingicon from "./style/svgs/tredingicon.svg"
import { useState } from "react";
const Balance = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div>
            <div className="bg-[#110A01] flex">
                <div className="h-full w-[1%] bg-[#110A01]">' '</div>
                <div className="flex h-full w-[100%] md:w-[96%] bg-custom-color rounded-[32px]">
                    <div className="w-4/6">
                        <a className="block font-bold text-[16px] md:text-[24px] text-white font-[HankenGroteskRegular] pt-4 md:pt-2 md:pt-6 pl-6 ">
                            My Balance
                        </a>
                        <a className="block font-bold text-[40px] sm:text-[48px] md:text-[60px] text-white font-[HankenGroteskRegular] pt-2 md:pt-6 pl-6">
                            $25,350.52
                        </a>
                        <b className="block text-[11px] md:text-[16px] text-white font-[HankenGroteskRegular] w-[300px] md:w-[500px] pt-[8px] md:pt-[16px] pl-[24px]">
                            Grow your portfolio{" "}
                            <a href="flex your_other_link_url" className="text-[#C86C00] underline font-[HankenGroteskRegular]"
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                >
                                check latest listed coins

                                <div
                                    style={{ width: "13px", height: "13px" }}
                                    className={`w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-1 ${isHovered ? 'animate-bounce' : ''}`}
                                >
                                    <Image
                                        src={arrowImage}
                                        alt="Arrow"
                                        className="w-2 h-2 md:w-24 md:h-auto mt-0.7"
                                        sizes="13vw"
                                        priority
                                    />
                                </div>
                            </a>
                        </b>
                        <div className="items-center pl-6 pt-2">
                            <a className="block text-[9px] md:text-[12px] text-white font-[HankenGroteskRegular] opacity-50">
                                *All values represented in USD
                            </a>
                        </div>
                    </div>
                    <div className="w-2/6">
                        <Image
                            src={bigCoinImg}
                            alt="Arrow"
                            className="md:mt-6 w-[200px]"
                            priority
                        />
                    </div>
                </div>
            </div>
            <a className="inline-block md:text-2xl text-white mt-[32px] mb-[16px]">
                Your top movers
            </a>
            <div className="h-[40%] flex overflow-x-hidden mr-[24px]">
                <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex animate-slide">
                    <div className="w-1/3 flex-none">
                        <div
                            style={{ width: "55px", height: "55px" }}
                            className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                        >
                            <Image
                                src={eth}
                                alt="Arrow"
                                className="w-full h-auto"
                                sizes="20vw"
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-2/3 flex flex-col">
                        <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">ETH</div>
                        <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$3,500<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                            <div>
                                <Image
                                    src={trendingicon}
                                    alt="Arrow"
                                    sizes="20vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex animate-slide">
                    <div className="w-1/3 flex-none">
                        <div
                            style={{ width: "55px", height: "55px" }}
                            className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                        >
                            <Image
                                src={wbtc}
                                alt="Arrow"
                                className="w-full h-auto"
                                sizes="20vw"
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-2/3 flex flex-col">
                        <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">WBTC</div>
                        <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$67,500<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                            <div>
                                <Image
                                    src={trendingicon}
                                    alt="Arrow"
                                    sizes="20vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex animate-slide">
                    <div className="w-1/3 flex-none">
                        <div
                            style={{ width: "55px", height: "55px" }}
                            className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                        >
                            <Image
                                src={frax}
                                alt="Arrow"
                                className="w-full h-auto"
                                sizes="20vw"
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-2/3 flex flex-col">
                        <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">FRAX</div>
                        <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$1.01<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                            <div>
                                <Image
                                    src={trendingicon}
                                    alt="Arrow"
                                    sizes="20vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex animate-slide">
                    <div className="w-1/3 flex-none">
                        <div
                            style={{ width: "55px", height: "55px" }}
                            className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                        >
                            <Image
                                src={pepe}
                                alt="Arrow"
                                className="w-full h-auto"
                                sizes="20vw"
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-2/3 flex flex-col">
                        <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">PEPE</div>
                        <div className="h-1/2 flex items-center  text-white ml-2 mb-3"><i class="fas fa-chevron-left"></i>$0.001<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                            <div>
                                <Image
                                    src={trendingicon}
                                    alt="Arrow"
                                    sizes="20vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex animate-slide">
                    <div className="w-1/3 flex-none">
                        <div
                            style={{ width: "55px", height: "55px" }}
                            className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                        >
                            <Image
                                src={mkr}
                                alt="Arrow"
                                className="w-full h-auto"
                                sizes="20vw"
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-2/3 flex flex-col">
                        <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">MKR</div>
                        <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$3,050<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                            <div>
                                <Image
                                    src={trendingicon}
                                    alt="Arrow"
                                    sizes="20vw"
                                    priority
                                />
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Balance;