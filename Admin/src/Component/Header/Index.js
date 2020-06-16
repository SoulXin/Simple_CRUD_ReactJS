import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell,faSignOutAlt,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {checkLogin} from '../../GlobalFunction/Function'
import { container,btnLogout } from './Component/Style'
import axios from 'axios'

const Index = ({props,notification}) => {
    const [name,setName] = useState('');
    const [token,setToken] = useState('');

    useEffect(() => {
        checkLogin().then(res => {
            setName(res.user.name);
            setToken(res.token);
        })
        return () => {
            
        }
    }, []);

    const handleLogout = () => {
        axios({
            method : 'POST',
            url : 'http://localhost:5000/user/logout',
            headers: { Authorization : `Bearer ${token}` }
        })
        .then(response => {
            localStorage.removeItem('user');
            props.history.push('/login');
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className = "container-fluid px-0" style = {container}>
            <nav className="navbar navbar-light" style = {{background : '#a56cc1'}}>
                {
                    notification ? 
                    <Link to = "/" className = "btn">
                        <FontAwesomeIcon icon = {faArrowLeft}   color = "white"></FontAwesomeIcon>
                    </Link> : null
                }
                {notification ? null : <p style = {{color : 'white'}}>Hallo {name}</p>}
                <Link to = "/notification" className = "ml-auto mr-4  d-sm-block d-md-none d-lg-none">
                    <FontAwesomeIcon icon = {faBell} color = "white" size = "2x"></FontAwesomeIcon>
                </Link>
                <FontAwesomeIcon className = "d-md-none" icon = {faSignOutAlt} color = "white"  onClick = {() => handleLogout()} size = "2x">Notifikasi</FontAwesomeIcon>
                <button className = "btn d-none d-sm-none d-md-block" onClick = {() => handleLogout()} style = {btnLogout}>Keluar</button>
            </nav>
        </div>

    )
}

export default Index
