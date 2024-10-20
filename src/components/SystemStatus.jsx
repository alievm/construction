// src/components/SystemStatus.js
import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const SystemStatus = () => {
    return (
        <Card className="bg-white dark:bg-[#18181b] rounded-lg relative overflow-hidden transition-colors duration-300 shadow-md">
            <div className="bg-white dark:bg-[#2A2A2D] py-4 px-6">
                <Typography variant="h6" className="text-gray-800 title-text dark:text-gray-200 font-semibold">
                    Состояние системы
                </Typography>
            </div>
            <CardBody>
                <div className="grid  grid-cols-3 gap-4">
                    <div className="flex flex-col h-full px-3 py-4 bg-[#F8A805] rounded-lg w-full ">
                        <div className="flex gap-10 items-center text-xs font-medium text-white">
                            <div className="gap-1.5 self-stretch my-auto">
                              Общее количество объектов
                            </div>
                            <div className=" my-auto w-10 text-right uppercase whitespace-nowrap rounded  min-h-[20px]">
                                +4.44
                            </div>
                        </div>
                        <div className="flex gap-10 justify-between mt-1.5">
                            <div className="flex flex-col whitespace-nowrap">
                                <div className="text-xs text-white text-opacity-80">Объем</div>
                                <div className="mt-1 text-lg font-medium text-white">342</div>
                            </div>
                            <div className="flex relative flex-col self-start mt-4">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/627f75601c8292ef5ecf508373c3346aa6883dee72150e611f4d8d2201d2eab1?apiKey=0e60d26ffe404316aa35b6241738714a&"
                                    className="object-contain z-0 self-center aspect-[3.25] w-[98px]"  // increased width
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d09eebfbbfa216e5572cb1b82ecfa91a9eb0dfaffd5faa9541ca70b5648196f6?apiKey=0e60d26ffe404316aa35b6241738714a&"
                                    className="object-contain absolute top-0 right-0 z-0 aspect-[4.33] h-[22px] w-[98px]"  // increased width and height
                                />
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col px-3 py-4 bg-[#28c76f] rounded-lg w-full ">
                        <div className="flex gap-10 items-center text-xs font-medium text-white">
                            <div className="gap-1.5 self-stretch my-auto">
                                Общее количество клиентов
                            </div>
                            <div className=" my-auto w-10 text-right uppercase whitespace-nowrap rounded  min-h-[20px]">
                                +4.44
                            </div>
                        </div>
                        <div className="flex gap-10 justify-between mt-1.5">
                            <div className="flex flex-col whitespace-nowrap">
                                <div className="text-xs text-white text-opacity-80">Объем</div>
                                <div className="mt-1 text-lg font-medium text-white">342</div>
                            </div>
                            <div className="flex relative flex-col self-start mt-4">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/627f75601c8292ef5ecf508373c3346aa6883dee72150e611f4d8d2201d2eab1?apiKey=0e60d26ffe404316aa35b6241738714a&"
                                    className="object-contain z-0 self-center aspect-[3.25] w-[98px]"  // increased width
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d09eebfbbfa216e5572cb1b82ecfa91a9eb0dfaffd5faa9541ca70b5648196f6?apiKey=0e60d26ffe404316aa35b6241738714a&"
                                    className="object-contain absolute top-0 right-0 z-0 aspect-[4.33] h-[22px] w-[98px]"  // increased width and height
                                />
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col px-3 py-4 bg-[#0065FF] rounded-lg w-full ">
                        <div className="flex gap-10 items-center text-xs font-medium text-white">
                            <div className="gap-1.5 self-stretch my-auto">
                                Общее количество клиентов
                            </div>
                            <div className=" my-auto w-10 text-right uppercase whitespace-nowrap rounded  min-h-[20px]">
                                +4.44
                            </div>
                        </div>
                        <div className="flex gap-10 justify-between mt-1.5">
                            <div className="flex flex-col whitespace-nowrap">
                                <div className="text-xs text-white text-opacity-80">Объем</div>
                                <div className="mt-1 text-lg font-medium text-white">342</div>
                            </div>
                            <div className="flex relative flex-col self-start mt-4">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/627f75601c8292ef5ecf508373c3346aa6883dee72150e611f4d8d2201d2eab1?apiKey=0e60d26ffe404316aa35b6241738714a&"
                                    className="object-contain z-0 self-center aspect-[3.25] w-[98px]"  // increased width
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d09eebfbbfa216e5572cb1b82ecfa91a9eb0dfaffd5faa9541ca70b5648196f6?apiKey=0e60d26ffe404316aa35b6241738714a&"
                                    className="object-contain absolute top-0 right-0 z-0 aspect-[4.33] h-[22px] w-[98px]"  // increased width and height
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex shadow-md bg-[#2A2A2D] mt-5 text-white justify-start md:justify-center rounded-lg overflow-hidden mx-auto py-4 px-2  md:mx-12'>

                    <div
                        className='flex group hover:bg-[#32b76c] hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
                        <div className='flex items-center px-4 py-4'>
                            <div className='text-center'>
                                <p className='text-gray-100 group-hover:text-gray-100 text-sm transition-all	duration-300'> Вс </p>
                                <p className='text-gray-100 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 11 </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className='flex group hover:bg-[#32b76c] hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
                        <div className='flex items-center px-4 py-4'>
                            <div className='text-center'>
                                <p className='text-gray-100 group-hover:text-gray-100 text-sm transition-all	duration-300'> Пн </p>
                                <p className='text-gray-100 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 12 </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className='flex group hover:bg-[#32b76c] hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
                        <div className='flex items-center px-4 py-4'>
                            <div className='text-center'>
                                <p className='text-gray-100 group-hover:text-gray-100 text-sm transition-all	duration-300'> Вт </p>
                                <p className='text-gray-100 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 13</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className='flex group bg-[#32b76c] shadow-lg dark-shadow rounded-lg mx-1 cursor-pointer justify-center relative  w-16'>
            <span className="flex h-3 w-3 absolute -top-1 -right-1">
              <span
                  className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-green-400 "></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-100"></span>
            </span>
                        <div className='flex items-center px-4 py-4'>
                            <div className='text-center'>
                                <p className='text-gray-100 text-sm'> Ср </p>
                                <p className='text-gray-100  mt-3 font-bold'> 14 </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className='flex group hover:bg-[#32b76c] hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center w-16'>
                        <div className='flex items-center px-4 py-4'>
                            <div className='text-center'>
                                <p className='text-gray-100 group-hover:text-gray-100 text-sm transition-all	duration-300'> Чт </p>
                                <p className='text-gray-100 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 15 </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className='flex group hover:bg-[#32b76c] hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
                        <div className='flex items-center px-4 py-4'>
                            <div className='text-center'>
                                <p className='text-gray-100 group-hover:text-gray-100 text-sm transition-all	duration-300'> Пт </p>
                                <p className='text-gray-100 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 16 </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className='flex group hover:bg-[#32b76c] hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
                        <div className='flex items-center px-4 py-4'>
                            <div className='text-center'>
                                <p className='text-gray-100 group-hover:text-gray-100 text-sm transition-all	duration-300'> Сб </p>
                                <p className='text-gray-100 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 17 </p>
                            </div>
                        </div>
                    </div>


                </div>
            </CardBody>
        </Card>
    );
};

export default SystemStatus;
