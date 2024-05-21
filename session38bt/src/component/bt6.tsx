import React, { useState, useCallback } from 'react';

interface LoginData {
    email: string;
    password: string;
}

export default function bt6() {
    const [loginData, setLoginData] = useState<LoginData>({ email: '', password: '' });

    const handleSubmit = useCallback((event: React.FormEvent) => {
        event.preventDefault();
        console.log(loginData);
    }, [loginData]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginData((prevData) => ({...prevData,[name]: value,}));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" value={loginData.email} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input name="password" type="password" value={loginData.password} onChange={handleInputChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

