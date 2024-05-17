import React, { useState, useEffect, ChangeEvent} from 'react'

export default function B1() {
    const [title, setTitle] = useState<string>('');

    useEffect(() => {
        document.title = title ? title : 'localhost:5173';
    }, [title]);
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    return (
        <input type="text" placeholder="Nhập tiêu đề" value={title} onChange={handleChange}/>
    )
};
