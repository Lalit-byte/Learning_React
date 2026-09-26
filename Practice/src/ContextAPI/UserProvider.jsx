import UserContext from "./UserContext"

const UserProvider = ({children}) => {
    const user = {
        name: "Lalit",
        email: "lalit@mail.com"
    }

    return(
        <UserContext.Provider value={{user}}>
            {children}  
        </UserContext.Provider>
    )
}

export default UserProvider