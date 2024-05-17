import React, { useState } from 'react'

export default function Function() {
    interface User {
        username:string;
        email:string;
    }
    // const [username, setUsername] = React.useState<string>("");
    // const [email, setEmail] = React.useState<string>("");
    const [user, setUser] = useState<User>({
        username:"",
        email:""
    });
    const handleClick = () => {
        console.log("heeloo");
    }
    const handleDelete = (userID:any) => {
        console.log(userID);
    }
    const register = () => {
        console.log( user);
        
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.value
        let value = e.target.value
        setUser({
            ...user,[name]:value,
        })
    }

    // const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     setUsername(e.target.value);
    // }
    return (

    <div>function
        <p onClick={() => handleDelete(5)}>HOA</p>
        <button onClick={handleClick}>click me</button>
        <label htmlFor="">user name</label>
        <input type="text" onChange={handleChange}  name="userName" id="" />
        <label htmlFor="">user email</label>
        <input type="text" onChange={handleChange}  name="userEmail" id="" />
        <button onClick={register}>Register</button>
    </div>
  )
}
