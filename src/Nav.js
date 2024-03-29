import React, { useEffect, useState } from 'react';
import './Nav.css'

function Nav() {
    const [show,setShow]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                setShow(true);
            }else setShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll",()=>{});
        };
    },[]);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png'
        alt='netflix logo'/>
        <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
        alt='avatar-logo'/>
    </div>
  )
}

export default Nav