import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userSelector} from "../redux/reducers/userReducer/selectors";
import {registerInitiate} from "../redux/reducers/actions";
import '../Style/register.css'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();
    const user = userSelector(userSelector);
    const navigate  = useNavigate();

    useEffect(()=>{
        if(user) {
            navigate('/')
        }
    }, [user,navigate])

    const handleSubmit =(e) => {
        e.preventDefault();
        if(password !== passwordConfirm){
            return;
        }
        dispatch(registerInitiate(email, password, displayName))
    }

    return (
        <div className='register_app'>
                    <h2 style={{marginTop:'20px'}}>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input placeholder={'Имя'} type="text" value={displayName} onChange={(event) =>setDisplayName(event.target.value)}/>
                    <input placeholder={'Email'} type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <input placeholder={'Пароль'} type="text" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                    <input placeholder={'Повторить Пароль'} type="text" value={passwordConfirm} onChange={(event) =>setPasswordConfirm(event.target.value)}/>
                    <button type="submit">Sign Up</button>
                </form>
        </div>
    );
};

export default Register;