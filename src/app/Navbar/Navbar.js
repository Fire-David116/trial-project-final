"use client"
import { useState, useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FiMoreVertical } from "react-icons/fi";

import NavLogo from './logo.svg'
import buttonlogo from './button-logo.svg';
const Nav = () => {
    let name;
    const [open, setOpen] = useState(true)
    const [seo, setSeo] = useState("Test")
    const [flag, setFlag] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024); // Example breakpoint for mobile view
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial call to set initial state
        handleResize();

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <nav class={`bg-custom-color border-gray-200 py-2.5 dark:bg-gray-900 z-50 rounded-lg ${isMobile ? "fixed top-0 left-0 right-0" : " "}`}>
            <div class="flex flex-wrap items-center justify-between px-4 mx-auto">
                <p href="#" class="flex items-left">
                    <Link href="/">
                        <Image
                            src={NavLogo}
                            alt='logo'
                            width={152}
                            height={42}
                            className='cursor-pointer md:ml-[80px]'
                        />
                    </Link>
                </p>
                <div class="flex items-center lg:order-2">
                    <div class="hidden mt-2 mr-4 sm:inline-block">
                        <span></span>
                    </div>
                    <button className="flex text-white text-sm px-1 lg:px-2 py-1 lg:py-1 sm:mr-2 lg:mr-0 items-center justify-center rounded-[100px] bg-gradient-to-br from-[#FF6B29] to-[#FF727B] hover:from-[#FF6B29] hover:to-[#FF7062] focus:bg-orange-600 font-[HankenGroteskRegular]">
                        <Image
                            style={{ height: "25px", width: "25px" }}
                            src={buttonlogo}
                            alt="CodeBucks logo"
                            className={`w-[10px]`}
                            priority
                        />
                        <span className="hidden sm:inline ml-2">degentrades.lens</span>
                    </button>
                    <button data-collapse-toggle="mobile-menu-2" type="button" onClick={() => setOpen(!open)}
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden"
                        aria-controls="mobile-menu-2" aria-expanded="true">
                        <span class="sr-only">Open main menu</span>
                        <FiMoreVertical className="w-6 h-6" />
                    </button>
                </div>
                <div class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1 font-[HankenGroteskRegular]" id="mobile-menu-2">
                    {open ? <ul class={`${!isMobile ? "block": "hidden" } flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0`}>
                        <li className="lg:px-5 py-2 text-right">
                            <b className='rounded hover:border-b-4 text-white hover:text-border-color border-border-color ' style={{ fontSize: "0.9rem" }}>
                                <Link href="/">Swap</Link>
                            </b>

                        </li>
                        <li className="lg:px-5 py-2 text-right">
                            <b className='rounded hover:border-b-4 text-white  hover:text-border-color border-border-color' style={{ fontSize: "0.9rem" }}>
                                <Link href="/">Bridge</Link>
                            </b>


                        </li>
                        <li className="lg:px-5 py-2 text-right">
                            <b className='rounded border-b-4 text-border-color text-border-color hover:border-b-4  hover:text-border-color border-border-color' style={{ fontSize: "0.9rem" }}>
                                <Link href="/">Dashboard</Link>
                            </b>

                        </li>
                        <li className="lg:px-5 py-2 text-right">
                            <b className='rounded hover:border-b-4  text-white hover:text-border-color border-border-color' style={{ fontSize: "0.9rem" }}>
                                <Link href="/">Analytics</Link>
                            </b>
                        </li>
                        <li>
                        </li>
                    </ul>:
                    <ul class="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
                    <li className="lg:px-5 py-2 text-right">
                        <b className='rounded hover:border-b-4 text-white hover:text-border-color border-border-color ' style={{ fontSize: "0.9rem" }}>
                            <Link href="/">Swap</Link>
                        </b>

                    </li>
                    <li className="lg:px-5 py-2 text-right">
                        <b className='rounded hover:border-b-4 text-white  hover:text-border-color border-border-color' style={{ fontSize: "0.9rem" }}>
                            <Link href="/">Bridge</Link>
                        </b>


                    </li>
                    <li className="lg:px-5 py-2 text-right">
                        <b className='rounded border-b-4 text-border-color text-border-color hover:border-b-4  hover:text-border-color border-border-color' style={{ fontSize: "0.9rem" }}>
                            <Link href="/">Dashboard</Link>
                        </b>

                    </li>
                    <li className="lg:px-5 py-2 text-right">
                        <b className='rounded hover:border-b-4  text-white hover:text-border-color border-border-color' style={{ fontSize: "0.9rem" }}>
                            <Link href="/">Analytics</Link>
                        </b>
                    </li>
                    <li>
                    </li>
                </ul>}
                </div>
            </div>
        </nav>

    )
}
export default Nav