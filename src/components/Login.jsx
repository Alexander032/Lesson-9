import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../redux/reducers/userReducer/selectors";
import {useNavigate} from "react-router-dom";
import {loginInitiate, registerInitiate} from "../redux/reducers/actions";

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
                <input type="text" onChange={(event) => setEmail(event.target.value)}/>
                <input type="text" onChange={(event) =>setPassword(event.target.value)}/>
                <button type={"submit"}>Sign In</button>
            </form>
        </div>
    );
};

export default Login;