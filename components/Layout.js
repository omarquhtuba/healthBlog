import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {useStore} from '../client/context'
import { authConstants } from "../client/context/constants";
import {getValue} from '../utils/common';
import {getSession} from 'next-auth/client'

const Layout = ({ children }) => {

  /*const [state, dispatch] = useStore();
  useEffect(() => {
    const authenticated = getValue(state, ["user", "authenticated"], false);
    async function fetchUser (){
    if(!authenticated){
      dispatch({type: authConstants.LOGIN_REQUEST})
      const session = await getSession();
      if(session){
        dispatch({type: authConstants.LOGIN_SUCCESS, payload: session})
      }else{
        dispatch({type: authConstants.LOGIN_FAILURE,payload:session})
      }
    }
  }
  fetchUser()
  }, [state, dispatch])*/
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
