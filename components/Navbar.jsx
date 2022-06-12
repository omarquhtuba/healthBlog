import Image from "next/image";
import { useRouter } from "next/router";
import { authConstants } from "../client/context/constants";
import styles from "../styles/Navbar.module.css";
import {useStore} from '../client/context'
import {getValue} from '../utils/common';
import { signOut } from "next-auth/client";
import Link from 'next/link';
import { useState } from "react";


const Navbar = () => {
  const [open, setOpen] =useState(false)
  const [state, dispatch] = useStore();
  const router = useRouter();
  const user = getValue(state, ["user"], null)
  const authenticated = getValue(state, ["user", "authenticated"], false)

  console.log(state)

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.texts}>
        <Link href="/" passHref>
          <div className={styles.text} >YOUR HEALTH ADVISOR</div></Link>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
        <Link href="/" passHref>
          <li className={styles.listItem}>Homepage</li></Link>
          <li className={styles.listItemCat}>
           <span>Categories</span> 
           <ul>
           <Link href="/category/Infants" passHref>
            <li>Infants</li></Link>
            <Link href="/category/Children" passHref>
            <li>Children</li></Link>
            <Link href="/category/Adults" passHref>
            <li>Adults</li></Link>
            <Link href="/category/Elderly" passHref>
            <li>Elderly</li></Link>
            <Link href="/category/Male" passHref>
            <li>Male</li></Link>
            <Link href="/category/Female" passHref>
            <li>Female</li></Link>
           </ul>
            </li>
            <Link href="/posts" passHref>
          <li className={styles.listItem}>Articles</li></Link>
          <li className={styles.listItem}>Contact</li>
          {!authenticated ?             <Link href="/login" passHref>
<li className={styles.listItem}>signin</li></Link> 
          :
           <li onClick={()=> { 
             signOut({
               redirect: false
             }).then(result => {
               dispatch({
                 type: authConstants.LOGIN_FAILURE
               })
             })
           }} className={styles.listItem}>signout</li>}


        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}> 
          {authenticated && <div className={styles.name}>{user.name}</div>}
          <div className={styles.menu} onClick={()=> setOpen(!open)}>Menu</div>
        </div>

        <div className={styles.side} style={{marginRight: open ? "-40px" : "-250px"}}>
        <ul className={styles.sideList}>
        <Link href="/" passHref>
          <li className={styles.listSideCat}>Homepage</li></Link>
          <li className={styles.listSideCat}>
           <span>Categories</span> 
           <ul>
           <Link href="/category/Infants" passHref>
            <li>Infants</li></Link>
            <Link href="/category/Children" passHref>
            <li>Children</li></Link>
            <Link href="/category/Adults" passHref>
            <li>Adults</li></Link>
            <Link href="/category/Elderly" passHref>
            <li>Elderly</li></Link>
            <Link href="/category/Male" passHref>
            <li>Male</li></Link>
            <Link href="/category/Female" passHref>
            <li>Female</li></Link>
           </ul>
            </li>
            <Link href="/posts" passHref>
          <li className={styles.listSideCat}>Articles</li></Link>
          <li className={styles.listSideCat}>Contact</li>
          {!authenticated ? <li className={styles.listSideCat}>signin</li> 
          :
           <li onClick={()=> { 
             signOut({
               redirect: false
             }).then(result => {
               dispatch({
                 type: authConstants.LOGIN_FAILURE
               })
             })
           }} className={styles.listSideCat}>signout</li>}

        </ul>
      </div>
      </div>



     

      
    </div>
  );
};

export default Navbar;
