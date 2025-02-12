/* eslint-disable react/prop-types */
import '../Styles/input.css';


function ExperienceForm({companyNameUpdate,positionUpdate,titleUpdate,respUpdate,isActive,handleEdit,handleSubmit}){
    return <div id="experienceInput" className={isActive ? 'editable':''}>
        <h2>Experience Info</h2>
    <div id="nameInput">
        <b>Company Name : </b> <input type="text" onChange={companyNameUpdate} disabled={!isActive}/>
    </div>

    <div id="positionInput">
        <b>Position : </b> <input type="text" onChange={positionUpdate} disabled={!isActive}/>
    </div>

    <div id="titleInput">
        <b>Title : </b> <input type="text" onChange={titleUpdate} disabled={!isActive}/>
    </div>

    <div id="respInput">
        <b>Most Responsibilities : </b> <input type="text" onChange={respUpdate} disabled={!isActive}/>
    </div>
    <div className="edit_submit">
        <button className='editbtn' onClick={handleEdit} value='section3'>Edit</button>
        {isActive && 
        <button  className='submitbtn' onClick={handleSubmit} value='section3'>save</button>
        }
    </div>

    </div>
}



function Experience({companyName,position,title,resp}){
    
    return <div id="Experience">
        <h2>Experience</h2>
        <hr />
        <div className="info"><b>Company Name : </b> {companyName} </div>
        <div className="info"><b>Position : </b>{position}</div>
        <div className="info"><b>Title :</b>{title}</div>
        <div className="info"><b>Responsibilities :</b>{resp}</div>
    </div>
}

export {ExperienceForm,Experience};