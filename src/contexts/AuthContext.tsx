import React from 'react'
import {Navigate} from 'react-router-dom'

const user = {
    name:'Firdaus',
    address:'Gresik',
    isLogin: true
}

const AuthContext = React.createContext(user)

const RequireAuth = ({children}) =>{
    return user.isLogin === true ? children : <Navigate to='/login' replace/>
}

export {
    AuthContext,
    RequireAuth
}