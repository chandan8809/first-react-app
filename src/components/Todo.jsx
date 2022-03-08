import { useState } from "react"
import { Todoinput } from "./Todoinput"
import { Todoitem } from "./Todoitem"
export function Todo(){
    const [todos,setTodos]=useState([])
    const getdata=(data)=>{
        setTodos([...todos,data])
        
    }
    return(
        <div>
            <h1>hello Todo</h1>
            <Todoinput fn={getdata}/>
            {todos.map((el)=><Todoitem todo={el}/>)}
        </div>
    )
}

