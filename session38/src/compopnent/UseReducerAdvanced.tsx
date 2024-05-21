import React, { useReducer } from 'react'

export default function UseReducerAdvanced() {
/*
    thực hanh làm todo list dùng useReducer


    khai báo state trước
*/
interface Todo{
    id:number;
    name:string;
    status:boolean;
}
    const initial = {
        todos:[],
        isloading:false,
        todo:{
            id:0,
            name:"",
            status:false,
            }
    }
//  khởi tạo hàm tạo action
const action = (type:any,payload:any):any => {
    return {
        // type,payload
        type:type,
        payload:payload
    }
}
// khởi tạo hàm reducer
    const reducer = (state:any = initial, action:any) => {
        switch (action.type) {
            case "CHANGE-INPUT":
                console.log(11111,action);
                
                return {...state, todo:{...state.todo,name:action.payload,id:Math.floor(Math.random()*10000000 + new Date().getMilliseconds())}};
            case "ADD-TODO":
                console.log(action);
                return {...state, todos:[...state.todos,action.payload]};
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initial);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        let inputValue = e.target.value;
        dispatch(action("CHANGE-INPUT",inputValue));
    }
    const addTodo = ()=>{
        dispatch(action("ADD-TODO",state.todo));
        
    }
    // console.log(state.todos);
  return (
    <>UseReducer nâng cao <br />
        <input onChange={handleChange} type="text" placeholder='nhập công việc'/>
        <button onClick={addTodo}>Thêm cv</button>
        <p>danh sách công việc</p>
        {
            state.todos.map((item:Todo, index:number) => {
                return <li key={item.id}>{item.name}</li>
            })
        }
    </>
  )
}
