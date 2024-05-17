import {useState} from 'react'

export default function bt5() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible); 
    };
  
    return (
      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? 'Hiển' : 'Ẩn'}
        </button>
      </div>
    );
}

