import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {

    const clientsData = [
        {
            id: 1,
            name: 'Иван Петров',
            email: 'ivan@example.com',
            phone: '+998901234567',
            dateJoined: '2024-01-15',
        },
        {
            id: 2,
            name: 'Мария Иванова',
            email: 'maria@example.com',
            phone: '+998901234568',
            dateJoined: '2024-02-10',
        },
        {
            id: 3,
            name: 'Дмитрий Сидоров',
            email: 'dmitriy@example.com',
            phone: '+998901234569',
            dateJoined: '2024-03-05',
        },
    ];


    return (
        <motion.div
            className="bg-[#18181b] mx-10 my-10 text-white p-6 rounded-lg"
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, ease: 'easeOut'}}
        >
            <h1 className="text-xl title-text font-medium mb-4">Клиенты</h1>
            <table className="min-w-full  rounded-lg overflow-hidden">
                <thead>
                <tr className="">
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left text-sm font-normal text-gray-500">#</th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left text-sm font-normal text-gray-500">Имя</th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left text-sm font-normal text-gray-500">Электронная
                        почта
                    </th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left text-sm font-normal text-gray-500">Цена</th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left text-sm font-normal text-gray-500">Телефон</th>
                </tr>
                </thead>
                <tbody>
                {clientsData.map((client) => (
                    <tr key={client.id} className="hover:bg-[#29292F] cursor-pointer transition-colors">
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{client.id}</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{client.name}</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{client.email}</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{client.phone}</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{client.dateJoined}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </motion.div>
    );
};

export default Clients;
