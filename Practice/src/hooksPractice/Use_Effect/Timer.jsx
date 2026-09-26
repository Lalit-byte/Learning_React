import { useState , useEffect } from "react"

function Timer(){

    const [count , setCount] = useState(10)

    useEffect(()=> {

        const timer =  setInterval( () => {
            setCount(count - 1)
        },1000)

        return () => {
            clearInterval(timer);
        }
    },[count]);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}
export default Timer
