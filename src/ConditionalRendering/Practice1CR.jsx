import {useState} from 'react';

const Practice1CR = () => {


    const [profile, setProfile] = useState({
        name: 'John Doe',
        age: 30,
        course: 'BCA'
    })
        
    const handleSubmit = ()=> {
        setProfile({
            name: "lalit",
            age: 23,
            course: "MCA"
        })
    }

    const [showProfile, setShowProfile] = useState(false)
    return(
        <>
        <button onClick={()=>{
            setShowProfile(!showProfile)
        }}> {showProfile ? "Hide" : "Show"} </button>

        {
          showProfile && (
            <div>
                <h1>Name: {profile.name}</h1>
                <h2>Age: {profile.age}</h2>
                <p>Course: {profile.course}</p>
            </div>
          )  
        }
        <button onClick={()=>{
            handleSubmit()
        }}>Update</button>
        </>
    )
}
export default Practice1CR