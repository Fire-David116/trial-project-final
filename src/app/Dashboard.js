// Dashboard.js
"use client"
import Balance from "./BalanceDash";
import ChartG from "./AreaChart";
import trendingicon from "./style/svgs/tredingicon.svg"
import Image from "next/image";
import SortingTable from "./SortingTable"
import Activity from "./Activity";
export default function Dashboard() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 over h-full md:h-full bg-[#110A01] m-[8px] md:m-[32px] md:mt-[20px]">
      <div className="bg-[#110A01]">
        <div><Balance /></div>
      </div>
      <div className="items-center bg-[#110A01] mb-[10px] h-[60%]">
        <div className="h-[18%] flex justify-between">
          <a className="font-bold text-[24px] md:text-[32px] text-white mt-[-10px]">PnL Analysis</a>
          <p className="bg-[#102407] font-bold text-[16px] text-treding-color h-[27px] w-[161px] mt-[-2px] flex items-center justify-center rounded-[100px] md:mr-[36px]">
            This Month 5%
            <span className="inline-block bg-[#102407] w-6">
              <Image
                src={trendingicon}
                alt="Arrow"
                sizes="20vw"
                priority
                className="ml-[3px]"
              />
            </span>
          </p>
        </div>
        <div className="h-[100%]"><ChartG /></div>
      </div>
      <div className="bg-[#110A01] sm:mt-[0px] ml-[30px] md:ml-[0px] mb-[0px] sm:mb-[0px] lg:mb-[30px]">
        <div className="w-[8%] bg-border-color"></div>
        <div className="w-[92%] mt-[-30px] md:mt-[0px] mb-[20px] md:mb-[0px]">
          <a className="block col-span-2 sm:col-span-1 font-bold text-[24px] md:text-[32px] text-white font-bold ml-[-30px] sm:ml-[-30px] md:ml-[0px]">
            Your holdings
          </a>
          <SortingTable /></div>
      </div>
      <div className="bg-[#110A01] lg:mt-[10px] sm:mt-[10px] ml-[-20px] md:ml-[-20px]">
        <div className="w-[8%]"></div>
        <div className="w-[92%] ml-[30px]">
          <a className="block col-span-2 sm:col-span-1 font-bold text-[24px] md:text-[32px] text-white font-bold ml-[-10px] md:ml-[0px] md:mt-[0px]">
            Recent Activity
          </a>
          <Activity />
        </div>
      </div>
    </div>
  );
}