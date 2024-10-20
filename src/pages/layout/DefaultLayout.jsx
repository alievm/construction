import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../../components/Header.jsx";
import Sidebar from "../../components/Sidebar.jsx";

const DefaultLayout = () => {
    return (
        <div className="dark:bg-[#09090b]  relative flex w-full">
            <svg className="absolute  -top-24 left-1/2 pointer-events-none" width="613" height="511" fill="none"
                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path className="fill-black opacity-[0.03] dark:fill-white"
                      d="M153.2 510.667 0 255.333 153.2 0h306.4l-63.833 63.833h-191.5l-121.284 191.5 121.284 191.5h191.5l63.833 63.834H153.2Z"></path>
                <path className="fill-black opacity-[0.03] dark:fill-white"
                      d="m452.383 153.203 64.676 102.133-64.676 102.133 61.969 61.97 98.457-164.103-98.457-164.103-61.969 61.97Z"></path>
            </svg>
            <Sidebar/>
            <div className="w-full h-screen overflow-y-scroll ">
               <div className="sticky z-10 top-0">
                   <Header/>
               </div>
                <Outlet/>
            </div>
        </div>
    );
};

export default DefaultLayout;
