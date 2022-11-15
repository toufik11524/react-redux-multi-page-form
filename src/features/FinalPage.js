import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const FinalPage = () => {
    const navigate = useNavigate();
    const formDataList = useSelector(state => state.form.studentInfo);
    console.log(formDataList ,"Hello");
    return (
        <div>
            <h2>Submitted Data</h2>
            {formDataList.name && <p>Name: {formDataList.name}</p>}
            {formDataList.email && <p>Email: {formDataList.email}</p>}
            {formDataList.phone && <p>Phone: {formDataList.phone}</p>}
            {formDataList.subject && <p>Subject: {formDataList.subject}</p>}
            {formDataList.mark && <p>Mark: {formDataList.mark}</p>}
            {formDataList.hour && <p>Hour: {formDataList.hour}</p>}
            {formDataList.address && <p>Address: {formDataList.address}</p>}
            {formDataList.city && <p>City: {formDataList.city}</p>}
            <br />
            <button onClick={() => {
                    navigate('/address-info-page');
                }}>Back</button>
        </div>
    )
}

export default FinalPage;