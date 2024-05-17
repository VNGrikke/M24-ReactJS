import { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count,setCount] = useState<number>(0);
    const [numbers,setNumber] = useState<number[]>([])
    const [active,setActive] = useState<boolean>(false)
    // useEffect(() => {
    //     console.log("đang gọi useEffect");

    // })
    useEffect(() => {
        console.log("đang gọi useEffect");

    },[count])
    const handleClick = () => {

        setCount(count+1)
        // mỗi khi click dẽ tạo số ngẫu nhiên rồi push vào mảng
        // setCount(Math.floor(Math.random()*100))
        // numbers.push(count)
        // setNumber([...numbers])
    }
    // console.log(numbers);
    console.log("components đã được re-render");
    // đi viết logic xử lí ở đây
    
    return (
        <div>useEffect
            {
                /*
            Tất cả các hook bản chất là các hàm(function )
            khi dùng phải dùng import để dùng
            useEffect nhận vào 2 đối số
            1. là callback function
            2. là [] || [deps]
            ==> useEffect có 3 cách dùng
            c1: chỉ chứa 1 mảng là callbcak (arrow function)
               khi component được mount vào dom thì useEffect được gọi
               mỗi lần componet re-render thì nó cũng được gọi
            c2: chứa callback và []
                cũng được gọi khi component được mount vào dom
                khi mỗi lần component re-render thì useEffect sẽ không bị gọi lại

            c3: callback và [dependency]
   
            - khi componentDidMount được gọi sau khi component được render lần đầu 
               khi component được mount vào dom thì useEffect cũng được gọi
               khi dependency thay đổi thì useEffect đucợ render lần đầu

               useEffect là phương thức thường dùng để xử lý các tác vụ như callAPI để lấy
               dũ liệu
                - thường được dùng để xử lý các side effect

   
           */
            }
            <button onClick={handleClick}>click</button>
        </div>
    )
}
