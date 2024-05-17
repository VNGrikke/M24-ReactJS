import React,{useState} from 'react'
import Job from './job'
// interface Prop{
//     job:Jobs[]
// }

// interface Jobs{
//     name: string,
//     id:number,
//     status:boolean
// }
// export default function jobs(props: Prop){
//     console.log(111111);
//     // des
//     const {job} = props;
//     return (
//         <div>
//             {job.map((item,index)=>{
//                 return <Job key={index} nameJob = {item.name}></Job>
//                 })
//             }
//         </div>
//     )
// }
interface Job{
    name: string,
    id:number,
    status:boolean
}
interface Props{
    job:Job,
}

let data:any = localStorage.getItem("jobs")
if (data === "null") {
    data = [];
}else {
    data = JSON.parse(data);
}
export default function jobs(props: Props) {
    const [jobs,setJobs] = useState<Job[]>(data);
    const {job} = props;
    console.log(111122,jobs);
    console.log(1111,job);
    jobs.push(job);
    console.log(jobs);
    
    
    // localStorage.setItem("jobs", JSON.stringify(newJob));
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {jobs.map((item,index)=>{
                    return <Job key={index} job = {item} stt = {index}></Job>
                })}
                
            </tbody>
        </table>
        
    </div>
  )
}
