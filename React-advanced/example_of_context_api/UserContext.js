import {createContext,useContext,useState} from "react";


const UserContext = createContext(undefined);

export const UserProvider = ({childern}) => {
    //the UserContext.Provider is what consuming components to subsribe to context changes. This component accepts a value prop which is what will be passed to consuming components that descendants of this provider
    //In real world you should fetch the user data
    const [user] = useState({
        name:"John",
        email:"john@example",
        dob:"01/01/2000",
    })
    return <UserContext.Provider value={{ user }}></UserContext.Provider>
}

//a way to consume context value. This is external created is for 
//convenience, so there's no need to export the UserContext to external components
export const useUser = () => useContext(UserContext);