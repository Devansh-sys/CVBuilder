import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Display from './components/Preview'
import Form from './components/Editor'

import './App.css'


function App() {

const [collegeName,setCollegeName] = useState("Institute of Engineering and Technology , DAVV Indore");
const [course,setCourse] = useState("Information Technology");
const [startYear,setStartYear] = useState("2022");
const [endYear,setEndYear] = useState("2026");

const [personName,setPersonName] = useState("Devansh Bhargava")
const [email,setEmail] = useState("devanshbhargava90@gmail.com")
const [mobileNum,setMobileNum] = useState("7974175569")


const [companyName,setCompanyName] = useState("Tech Innovators")
const [position,setPosition] = useState("Software Engineer")
const [title,setTitle] = useState("Senior Develope")
const [resp,setResp] = useState("Developing new features")


function collegeNameUpdate(e){
    setCollegeName(e.target.value);
}
function courseUpdate(e){
    setCourse(e.target.value);
}
function startYearUpdate(e){
    setStartYear(e.target.value);
}
function endYearUpdate(e){
    setEndYear(e.target.value);
}



function nameUpdate(e){
    setPersonName(e.target.value);
}
function emailUpdate(e){
    setEmail(e.target.value);
}
function mobileNumUpdate(e){
    setMobileNum(e.target.value);
}



function companyNameUpdate(e){
    setCompanyName(e.target.value);
}
function positionUpdate(e){
    setPosition(e.target.value);
}
function titleUpdate(e){
    setTitle(e.target.value);
}
function respUpdate(e){
    setResp(e.target.value);
}


return (
  <>
  <Form collegeNameUpdate={collegeNameUpdate} courseUpdate={courseUpdate} startYearUpdate={startYearUpdate} endYearUpdate={endYearUpdate} nameUpdate={nameUpdate} emailUpdate={emailUpdate} mobileNumUpdate={mobileNumUpdate} companyNameUpdate={companyNameUpdate} positionUpdate={positionUpdate} titleUpdate={titleUpdate} respUpdate={respUpdate}></Form>

  <Display collegeName={collegeName} course={course} startYear={startYear} endYear={endYear} personName={personName} email={email} mobileNum={mobileNum} companyName={companyName} position={position} title={title} resp={resp}></Display>

  </>
)

  
  
}

export default App
