import React from 'react';
import './App.css';
import Form from './features/Form';
import { Routes, Route } from 'react-router-dom';
import FinalPage from './features/FinalPage';
import SubjectForm from './features/SubjectForm';
import AddressPage from './features/AddressPage';
import Course from './features/Course';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/subject-info-page' element={<SubjectForm />} />
        <Route path='/address-info-page' element={<AddressPage />} />
        <Route path='/final-info-page' element={<FinalPage />} />
        <Route path='/course-info-page' element={<Course />} />
      </Routes>
    </div>
  );
}

export default App;
