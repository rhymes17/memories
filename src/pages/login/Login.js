import React,{ useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth} from '../../firebase';
import { useHistory } from 'react-router-dom';

import '../register/register.css';

const Login = () => {
    const history = useHistory();
    const[data, setData] = useState({
        email: '',
        password: '',
        error: null,
        loading: false,
    });

    const { email ,password, error, loading } = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setData({ ...data, error: null, loading: true});
        try{
            await signInWithEmailAndPassword(
                auth, 
                email,
                password
            )
            
            setData({ email: "", password: "", error: null, loading: false });
            history.replace("/")
        }catch(err){
            setData({...data, error: err.message, loading: false})
        }
        
    }
  return (
    <section>
        <div className='register'>
            <h3>Login</h3>
            <form className='form' onSubmit={handleSubmit}>
                <input type="email" name="email" value={email} onChange={handleChange} placeholder="Your Email" required />
                <input type="password" name="password" value={password} onChange={handleChange} placeholder="Create Password" required />
                {error ? <p className='error'>{error}</p> : null}
                <button type='submit' className='btn btn__secondary'>{loading ? "Logging In.....": "Log In"}</button>
            </form>
        </div>
    </section>
  )
}

export default Login