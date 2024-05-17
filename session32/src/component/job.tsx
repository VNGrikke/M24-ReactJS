import React from 'react'

// interface Prop{
//     nameJob: string,
//     // id:number,
//     // status:boolean
// }
// export default function job(props: Prop) {
//     console.log(props.nameJob);
    
//   return (
//     <div>
//         {props.nameJob}
//     </div>
//   )
// }

interface Props{
    name: string,
    id:number,
    status:boolean
}
interface Job{
    job:Props,
    stt:number
}
export default function job(props: Job) {
    const {job} = props
    const {stt} = props
    return (
        <tr>
            <td>{stt+1}</td>
            <td>{job.name}</td>
            <td>{job.status.toString()}</td>
        </tr>
    )
}

