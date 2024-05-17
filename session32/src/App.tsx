import React, {useState}from 'react'
import Job from './component/job'
import Jobs from './component/jobs'

export default function App() {
  // let objs = [
  //   { name: "code",id:1,status: false},
  //   { name: "code2",id:2,status: false},
  //   { name: "code3",id:3,status: false},
  // ]
  const [job,setJob] = useState<any>();
  const [name,setName] = useState<string>("");
  const handleClick = () => {
    let newJob = {
      name: name,
      id: Math.floor(Math.random()*999999999),
      status: false,
    }
    setJob(newJob);
    }
    return (
      <>
        <h2>Danh sách công việc</h2>
        <input onChange={(event) => setName(event.target.value)} type="text" name="" id="" />
        <button onClick={handleClick}>Thêm</button>
        {/* <Jobs job = {objs}></Jobs> */}
        <Jobs job = {job}></Jobs>
        <p>danh sách công việc</p>
      </>
    )
}
