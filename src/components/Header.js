import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../redux/reducers/userReducer/selectors";
import {useNavigate} from "react-router-dom";
import {logoutInitiate} from "../redux/reducers/actions";
import CustomLink from "./CustomLink";
import  '../Style/Header.css'

const Header = () => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAuth = () => {
        if(user) {
            dispatch(logoutInitiate())
        }
        setTimeout(()=>{
            navigate('/login')
        },300)
    }
    return (
        <div className="header">
            <CustomLink to={'/'}>
                <p className="logo">Contact App</p>
            </CustomLink>
            <div className="header-right">
                <CustomLink to={'/'}>
                    <p className='home_page'>Home</p>
                </CustomLink>
                <CustomLink to={'/addContact'}>
                    <p className='add_cont'>Add Contact</p>
                </CustomLink>
                <CustomLink to={'/about'}>
                   <p className='page'>About</p>
                </CustomLink>
                {user ? (
                    <p style={{cursor:'pointer'}} onClick={handleAuth}>
                        Sign Out
                    </p>
                ) :(
                    <CustomLink to={'/login'}>
                        <p className='log_system'>Sing In</p>
                    </CustomLink>
                )}
            </div>
        </div>
    );
};

export default Header;