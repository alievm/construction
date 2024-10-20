// src/components/Overview.js
import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const Overview = () => {
    return (
        <Card className="shadow-md dark:bg-[#18181b] dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-white dark:bg-[#2A2A2D] py-4 px-6">
                <Typography variant="h5" className="text-gray-800 title-text dark:text-gray-200  ">
                    Обзор объектов
                </Typography>
            </div>
            <CardBody>
                <div className="grid grid-cols-1 max-w-7xl w-full mx-auto sm:grid-cols-3 gap-6 p-6">
                    {/* Directly rendering each item */}
                    <div
                        className=" flex border border-white/5 gap-3 justify-center items-center backdrop-blur-md bg-black/10 rounded-lg p-4  transition duration-200 ease-in-out transform hover:scale-105">
                        <div className="bg-[#28c76f]/10 p-2 rounded will-change-transform">
                            <img src="/upload-4a29641d-8114-4271-b684-0f7cf8fe7303%203.svg"
                                 className="h-10 w-10 mx-auto text-gray-800 dark:text-gray-200"/>
                        </div>
                        <div className="max-w-min will-change-transform">
                            <Typography className="text-gray-600 title-text dark:text-gray-300">Свободных</Typography>
                            <Typography variant="h5"
                                        className="text-gray-800 title-text dark:text-gray-200 font-semibold">20</Typography>
                        </div>
                    </div>

                    <div
                        className=" flex border border-white/5 gap-3 justify-center items-center backdrop-blur-md bg-black/10 rounded-lg p-4  transition duration-200 ease-in-out transform hover:scale-105">
                        <div className="bg-[#28c76f]/10 p-2 rounded will-change-transform">
                            <img src="/upload-4a29641d-8114-4271-b684-0f7cf8fe7303%202.svg"
                                 className="h-10 w-10 mx-auto text-gray-800 dark:text-gray-200"/>
                        </div>
                        <div className="max-w-min will-change-transform">
                            <Typography
                                className="text-gray-600 title-text dark:text-gray-300">Забронированных</Typography>
                            <Typography variant="h5"
                                        className="text-gray-800 title-text dark:text-gray-200 font-semibold">10</Typography>
                        </div>
                    </div>

                    <div
                        className=" flex border border-white/5 gap-3 justify-center items-center backdrop-blur-md bg-black/10 rounded-lg p-4  transition duration-200 ease-in-out transform hover:scale-105">
                        <div className="bg-[#28c76f]/10 p-2 rounded will-change-transform">
                            <img src="/upload-4a29641d-8114-4271-b684-0f7cf8fe7303%201.svg"
                                 className="h-10 w-10 mx-auto text-gray-200 dark:text-gray-200"/>
                        </div>
                        <div className="max-w-min will-change-transform">
                            <Typography className="text-gray-600 title-text dark:text-gray-300">Проданных</Typography>
                            <Typography variant="h5"
                                        className="text-gray-800 title-text dark:text-gray-200 font-semibold">5</Typography>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default Overview;
