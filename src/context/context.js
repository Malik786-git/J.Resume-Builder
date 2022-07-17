import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
const data = {

            name: "Malik M Jahangir",
            email: "malik@xyz.com",
            contact: "923082676942",
            address: "Hno. 2/1241, Shah Faisal Town, khi",
            profession: "Web Engineer",
            objective: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, cumque consequuntur at.",
            experience: "4-Year Experience as Full-Stact Web developer, at 10 Pearl",
            education: "Bachelor Of Computer Science from Dawood University of Engineering and Technology, Khi."
}

export const myContext = createContext(data)

const GlobalProvider = ({children})=> {
    
    const [state, dispatch] = useReducer(reducer, data);
    const newResume = (data) => {
        dispatch({
            type: 'ADD_NEW_RESUME',
            data: data
        })
    }
    return (
        <myContext.Provider value={ {
            data: state, newResume
            } 
            }>
                {children}
        </myContext.Provider>
    );
}

export default GlobalProvider;

