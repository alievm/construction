import React from 'react';
import { motion } from 'framer-motion';

const Payments = () => {

    const paymentsData = [
        {
            id: 1,
            payer: 'Иван Петров',
            amount: '500 USD',
            paymentDate: '2024-08-15',
            status: 'Оплачен',
            transactionOrder: 'TRX123456',
        },
        {
            id: 2,
            payer: 'Мария Иванова',
            amount: '1000 USD',
            paymentDate: '2024-07-20',
            status: 'Ожидается',
            transactionOrder: 'TRX654321',
        },
        {
            id: 3,
            payer: 'Дмитрий Сидоров',
            amount: '2000 USD',
            paymentDate: '2024-06-30',
            status: 'Оплачен',
            transactionOrder: 'TRX789012',
        },
    ];

    return (
        <motion.div
            className="bg-[#18181b] mx-10 my-10 text-white p-6 rounded-lg"
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, ease: 'easeOut'}}
        >
            <h1 className="text-xl title-text font-medium mb-4">Платежи</h1>
            <table className="min-w-full rounded-lg overflow-hidden">
                <thead>
                <tr>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left font-normal text-gray-500">#</th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left font-normal text-gray-500">Плательщик</th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left font-normal text-gray-500">Сумма</th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left font-normal text-gray-500">Дата
                        платежа
                    </th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left font-normal text-gray-500">Статус</th>
                    <th className="py-2 border-b border-white/5 px-4 text-sm text-left font-normal text-gray-500">Ордер
                        транзакции
                    </th>
                </tr>
                </thead>
                <tbody>
                {paymentsData.map((payment) => (
                    <tr key={payment.id} className="hover:bg-[#29292F] cursor-pointer transition-colors">
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{payment.id}</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{payment.payer}</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{payment.amount}</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{new Date(payment.paymentDate).toLocaleDateString()}</td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">
                            {payment.status === 'Оплачен' && (
                                <span className="mc zp aen akd asa asm axf axh aza bda bde bdy">
                    {payment.status}
                  </span>
                            )}
                            {payment.status === 'Ожидается' && (
                                <span className="mc zp aen amp asa asm axf axh bbq bda bde bex">
                    {payment.status}
                  </span>
                            )}

                        </td>
                        <td className="py-2 border-b border-white/5 px-4 text-sm">{payment.transactionOrder}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </motion.div>
    );
};

export default Payments;
