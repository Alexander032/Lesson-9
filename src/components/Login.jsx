import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../redux/reducers/userReducer/selectors";
import {useNavigate} from "react-router-dom";
import {loginInitiate, registerInitiate} from "../redux/reducers/actions";
import '../Style/Login.css'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate('/', {replace:true})
        }
    }, [user,navigate])

    const handleSubmit =(e) => {
        e.preventDefault();
        if(!email || !password){
            return;
        }
        dispatch(loginInitiate(email, password))
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor={'email'}>Email</label>
                <input type="text" name={'email'} id={'email'} onChange={(event) => setEmail(event.target.value)}/>
                <label htmlFor={'password'}>Password</label>
                <input type="password" name={'password'} id={'password'} onChange={(event) =>setPassword(event.target.value)}/>
                <button type={"submit"}>Sign In</button>
            </form>
        </div>
    );
};

export default Login;