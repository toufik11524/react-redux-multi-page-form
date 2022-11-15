import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {saveInfo} from "./FormSlice";

const Course = () => {
    const formDataList = useSelector(state => state.form.studentInfo);
    const [allValues, setAllValues] = useState({
        courseName: formDataList.courseName || '',
        courseCode: formDataList.courseCode || '',
     });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitData = () => {
        dispatch(saveInfo(allValues));
    }

    return (
        <div>
            {
                formDataList.courseList?.map((index, item) => 
                    <div>
                        <h2>Enter Subject {formDataList.number} Information</h2>
                        <p>Course Name</p>
                        <input placeholder='Enter the course name' name='courseName' value={allValues[index].courseName} onChange={ (e) => setAllValues({...allValues, [e.target.name]: e.target.value})}  />
                        <p>Course Code</p>
                        <input placeholder='Enter the course code' name='courseCode' value={allValues[index].courseCode} onChange={ (e) => setAllValues({...allValues, [e.target.name]: e.target.value})} />
                        <br />
                        <button onClick={() => {
                        submitData();
                        navigate('/address-info-page');
                        }}>Next</button>
                    </div>
                )
            }
        </div>
    );
};

export default Course;