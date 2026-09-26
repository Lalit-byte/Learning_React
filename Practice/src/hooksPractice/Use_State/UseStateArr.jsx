import { useState } from 'react'

const UseStateArr = () => {
    const arr = ['John', 'Doe', 'Smith', 'Jane']
    const [employees, setEmployees] = useState(arr)
    const [showEmployees, setShowEmployees] = useState(false)
    const [newEmployee, updateNewEmployee] = useState('')
    const [flag, setFlag] = useState(false)


  return (
    <div>
      <h1>This are our employees names</h1>
      <button onClick={()=>setShowEmployees(showEmployees => !showEmployees)}>
        {showEmployees ? 'Hide Employees' : 'Show Employees'}
      </button>

      {showEmployees &&(
        <ul>
        {arr.map((employee, index)=>(
            <li key={index}>{employee}</li>
        ))
    }
      </ul>
    )}

    <h1>Update Employees</h1>
    <input type="text" 
    placeholder='Enter employee name'
    value={newEmployee}
    onChange={(e)=>updateNewEmployee(e.target.value)}/>

    <button
    onClick={()=>{
      setEmployees([...employees, newEmployee])
      updateNewEmployee("")
      setFlag(true)
    }}>Update
    
    </button>

    {flag&&(
      <ul>
      {employees.map((employees, index)=>(
        <li key={index}>{employees}</li>
      ))}
    </ul> 
    )
      
    }
    

    </div>
    // <button 
    // onClick={()=>setEmployees()}>Update</button>

  )
}

export default UseStateArr
