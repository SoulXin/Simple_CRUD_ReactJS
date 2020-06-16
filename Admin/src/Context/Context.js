import React,{createContext,useReducer} from 'react'
import Reducer from '../Reducer/Reducer';

export const Context = createContext();

const ContextProvider = (props) => {
    const initialState = {
        todo : [],
        notification : []
    };
    const [dataContext,dispatch] = useReducer(Reducer,initialState);

    return (
        <Context.Provider value = {{
                dataContext,
                dispatch
            }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider