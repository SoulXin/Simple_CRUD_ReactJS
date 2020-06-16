import React,{useContext} from 'react'
import {Context} from '../../Context/Context'
import axios from 'axios'
import Header from '../Header/Index'
import {row,btnDelete} from './Component/Styles'

const MainNotification = (props) => {
    const {dispatch,dataContext} = useContext(Context);
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/todo/delete_todo/${id}`);
        await dispatch({type : 'DELETE_NOTIFICATION',data : id});
    }

    return (
        <div style = {{marginTop : 60}}>
            <Header props = {props} notification = {true}/>
            <div className = "px-1">
                {
                    dataContext.notification.map((list,index) => {
                        return (
                        <div className = "container-fluid mt-1 mb-1 row mx-auto mx-2" style = {row} key = {index}>
                            <div className = "col-9 px-0">
                                <div>{list.text}</div>
                                <div>Selesai Pada : {list.date.substring(0,10)}</div>
                            </div>
                            <div className = "col-3 px-0 align-self-center">
                                <button className = "btn" style = {btnDelete} onClick = {() => handleDelete(list._id)}>Hapus</button>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MainNotification