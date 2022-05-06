import React,{ useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { setDoc, doc, Timestamp } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';

import './register.css'

const Register = () => {
    const history = useHistory();
    const[data, setData] = useState({
        name:'',
        email: '',
        password: '',
        error: null,
        loading: false,
    });

    const { name, email ,password, error, loading } = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setData({ ...data, error: null, loading: true});
        try{
            const result = await createUserWithEmailAndPassword(
                auth, 
                email,
                password
            )
            
            await setDoc(doc(db, "users", result.user.uid), {
                uid: result.user.uid,
                displayName: name,
                email,
                createdAt: Timestamp.fromDate(new Date()),
            });
            setData({ name: "", email: "", password: "", error: null, loading: false });
            history.replace("/")
        }catch(err){
            setData({...data, error: err.message, loading: false})
        }
        
    }
  return (
    <section>
        <div className='register'>
            <h3>Create An Account</h3>
            <form className='form' onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={handleChange}  placeholder="Your Full Name" required />
                <input type="email" name="email" value={email} onChange={handleChange} placeholder="Your Email" required />
                <input type="password" name="password" value={password} onChange={handleChange} placeholder="Create Password" required />
                {error ? <p className='error'>{error}</p> : null}
                <button type='submit' className='btn btn__secondary'>{loading ? "Signing Up.....": "Sign Up"}</button>
            </form>
        </div>
    </section>
  )
}

export default Register