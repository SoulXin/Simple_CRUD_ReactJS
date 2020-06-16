import React from 'react'
import Main from '../Component/Main/Index'
import Login from '../Component/Auth/Login'
import Register from '../Component/Auth/Register'
import MainNotification from '../Component/Notification/MainNotification'

import {BrowserRouter,Route,Switch} from 'react-router-dom'
const Index = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = {Main}/>
                <Route path = "/login" component = {Login}/>
                <Route path = "/register" component = {Register}/>
                <Route path = "/notification" component = {MainNotification}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Index
