import './App.css';
import './Components/SignIn';
import HomePage from './Components/DashBoard/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignIn from './Components/SignIn';
import React, { useState } from 'react';
import SignUp from './Components/SignUp';
import Job_Postings from './Components/DashBoard/Job_Applications/job_postings';
import Resume from './Components/DashBoard/Resume/resume';
import GenerateResume from './Components/DashBoard/Resume/generateResume';

function App() {
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <SignIn setToken={setToken} />
  // }
  return (
    <div className="wrapper">
      <Router>
         <Routes>
         <Route exact path="/login" element={<SignIn/>}/>
         <Route exact path="/SignUp" element={<SignUp/>}/>
         <Route exact path="/HomePage" element={<HomePage/>}/>
         <Route exact path='/HomePage/Job_Postings' element={<Job_Postings/>}/>
         <Route exact path='/HomePage/Resume' element={<Resume/>}/>
         <Route exact path='/HomePage/Resume/GenerateResume' element={<GenerateResume/>}/>
        </Routes>
    </Router>
    </div>
  );
  
}

export default App;
