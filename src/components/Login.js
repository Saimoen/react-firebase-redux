import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useRef, useState } from 'react';
import { auth } from '../utils/config.firebase';

const login = () => {

    const loginEmail = useRef();
    const loginPassword = useRef();
    const [error, setError] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const user = await signInWithEmailAndPassword(auth, loginEmail.current.value, loginPassword.current.value)
        } catch(error) {
            console.log(error.message)
            setError(true)
        }
    }




    return (
        <div className='login-container'>
            <div className="login">
                <h3>Se connecter</h3>
                <form className='form-login' onSubmit={(e)=> handleLogin(e)}>
                    <input type="email" placeholder='E-mail' required ref={loginEmail}/>
                    <input type="password" placeholder='Mot de Passe' required ref={loginPassword}/>
                    <input type="submit" placeholder='Se connecter' required />
                    <span>{error && "Le mail ou le mot de passe ne correspondent pas"}</span>
                </form>
            </div>
            
        </div>
    );
};

export default login;