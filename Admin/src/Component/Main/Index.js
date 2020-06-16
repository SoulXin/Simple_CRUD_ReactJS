import React,{useEffect,useContext, useState} from 'react'
import Header from '../Header/Index'
import {Context} from '../../Context/Context'
import {checkLogin} from '../../GlobalFunction/Function'
import axios from 'axios'
import List from '../List/Index'
import Notification from '../Notification/SideNotification'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSave} from '@fortawesome/free-solid-svg-icons'
import {btnSave,container_notification} from './Component/Style'

const Index = (props) => {
    const {dispatch} = useContext(Context);
    const [user,setUser] = useState('');
    const [text,setText] = useState('');

    useEffect(() => {
      const source = axios.CancelToken.source();
        checkLogin().then(res => {
          console.log(res)
          const loadData = async () => {
            const response = await axios.get(`http://localhost:5000/todo/show_todo/not_complete/${res.user._id}`,{cancelToken : source.token});
            const response_notification = await axios.get(`http://localhost:5000/todo/show_todo/complete/${res.user._id}`,{cancelToken : source.token});
            dispatch({type : 'TODO_LIST',data : response.data});
            dispatch({type : 'NOTIFICATION_LIST',data : response_notification.data});
            setUser(res.user);
          }
          loadData();
        }).catch(() => {
          props.history.push('/login')
        })

      return () => {
          
      }
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        user_id : user._id,
        text : text,
        type : 'not_complete'
      }
      const response = await axios.post('http://localhost:5000/todo/add_todo',data);
      dispatch({type : 'ADD_TODO',data : response.data});
      setText('');
    }

    return (
      <div className = "container-fluid px-0" style = {{overflowX : 'hidden'}}>
        <Header props = {props} notification = {false}/>
        <div className = "row px-3" style = {{marginTop : 70}}>
            <div className = "col-12">
                <form className = "form-row" onSubmit = {handleSubmit}>
                  <div className = " col-9 col-sm-10 col-md-10 px-1">
                      <label>Nama Kegiatan</label>
                      <input type="text" value = {text} className="form-control" aria-describedby="name" placeholder="Nama Kegiatan" onChange = {(e) => setText(e.target.value)} style = {{border : '2px solid #a56cc1'}}/>
                  </div>

                  <div className = " col-3 col-sm-2 col-md-2 mx-auto px-0 align-self-end">
                      <button type = "submit" className = "btn" style = {btnSave}>Simpan</button>
                  </div>
                </form>
            </div>
        </div>

        <div className = "row px-3">
          <div className = "col-12 col-md-8 px-2 mt-3">
            <p>Daftar TODO Yang Sedang Berlangsung</p>
            <List/>
          </div>
          <div className = "d-none d-md-block col-md-4 px-2 mt-3">
            Notifikasi
            <div style = {container_notification}>
              <Notification user = {user}/>
            </div>
          </div>
        </div>


      </div>
    )
}

export default Index