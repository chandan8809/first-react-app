import { useState } from "react"

export const Todoinput=({fn})=>{
    const [text,setText]=useState("")
    return(
        <div>
            
            <input type="text" onChange={(e)=>{
                //console.log(e.target.value)
                setText(e.target.value)
            }} />
            <button onClick={()=>fn(text)}>add</button>
        </div>
    )

}