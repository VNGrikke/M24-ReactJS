import React, { useState } from 'react'
import Jobitem from './Jobitem'
import { v4 as uuidv4 } from 'uuid';
type Job = {
    id: string;
    name: string;
    status: boolean;
}
export default function Todolist() {

    const [inputValue, setInputValue] = useState<string>("")// state luu tru du lieu o input
    const [showError, setShowError] = useState<boolean>(false) // state de kiem tra trang thai an hien loi
    const [jobLocal, setJobLocal] = useState<Job[]>(() => {
        const listJobLocal = localStorage.getItem("jobs")
        // kiem tra tren local co du lieu khong, neesu co thi ep kieu tu Json thanhfJs neu khong co se la []
        const listJob = listJobLocal ? JSON.parse(listJobLocal) : [];
        // tra ve mang
        return listJob;
    })

    const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        if (e.target.value) {
            setShowError(false)
        } else {
            setShowError(true)
        }
    }
    const handleCreate = () => {
        // kiem tra dieu kien input da co du lieu chua
        if (inputValue) {
            // tao doi tuong
            const job: Job = {
                id: uuidv4(),
                name: inputValue,
                status: false
            }
            // setJobLocal([...jobLocal, job])
            jobLocal.push(job)
            // dua du lieu len local
            handleSave();
            setInputValue("")

        } 

    }

    // thay doi trang thai cong viec 
    const handleChangStatus = (id:string) => {
        const findIndexJob = jobLocal.findIndex((job: Job) => job.id === id)

        //thay doi trang thai cong viec
        if (findIndexJob===-1) {
            alert("khong tim thay")
        }else{
            jobLocal[findIndexJob].status = !jobLocal[findIndexJob].status
        }
        // luu du lieu len local
        handleSave();
    }

    //ham luu du lieu
    const handleSave = (key:string,value:any) => {
        localStorage.setItem(key, JSON.stringify(value))
    }
    return (
        <>
            <div className="todo-container">
                <h2>ToDo List</h2>
                <div className="input-container">
                    <input onChange={hanldeChange} value={inputValue} type="text" id="taskInput" placeholder="Add new task..." />
                    <button onClick={handleCreate} className="button">Add Task</button>
                </div>
                {showError && (
                    <span className="error">Please enter a task</span>
                )}
                <ul id="taskList">
                    {/* render danh sach cong viec*/}
                    {
                        jobLocal.map((job) => (
                                <Jobitem job={job} handleChangeStatus = {handleChangStatus}/>
                            )
                        )
                    }
                </ul>
                <p>Tasks completed: <span id="completedTasks">0</span></p>
            </div>
        </>
    )
}
