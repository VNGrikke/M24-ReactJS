import { useState, useRef, useEffect } from 'react'

export default function UseRef() {
    let index = 0;
    const [count, setCount] = useState<number>(0);
    const useRef1 = useRef(0)
    const focusInput = useRef<HTMLInputElement>(null);
    console.log("1111", useRef1);
    
    const handleClick = () => {
        index++;
        setCount(count + 1)
        useRef1.current = useRef1.current+1;
    };

    console.log("giá trị: ", useRef1.current) ;
    
    useEffect(()=>{
        focusInput.current?.focus();
    })
  return (
    <div>useRef
        {/*
            Nó là 1 hook react cung cấp
            cách dùng: import vào dùng
            kết quả trả về của useRef là 1 đối tượng
            và trong đối tượng đó có 1 thuộc tính mặc định là : current
            có 2 cách dùng chính khi mỗi lần component re-render thì nó không tạo ra 1 referentype mà vẫn 
            giữ nguyên giá trị ban đầu
            2. giúp mặc định focus vào ô input mà mình muốn
        */}
        <p>count: {count}</p>
        <button onClick={handleClick}>click</button><br />


        <label htmlFor="">nhập tên</label>
        <input ref={focusInput} type="text" name="" id="" />
        <br />
        <label htmlFor="">nhập mk</label>
        <input type="password" name="" id="" />
        <button>login</button>

        
    </div>
  )
}
