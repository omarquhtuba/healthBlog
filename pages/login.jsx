import React from 'react'
import {useState} from 'react';
import styles from "../styles/Create.module.css";

import {getSession, signIn} from 'next-auth/client'
import { useStore } from '../client/context';
import { useRouter } from 'next/router';
import {authConstants} from '../client/context/constants';
import {getValue} from '../utils/common';
import FullPageLoader from '../utils/fullPageLoader';



const Login = () => {
    const [loader, showLoader, hideLoader] = FullPageLoader()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, dispatch] = useStore();
    const router = useRouter();
    const user = getValue(state, ["user"], null)
    const authenticated = getValue(state, ["user", "authenticated"], false)

    const handleClick = async (e) => {
        e.preventDefault();
        showLoader()
        const payload = {password, email};
       dispatch({type: authConstants.LOGIN_REQUEST})
        const result = await signIn("credentials", {...payload, redirect: false});
        console.log(result);
        if(!result.error){
            const session = await getSession();
            dispatch({type: authConstants.LOGIN_SUCCESS, payload: session})
            hideLoader()
            router.replace('/')
        }else{
            dispatch({type: authConstants.LOGIN_FAILURE, payload: result.error})
        }
      };

      if(user && user.authenticated){
          router.replace('/');
          return null;
      }
  return (
    <div className={styles.Login}>
        <h1>Login</h1>
        <div className={styles.logincon}>
            <div>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label className={styles.label}>Password</label>
                <input className={styles.input}  placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button onClick={handleClick}>Login</button>
        </div>
        {loader}
    </div>
  )
}

export default Login