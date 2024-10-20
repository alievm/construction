import React from 'react';
import { motion } from 'framer-motion';

const Properties = () => {

    const propertiesData = [
        {
            id: 1,
            title: 'Квартира в центре',
            description: 'Современная квартира с 2 спальнями и балконом.',
            price: 120000,
            area: 75,
            status: 'Свободен',
            dateAdded: '2024-10-01',
        },
        {
            id: 2,
            title: 'Дом с садом',
            description: 'Просторный дом с большим двором.',
            price: 250000,
            area: 150,
            status: 'Забронирован',
            dateAdded: '2024-10-05',
        },
        {
            id: 3,
            title: 'Студия у моря',
            description: 'Красивая студия с видом на море.',
            price: 80000,
            area: 40,
            status: 'Продан',
            dateAdded: '2024-09-15',
        },
    ];


    return (
        <motion.div className="bg-[#18181b] mx-10 my-10 text-white p-6 rounded-lg shadow-lg"
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, ease: 'easeOut'}}
        >
            <h1 className="text-xl title-text font-medium mb-4">Объекты недвижимости</h1>
            <table className="min-w-full  rounded-lg overflow-hidden">
                <thead>
                <tr className="">
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left text-sm font-normal text-gray-500">Название</th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left text-sm font-normal text-gray-500">Описание</th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left text-sm font-normal text-gray-500">Цена</th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left text-sm font-normal text-gray-500">Площадь (м²)</th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left text-sm font-normal text-gray-500">Статус</th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left text-sm font-normal text-gray-500">Дата добавления</th>
                </tr>
                </thead>
                <tbody>
                {propertiesData.map((property) => (
                    <tr key={property.id} className="hover:bg-[#29292F] cursor-pointer transition-colors">
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{property.title}</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{property.description}</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{property.price.toLocaleString()} ₽</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{property.area} м²</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">
                            {property.status === 'Свободен' && (
                                <span className="mc zp aen akd asa asm axf axh aza bda bde bdy">
                    {property.status}
                  </span>
                            )}
                            {property.status === 'Забронирован' && (
                                <span className="mc zp aen amp asa asm axf axh bbq bda bde bex">
                    {property.status}
                  </span>
                            )}
                            {property.status === 'Продан' && (
                                <span className="mc zp aen alh asa asm axf axh bae bda bde beo">
                    {property.status}
                  </span>
                            )}
                        </td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{new Date(property.dateAdded).toLocaleDateString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </motion.div>
    );
};

export default Properties;
