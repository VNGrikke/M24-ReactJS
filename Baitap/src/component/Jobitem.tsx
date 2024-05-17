import React from 'react'

type Job = {
    id: string;
    name: string;
    status: boolean;
}
type FunctionType = {
    job: Job;
    handleChangeStatus: (id: string) => any;
}
export default function Jobitem({ job, handleChangeStatus}: FunctionType) {
    const hanldeChecked = (id: string) => {
        handleChangeStatus(id);
    }
    return (
        <>
            <li key={job.id}>
                <input onChange={() => hanldeChecked(job.id)} type="checkbox" id="task1" checked={job.status} />
                <label htmlFor="task1">{job.name}</label>
                <button>Delete</button>
            </li>
        </>
    )
}
