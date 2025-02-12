/* eslint-disable react/prop-types */
import { useState } from 'react'
import {EducationForm} from './Education'
import { ExperienceForm } from './Experience'
import { GeneralInfoForm } from './GeneralInfo'
import '../Styles/section.css'

export default function Form({collegeNameUpdate,courseUpdate,startYearUpdate,endYearUpdate,companyNameUpdate,positionUpdate,titleUpdate,respUpdate,nameUpdate,emailUpdate,mobileNumUpdate}){

    const [isActiveSection,setIsActiveSection] = useState(null);

    function onHandleEdit(e){
        let section = e.target.value;
        setIsActiveSection(section);
    }
    const onHandleSubmit = () => {
       setIsActiveSection(null);
    };


    return (
        <div className='form'>
            <GeneralInfoForm nameUpdate={nameUpdate} emailUpdate={emailUpdate} mobileNumUpdate={mobileNumUpdate} isActive={isActiveSection === 'section1'} handleEdit={onHandleEdit} handleSubmit={onHandleSubmit}></GeneralInfoForm>
            <EducationForm  collegeNameUpdate={collegeNameUpdate} courseUpdate={courseUpdate} startYearUpdate={startYearUpdate} endYearUpdate={endYearUpdate} isActive={isActiveSection === 'section2'} handleEdit={onHandleEdit} handleSubmit={onHandleSubmit}></EducationForm>
            <ExperienceForm companyNameUpdate={companyNameUpdate} positionUpdate={positionUpdate} titleUpdate={titleUpdate} respUpdate={respUpdate} isActive={isActiveSection === 'section3'} handleEdit={onHandleEdit} handleSubmit={onHandleSubmit}></ExperienceForm>
        
        </div>
    )


}