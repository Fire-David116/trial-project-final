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
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 over h-full md:h-full bg-[#110A01] m-[8px] md:m-[32px] md:mt-[20px]">
      <div className="bg-[#110A01]">
        <div><Balance /></div>
      </div>
      <div className="items-center bg-[#110A01] md:m-[5px] h-[60%]">
        <div className="h-[18%] flex justify-between">
          <a className="font-bold text-[24px] md:text-[32px] text-white">PnL Analysis</a>
          <p className="bg-[#102407] font-bold text-[16px] text-treding-color h-[27px] w-[161px] mt-[6px] flex items-center justify-center rounded-[100px] md:mr-[36px]">
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
      <div className="sm:mt-[-20px] md:mt-[-30px]">
        <div className="w-[8%]"></div>
        <div className="w-[92%] ml-[30px] mt-[-30px]">
          <a className="block col-span-2 sm:col-span-1 text-[24px] md:text-[32px] text-white font-bold ml-[-10px] sm:ml-[0px] md:ml-[0px]">
            Your holdings
          </a>
          <SortingTable /></div>
      </div>
      <div className="bg-[#110A01]">
        <div className="w-[8%]"></div>
        <div className="w-[92%] mt-[-60px] ml-[30px]">
          <a className="block col-span-2 sm:col-span-1 font-bold text-[24px] md:text-[32px] text-white font-bold ml-[-30px] md:ml-[0px] mt-[60px] md:mt-[0px]">
            Recent Activity
          </a>
          <Activity />
        </div>
      </div>
    </div>
  );
}
