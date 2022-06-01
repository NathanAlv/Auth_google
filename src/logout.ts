import{getAuth} from 'firebase/auth'
import {firebaseApp} from './config/FireBase'

const auth= getAuth(firebaseApp)
auth
    .signOut()
    .then(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
        location.href = 'login.html'
    })
    .catch((error) => console.log(error))