// src/components/ExpectedPayments.js
import React from 'react';
import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';

const ExpectedPayments = () => {
    return (
        <Card className="bg-white dark:bg-[#18181b] rounded-lg relative overflow-hidden transition-colors duration-300">
        <div className="bg-white dark:bg-[#2A2A2D]  py-4 px-6">
            <Typography variant="h6" className="text-gray-800 title-text dark:text-gray-200  ">
                Ожидаемые платежи
            </Typography>
        </div>
        <CardBody>
            <ul>
                {Array.from({length: 5}, (_, index) => (
                    <li key={index} className="border-b py-2 dark:border-white/5">
                        <div className="flex justify-between text-gray-800 dark:text-gray-300">
                            <span className="text-sm">Объект {index + 1}</span>
                            <span className="text-sm"><span className="font-medium">Сумма:</span> 50 000 000</span>
                            <span className="text-sm"><span className="font-medium">Дата окончания:</span> 10.12.2030</span>
                        </div>
                    </li>
                ))}
            </ul>
        </CardBody>
    </Card>
    );
};

export default ExpectedPayments;
