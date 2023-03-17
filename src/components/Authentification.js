import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AdminPanel from "./AdminPanel";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const firebaseConfig = {
    apiKey: "AIzaSyAqOw62qfILyQTs-UqosDKsb7MwjCoqoIM",
    authDomain: "configuratorpcjetpackcompose.firebaseapp.com",
    projectId: "configuratorpcjetpackcompose",
    storageBucket: "configuratorpcjetpackcompose.appspot.com",
    messagingSenderId: "942161595084",
    appId: "1:942161595084:web:659095ca92550877969069",
    measurementId: "G-E13W44H9F9"
};

const app = initializeApp(firebaseConfig);



const Authentification = ({}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState([]);
    const auth = getAuth();
    var isAuth = false;

    const handleSubmit = (event) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                isAuth = true;
                console.log(true);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode);
                isAuth = false;
            });
    }

    return (
        <form class='login-form'>
            <div class="flex-row">
                <label class="lf--label" htmlFor="Email">
                    <svg x="0px" y="0px" width="12px" height="13px">
                        <path fill="#B1B7C4" d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z" />
                    </svg>
                </label>
                <input id="email" class='lf--input' placeholder='Email' autoComplete="username" autoCapitalize="off" dir="auto" autoCorrect="off" type='text' value={email} onChange={event => setEmail(event.target.value)} />
            </div>
            <div class="flex-row">
                <label class="lf--label" htmlFor="password">
                    <svg x="0px" y="0px" width="15px" height="5px">
                        <g>
                            <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z" />
                        </g>
                    </svg>
                </label>
                <input id="password" class='lf--input' placeholder='Password' type='password' autoCapitalize="off" autoCorrect="off" value={password} onChange={event => setPassword(event.target.value)} />
            </div>
            <Button id="loginBtn" class='lf--submit' onClick={handleSubmit}>ВОЙТИ</Button>
        </form>
    );
}
export default Authentification