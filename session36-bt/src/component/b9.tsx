import React, { useState } from 'react';

export default function B9() {

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

    const getSeason = (month: number): string => {
        if (month >= 1 && month <= 3) {
            return 'Mùa xuân';
        } else if (month >= 4 && month <= 6) {
            return 'Mùa hè';
        } else if (month >= 7 && month <= 9) {
            return 'Mùa thu';
        } else {
            return 'Mùa đông';
        }
    };

    return (
        <div>
            <p>Tháng hiện tại: {currentMonth}</p>
            <p>Mùa hiện tại: {getSeason(currentMonth)}</p>
        </div>
    );
};

