import React, {useState} from 'react'

export default function bt9() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [language, setLanguage] = useState<'english' | 'vietnamese'>('english');
    
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
        document.body.classList.toggle('dark');
    };
    
    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'english' ? 'vietnamese' : 'english'));
        document.body.classList.toggle('vietnamese');
    };
    
    return (
        <div className={theme}>
            <h1>App</h1>
            <p>Theme: {theme}</p>
            <p>Language: {language}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <button onClick={toggleLanguage}>Toggle Language</button>
        </div>
      );
}
