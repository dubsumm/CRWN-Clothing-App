import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth} from "../utils/firebase/firebase.utils";




//*as the actual val I want to access
export const UserContext = createContext({

    currentUser: null,
    setCurrentUser: () => null
    
})
//* some alias component that allows us to user the UserCOntext provided and wrap the children in it
export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const value ={currentUser, setCurrentUser}

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
              createUserDocumentFromAuth(user);
            }
            setCurrentUser(user)
        })
        return unsubscribe
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}