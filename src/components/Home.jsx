import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../redux/reducers/userReducer/selectors";
import {logoutInitiate} from "../redux/reducers/actions";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    const handleAuth =() => {
        if(user){
            dispatch(logoutInitiate())
        }
        setTimeout(()=>{
            navigate('/login')
        }, 3000)
    }
    return (
        <div>
            <h2>Home</h2>
            <button onClick={handleAuth}>Выйти</button>
        </div>
    );
};

export default Home;