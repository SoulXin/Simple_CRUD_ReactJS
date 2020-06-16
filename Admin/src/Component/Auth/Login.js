import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {checkLogin} from '../../GlobalFunction/Function'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faListOl} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { container,btn_1, btn_2 } from './Component/Style'
const Login = (props) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    useEffect(() => {
        checkLogin().then(() => {
            props.history.push('/')
        }).catch(() => {
            props.history.push('/login')
        });

        return () => {
            
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data ={
            email : email,
            password : password
        }
        axios.post('http://localhost:5000/user/login_user',data)
        .then(response => {
            localStorage.setItem('user',JSON.stringify(response.data));
            props.history.push('/');
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className = "container">
            <div className = "d-flex justify-content-center align-items-end mt-5 pt-5">
                <FontAwesomeIcon className = "mb-2 mr-2" icon = {faListOl} size = "2x"></FontAwesomeIcon>
                <h3>TODO List</h3>
            </div>
            <div className = "col-12 mx-auto" style = {container}>
                <form onSubmit = {handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" aria-describedby="email" onChange = {(e) => setEmail(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" onChange = {(e) => {setPassword(e.target.value)}}/>
                    </div>
                    <div className = "row">
                        <Link to = "/register" className = "col-5 mx-auto">
                            <button type = "button" className = "btn" style = {btn_1}>Daftar Baru</button>
                        </Link>
                        <button type="submit" className="btn col-5 mx-auto" style = {btn_2}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login