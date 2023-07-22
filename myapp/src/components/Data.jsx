import { useState } from "react"

const Data = () => {
    const[record , setRecord] = useState(0)

    
    const mines = () => {

        
        if(useState => 0) {
            alert("number not found")
        }
    }
    const pluse = () => {
        setRecord(
            record + 1
            )
        }
    return(

        <>
            <h1>{record}</h1>
            <button onClick={ () => pluse() }>+</button>
            <button onClick={ () => mines() }>-</button>
        </>

    )
}
export default Data;