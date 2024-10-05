import {useState , createContext} from 'react';


const context = createContext({});

export const ContextProvider = ({children}) => {
    const [email,setEmail] = useState("");
    return (
        <context.Provider value={{
            email,setEmail
        }}>
            {children}
        </context.Provider>
    )
}

export default context;