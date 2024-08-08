import React, { useState } from 'react';
import './Register.scss'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { regisUser } from '../../store/userRegis';
import { useDispatch } from 'react-redux';
const Register = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword] =useState('')

    const registerUser=(e)=>{
        e.preventDefault()
        let user = {
            name,
            email,
            password
        }
        axios.post(' http://localhost:9090/users',user)
    .then(({data})=>dispatch(regisUser(data)))
    .then(({data})=>localStorage.setItem('user', JSON.stringify(data)))
       
    navigate('/')
    }



    return (
        <div className='register'>


           <div className=" register__container container">
                <form onSubmit={(e)=>registerUser(e)}>
                    <h2>Регистарция</h2>
                    <label htmlFor="text">
                        <input onChange={(e)=>setName(e.target.value)} id="text" type='text' placeholder='name' />
                    </label>
                    <label htmlFor="email">
                        
                        <input onChange={(e)=>setEmail(e.target.value)} id="email"  type='text' placeholder='email' />
                    </label>
                    <label htmlFor="password">
                        <input onChange={(e)=>setPassword(e.target.value)} id="password" placeholder='password' />
                    </label>
                    <button>Регистрация</button>
                </form>
           </div>
        </div>
    );
};

export default Register;