import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {db as firebaseDB} from '../firebase'
import {toast} from "react-toastify";


const Home = () => {
    const [data, setData] = useState({});

    useEffect(() =>{
        firebaseDB.child('contacts').on('value', (snapshot)=>{
            if(snapshot.val() !==null){
                setData({...snapshot.val()})
            } else {
                setData({})
            }
        })

        return() =>{
            setData({})
        }
    },[])

    const onDelete = (id) =>{
        if(
            window.confirm('Are you sure?')
        ) {
            firebaseDB.child(`contacts/${id}`).remove((error) =>{
                if(error) {
                    toast.error(error)
                }else {
                    toast.success('Contact delete successfully ')
                }
            })
        }
    }

    return (
        <div style={{marginTop:'100px'}}>
            <table className={'style-table'}>
                <thead>
                <tr>
                    <th style={{textAlign:'center'}}>No.</th>
                    <th style={{textAlign:'center'}}>Name</th>
                    <th style={{textAlign:'center'}}>Email</th>
                    <th style={{textAlign:'center'}}>Contact</th>
                    <th style={{textAlign:'center'}}>Action</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(data).map((id, index) =>{
                    return(
                        <tr key={id}>
                            <th scope={'row'}>{index + 1}</th>
                            <td>{data[id].name}</td>
                            <td>{data[id].email}</td>
                            <td>{data[id].contact}</td>
                            <td>
                                <Link to={`/update${id}`}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={()=> onDelete(id)}>
                                    Delete
                                </button>
                                <Link to={`/view/${id}`}>
                                    <button className={''}>View</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Home;