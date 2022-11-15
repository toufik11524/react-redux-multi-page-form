import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {saveInfo} from "./FormSlice";
import './page.css';

const SubjectForm = () => {
    const formDataList = useSelector(state => state.form.studentInfo);
    const [allValues, setAllValues] = useState({
        subject: formDataList.subject || '',
        mark: formDataList.mark || '',
        hour: formDataList.hour || '',
        number: formDataList.number || ''
     });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitData = () => {
        dispatch(saveInfo(allValues));
    }

    return (
        <div>
            <h2>Subject Information</h2>
                <p>Subject</p>
                <input placeholder='Enter your subject' name='subject' value={allValues.subject} onChange={ (e) => setAllValues({...allValues, [e.target.name]: e.target.value})} />
                <p>Mark</p>
                <input placeholder='Enter your mark' name='mark' value={allValues.mark} onChange={ (e) => setAllValues({...allValues, [e.target.name]: e.target.value})} />
                <p>Hour</p>
                <input placeholder='Enter your hour' name='hour' value={allValues.hour} onChange={ (e) => setAllValues({...allValues, [e.target.name]: e.target.value})} />
                <br />
                {/* ------------------------------------------ */}

                {/* <p>Number of Subject</p>
                <input name='number' value={allValues.number} onChange={ (e) => setAllValues({...allValues, [e.target.name]: e.target.value})} /> */}

                <div className='button-flex'>
                    <button onClick={() => {
                        navigate('/');
                    }}>Back</button>

                    <button onClick={() => {
                        submitData();
                        // navigate('/course-info-page');
                        navigate('/address-info-page');
                    }}>Next</button>
                    
                </div>
        </div>
    )
}

export default SubjectForm