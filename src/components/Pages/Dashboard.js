// Dashboard.js
"use client"
import Balance from "../BalanceDash";
import ChartG from "../AreaChart";
import trendingicon from "../../app/assests/style/svgs/tredingicon.svg"
import Image from "next/image";
import SortingTable from "../SortingTable"
import Activity from "../Activity";
export default function Dashboard() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 over h-full md:h-full bg-[#110A01] m-[8px] md:m-[80px] md:mt-[32px] md:mb-[8px]">
      <div className="bg-[#110A01] mt-[82px] md:mt-0">
        <div><Balance /></div>
      </div>
      <div className="items-center bg-[#110A01] mb-[10px] h-[60%]">
        <div className="h-[18%] flex justify-between">
          <a className="font-bold text-[28px] sm:text-[32px] lg:text-[32px]  md:text-[32px] text-white mt-[24px] md:mt-[-10px]">PnL Analysis</a>
          <p className="bg-[#102407] font-bold text-[16px] text-treding-color h-[27px] w-[161px] mt-[34px] md:mt-[3px] flex items-center justify-center rounded-[100px]">
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
        <div className="h-[100%] mt-[32px] md:mt-[10px]"><ChartG /></div>
      </div>
      <div className="bg-[#110A01]">
        <div className="w-[8%] bg-border-color"></div>
        <div className="w-[92%]">
          <a className="block col-span-2 sm:col-span-1 font-bold text-[32px] text-white font-bold">
            Your holdings
          </a>
          <div className="mt-[32px]"><SortingTable /></div></div>
      </div>
      <div className="bg-[#110A01]">
        <div className="w-[8%]"></div>
        <div className="w-[92%]">
          <a className="block col-span-2 sm:col-span-1 font-bold text-white text-[32px]">
            Recent Activity
          </a>
          <div className="mt-[32px]"><Activity /></div>
        </div>
      </div>
    </div>
  );
}