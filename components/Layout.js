import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {useStore} from '../client/context'
import { authConstants } from "../client/context/constants";
import {getValue} from '../utils/common';
import {getSession} from 'next-auth/client'

const Layout = ({ children }) => {

  const [state, dispatch] = useStore();
  useEffect(async () => {
    const authenticated = getValue(state, ["user", "authenticated"], false);
    if(!authenticated){
      dispatch({type: authConstants.LOGIN_REQUEST})
      const session = await getSession();
      if(session){
        dispatch({type: authConstants.LOGIN_SUCCESS, payload: session})
      }else{
        dispatch({type: authConstants.LOGIN_FAILURE,payload:session})
      }
    }
  }, [])
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
