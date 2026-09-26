import React from 'react'
import {useState} from 'react'

const PracticeCF = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [course, setCourse] = useState("")

    const [showProfile, setshowProfile] = useState(false)

  return (
    <>
    <div>
        <p>Name</p>
        <input type="text" 
        placeholder='enter name' 
        value={name}
        onChange={(e)=>setName(e.target.value)}/>

        <p>Age</p>
        <input type="number" 
        placeholder='Enter age'
        value={age}
        onChange={(e)=>setAge(e.target.value)}/>

        <p>Course</p>
        <input type="text" 
        placeholder='Enter Course'
        value={course}
        onChange={(e)=>setCourse(e.target.value)}/>

        <button onClick={()=>{
             setshowProfile()
        }}>Submit</button>

        {
            showProfile && (
                <div>
                    <h1>Profile</h1>
                    <h2>Name : {name}</h2>
                    <h3>Age : {age}</h3>
                    <h4>Course: {course}</h4>
                </div>
            )
        }
        
    </div>
    </>
  )
}

export default PracticeCF
