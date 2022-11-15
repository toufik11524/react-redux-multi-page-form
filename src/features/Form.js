import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {saveInfo} from "./FormSlice";

const Form = () => {
    const formDataList = useSelector(state => state.form.studentInfo);
    const [allValues, setAllValues] = useState({
        name: formDataList.name || '', 
        email: formDataList.email || '',
        phone: formDataList.phone || ''
     });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitData = () => {
        // console.log(allValues.name, allValues.email, allValues.phone);
        dispatch(saveInfo(allValues));
    }

    return (
        <div>
            <p>Name</p>
            <input placeholder='Enter your name' name='name' value={allValues.name} onChange={ (e) => setAllValues({...allValues, [e.target.name]: e.target.value})} />
            <p>Email</p>
            <input placeholder='Enter your email' name='email' value={allValues.email} onChange={ (e) => setAllValues({...allValues, [e.target.name]: e.target.value})} />
            <p>Phone</p>
            <input placeholder='Enter your phone' name='phone' value={allValues.phone} onChange={ (e) => setAllValues({...allValues, [e.target.name]: e.target.value})} />
            <br />
            <button onClick={() => {
                submitData();
                navigate('/subject-info-page')
            }}>Next</button>
        </div>
    );
}

export default Form;