import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth'

import './title.css'
import { AuthContext } from '../../context/auth';

const Title = () => {
  
  const { user } = useContext(AuthContext);
  
  const handleSignOut = async () => {
    await signOut(auth);
  }

  return (
    <div className="title">
      <h1>
        <Link to="/">Memories</Link>
      </h1>
      <div className='nav__items'>
        { user ?
        (
          <>
            {/* <small>{user ? user.name : null}</small> */}
            <button className='nav__btn btn' onClick={handleSignOut}><Link to ="/login">LogOut</Link></button>
          </>
          
        )
        :(
        <>
        <button className='nav__btn btn'><Link to ="/register">Sign Up</Link></button>
        <button className='nav__btn btn'><Link to="/login">Log In</Link> </button>
        </>
        )
         }
        
      </div>
    </div>
  )
}

export default Title;