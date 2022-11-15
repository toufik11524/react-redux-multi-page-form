import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {saveInfo} from "./FormSlice";

const AddressPage = () => {
    const formDataList = useSelector(state => state.form.studentInfo);
    const [allValues, setAllValues] = useState({
        address: formDataList.address || '',
        city: formDataList.city || '',
     });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitData = () => {
        dispatch(saveInfo(allValues));
    }

    return (
        <div>
            <h2>Address Information</h2>
            <p>Address</p>
            <input placeholder='Enter your address' name='address' value={allValues.address} onChange={ (e) => setAllValues({...allValues, [e.target.name]: e.target.value})} />
            <p>City</p>
            <input placeholder='Enter your city' name='city' value={allValues.city} onChange={ (e) => setAllValues({...allValues, [e.target.name]: e.target.value})} />
            <div className='button-flex'>
                <button onClick={() => {
                    navigate('/subject-info-page');
                }}>Back</button>

                <button onClick={() => {
                    submitData();
                    navigate('/final-info-page');
                }}>Next</button>
            </div>
        </div>
    )
}

export default AddressPage;