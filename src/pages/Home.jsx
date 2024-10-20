// src/pages/Home.js
import React from 'react';
import Overview from '../components/Overview';
import LatestDeals from '../components/LatestDeals';
import ExpiringReserves from '../components/ExpiringReserves';
import ExpectedPayments from '../components/ExpectedPayments';
import SystemStatus from '../components/SystemStatus';
import Header from "../components/Header.jsx";
import {motion} from "framer-motion";

const Home = () => {

    return (
        <motion.div  initial={{opacity: 0, y: -50}}
                     animate={{opacity: 1, y: 0}}
                     transition={{duration: 0.5, ease: 'easeOut'}} className="flex">
            <div className="flex-1 p-6">
                <Overview />
                <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <LatestDeals />
                    <SystemStatus />
                    <ExpectedPayments />
                    <ExpiringReserves />
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
