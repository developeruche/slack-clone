import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import React from 'react'
import "./Login.css"
import { useStateValue } from './StateManager/StateProvider'
import { actionTypes } from './StateManager/Reducer'
function Login() {
    const [state, dispatch] = useStateValue()
    const signin = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />

                <h1>Sign In to Slack Clone</h1>
                <Button onClick={signin}>Sign in With Google</Button>
            </div>
        </div >
    )
}

export default Login
