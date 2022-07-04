import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {db as firebaseDB} from '../firebase';

const initialState ={
    name: '',
    email: '',
    contact: ''
}

const AddContact = () => {
    const [state, setState] = useState(initialState)
    const {name,email,contact} = state;
    const navigate = useNavigate();
    const {id} = useParams();

    // ошибка если не заполнено поле инпутов
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || email || contact){
            toast.error('Please  provide  value into each input field')
        } else {
            if(!id) {
                firebaseDB.child('contacts').push(state,(error)=>{
                    if(error){
                        toast.error(error)
                    } else {
                        toast.success('Contact added successfully')
                    }
                })
            } else {
                firebaseDB.child(`contacts/${id}`).set(state, (error)=>{
                    if(error){
                        toast.error(error)
                    } else {
                        toast.success('Contact update successfully')
                    }
                } )
            }
        }
    }

    const handleInputChange =(e) =>{
        const {name, value} = e.target;
            setState({...state,[name]: value})
    }

    return (
        <div style={{marginTop: 100}}>
            <form style={{margin: "auto", padding: 15, maxWidth:400, alignContent:"center"}}>
                onSubmit = {handleSubmit}
                <label htmlFor={'name'}>Name</label>
                <input  placeholder={'Your name is...'} id={'name'} type={'text'} name={'name'} value={name || ''} onChange={handleInputChange}/>
                <label htmlFor={'email'}>Name</label>
                <input placeholder={'Your email is...'} id={'email'} type={'email'} name={'email'} value={email || ''} onChange={handleInputChange}/>
                <label htmlFor={'contact'}>Name</label>
                <input  placeholder={'Your number is...'} id={'contact'} type={'number'} name={'contact'} value={contact || ''} onChange={handleInputChange}/>
            </form>
        </div>
    );
};

export default AddContact;