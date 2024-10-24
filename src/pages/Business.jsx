
import {useState} from "react"
import styled from "styled-components"
const Business = ()=>{
    
    const [num, setNum] = useState (0)

    const increase = ()=>{
        setNum(num + 1)
    }

    const subtract = ()=>{
        setNum(num - 1)
    }

    const reset = ()=>{
        setNum(0)
    }

    return(
        <div>
            <br />
            <br />
            <h1>React Hooks</h1>
            <hr />
        <Holder>
            <button onClick={subtract}>Subtract</button>
            <h1>{num}</h1>
            <button onClick={increase}>Addition</button>
        </Holder>

        <button onClick={reset}>RESET</button>

        </div>
    )
}
export default Business 

const Holder = styled.div`
    display: flex;
    justify-content: space-around;
`
