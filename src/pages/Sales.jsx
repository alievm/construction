import React from 'react';
import {motion} from "framer-motion";

const Sales = () => {

    const salesData = [
        {
            id: 1,
            propertyName: 'Квартира на Манаса',
            buyer: 'Иван Петров',
            price: '120,000 USD',
            saleDate: '2024-06-15',
        },
        {
            id: 2,
            propertyName: 'Дом на Амира Темура',
            buyer: 'Мария Иванова',
            price: '350,000 USD',
            saleDate: '2024-05-10',
        },
        {
            id: 3,
            propertyName: 'Офис на Шайхантаур',
            buyer: 'Дмитрий Сидоров',
            price: '500,000 USD',
            saleDate: '2024-04-25',
        },
    ];

    return (
        <motion.div className="bg-[#18181b] mx-10 my-10 text-white p-6 rounded-lg shadow-lg"
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, ease: 'easeOut'}}
        >
            <h1 className="text-xl title-text font-medium mb-4">Продажи недвижимости</h1>
            <table className="min-w-full  rounded-lg overflow-hidden">
                <thead>
                <tr className="">
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left font-normal text-gray-500">#</th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left font-normal text-gray-500">Название
                        недвижимости
                    </th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left font-normal text-gray-500">Покупатель</th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left font-normal text-gray-500">Цена</th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left font-normal text-gray-500">Дата
                        продажи
                    </th>
                </tr>
                </thead>
                <tbody>
                {salesData.map((sale) => (
                    <tr key={sale.id} className="hover:bg-[#29292F] cursor-pointer transition-colors">
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{sale.id}</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{sale.propertyName}</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{sale.buyer}</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{sale.price}</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{new Date(sale.saleDate).toLocaleDateString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </ motion.div>
    );
};

export default Sales;
