import React, { useState, useCallback } from 'react';
interface ColorPickerProps {
    initialColor?: string;
}
export default function bt3({ initialColor = '#000000' }) {
    const [color, setColor] = useState<string>(initialColor);
    const handleChangeColor = useCallback((newColor: string) => {
        setColor(newColor);
    }, []);

    return (
        <div>
            <p>Trước khi chọn màu: <span style={{ background: initialColor }}>    </span></p>
            <p>Sau khi chọn màu: <span style={{ background: color }}>    </span></p>
            <button onClick={() => handleChangeColor('#008000')}>Chọn màu xanh</button>
        </div>
    );
};

