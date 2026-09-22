    import { useState } from 'react'

    const UseStatePractice = () => {

        const [count, counter] = useState(0)   
        return (
        <div>
        <h1>Count every Click</h1>
        <p>clicked {count} times</p>
        <button onClick={()=>counter(count + 1)}>Click me!</button>
        </div>
    )
    }

    export default UseStatePractice
