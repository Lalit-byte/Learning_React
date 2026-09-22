import {useState} from 'react'

const Practice2CF = () => {
    const [formData, setFormData] = useState({
        name : "",
        age : "",
        gender : ""
    })

    const [showProfile, setShowProfile] = useState (false)

  return (
    
    <div>
      <input type="text"
      placeholder='Enter name'
      value={formData.name}
      onChange={(e)=>
        setFormData({
            ...formData,
            name:e.target.value
      })}/>


      <input type="number"
      placeholder='Enter age'
      value={formData.age}
      onChange={(e)=>
        setFormData({
            ...formData,
            age:e.target.value
        })
      } />

      <input type="text"
      placeholder='Enter gender'
      value={formData.gender}
      onChange={(e)=>
        setFormData({
            ...formData,
            gender:e.target.value
        })
      } />

      <button onClick={()=>{
        setShowProfile(true)
      }}>Submit</button>

      {
        showProfile &&(
            <div>
                <h1>Profile Data</h1>
                <h2>{formData.name}</h2>
                <h3>{formData.age}</h3>
                <h4>{formData.gender}</h4>
            </div>
        )
      }
    </div>
  )
}

export default Practice2CF
