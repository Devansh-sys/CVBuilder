/* eslint-disable react/prop-types */
// import { useState } from "react";
import '../Styles/input.css';
const DropYearMenu =({onChange,value,disabled}) => {
    const years = [];
    const startYear = 1900;
    const endYear = 2030;

    for(let i = startYear ; i <= endYear ;i++){
        years.push(i);
    }

    return(
        <select value={value} onChange={onChange} disabled={disabled}>
            <option value="">select year</option>
            {
                years.map((year) => (
                    <option value={year} key={year}>{year}</option>
                ))
            }
        </select>
    );
}



function Education({collegeName,course,startYear,endYear}){
    return <div id="Education">
        <h2>Education</h2>
        <hr />
        <div className="info"><b>College Name : </b> {collegeName} </div>
        <div className="info"><b>Course : </b>{course}</div>
        <div className="info"><b>Session :</b>{startYear} -  {endYear}</div>
    </div>


}

function EducationForm({collegeNameUpdate,courseUpdate,startYearUpdate,endYearUpdate,startYear,endYear,isActive,handleEdit,handleSubmit}){
   return <div id="educationInput" className={isActive ? 'editable':''}>
    <h2>Education Info</h2>
    <div id="nameInput">
        <b>College Name : </b> <input type="text" onChange={collegeNameUpdate} disabled={!isActive}/>
    </div>

    <div id="courseInput">
        <b>Course : </b> <input type="text" onChange={courseUpdate} disabled={!isActive}/>
    </div>

    <div id="sessionInput">
        <span><b>from :</b> <DropYearMenu value={startYear} onChange={startYearUpdate} disabled={!isActive}/></span> <span><b>to : </b> <DropYearMenu value={endYear} onChange={endYearUpdate} disabled={!isActive}/></span>
    </div>
    <div className="edit_submit">
        <button className='editbtn' onClick={handleEdit} value='section2'>Edit</button>
        {isActive && 
        <button className='submitbtn' onClick={handleSubmit} value='section2'>save</button>
        }
    </div>
    </div>
}

export {Education,EducationForm} 
