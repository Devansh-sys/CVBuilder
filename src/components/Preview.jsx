/* eslint-disable react/prop-types */

import { GeneralInfo } from "./GeneralInfo"; 
import { Education } from "./Education";
import { Experience } from "./Experience";
import '../Styles/section.css'


export default function Diplay({personName,email,mobileNum,collegeName,course,startYear,endYear,companyName,position,title,resp}){
    return(
        <div className='form'>
            <GeneralInfo personName={personName} email={email} mobileNum={mobileNum}></GeneralInfo>
            <Education collegeName={collegeName} course={course} startYear={startYear} endYear={endYear}></Education>
            <Experience companyName={companyName} position={position} title={title} resp={resp}></Experience>
        </div>
    )
}