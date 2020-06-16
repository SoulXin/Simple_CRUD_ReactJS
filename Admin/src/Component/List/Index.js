import React,{useContext} from 'react'
import {Context} from '../../Context/Context'
import axios from 'axios'
import { container,row,text,btnComplete } from './Component/Style'

const Index = () => {
    const {dispatch,dataContext} = useContext(Context);

    const handleComplete = async (id,list) => {
        await axios.put(`http://localhost:5000/todo/complete_todo/${id}`);
        dispatch({type : 'COMPLETE_TODO',data : id});
        dispatch({type : 'ADD_NOTIFICATION',data : list});
    }
    
    return (
        <div style = {container}>
        {
            dataContext.todo.map((list,index) => {
                return (
                <div className = "container-fluid mt-1 mb-1" style = {row} key = {index}>
                    <div className = "row">
                    <div className = "col-12 col-sm-9 col-md-10 align-self-center" style = {text}>{list.text}</div>
                    <div className = "col-12 col-sm-3 col-md-2">
                        <button className = "btn" style = {btnComplete} onClick = {() => handleComplete(list._id,list)}>Selesai</button>
                    </div>
                    </div>
                </div>
                )
            })
        }
        </div>
    )
}

export default Index
