import React, { useState, useEffect } from 'react';
import '../App.css';

export default function B3() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    console.log('activeTab changed:', activeTab);
  }, [activeTab]);

  return (
    <div className="navbar">
        <br />
      <a
        href='#'
        className={activeTab === 'home' ? 'active' : ''}
        onClick={() => handleTabClick('home')}
      >
        Trang chủ
      </a>
      <a
        href='#'
        className={activeTab === 'products' ? 'active' : ''}
        onClick={() => handleTabClick('products')}
      >
        Sản phẩm
      </a>
      <a
        href='#'
        className={activeTab === 'about' ? 'active' : ''}
        onClick={() => handleTabClick('about')}
      >
        Giới thiệu
      </a>
      <a
        href='#'
        className={activeTab === 'contact' ? 'active' : ''}
        onClick={() => handleTabClick('contact')}
      >
        Liên hệ
      </a>
    </div>
  );
};
