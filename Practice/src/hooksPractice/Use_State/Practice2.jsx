import { useState } from 'react'

const Practice2 = () => {
//   const [count , setCount] = useState(0)

     const arr = ['John', 'Doe', 'Smith', 'Jane']

     const [employees, setEmployees] = useState(arr)

     const [newEmploye, setnewEmploye] = useState("")

     const [flag, setFlag] = useState(false)

  return (
    <>
    <div>
        <ul>{
             arr.map((employe,index)=>(
                <li key={index}>{employe}</li>
             ))
            }
        </ul>

        <h1>Add new Employee</h1>
        <input type='text' placeholder='Enter employee name'
        value={newEmploye}
        onChange={(e)=>setnewEmploye(e.target.value)}/>

        <button onClick={()=>{
            setEmployees([...employees, newEmploye]);
            setnewEmploye("")
            setFlag(true)
        }}> Add</button>

        {flag &&(
            <ul>
                {employees.map((employee, index) => (
                    <li key={index}>{employee}</li>
                ))}
            </ul>
        )}
    </div>
    {/* <div>
        <h1>this is our employes</h1>
        <button onClick={() => {
            setFlag(!flag)
        }}>show</button>
        {
            flag &&(
                <ul>
                    {
                    arr.map((employee,index)=>(
                    <li key={index}>{employee}</li>
                    ))
                    }
                </ul>
            )
        }
    </div> */}
    {/* <div>
    <h1>Count</h1>
    <p>total clicked {count}times</p>
    <button onClick={()=>{
        setCount(count=> count+1)
    }}></button>
    </div> */}
    </>
  )
}

export default Practice2
