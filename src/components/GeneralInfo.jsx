/* eslint-disable react/prop-types */
import '../Styles/input.css';



function GeneralInfo({personName,email,mobileNum}){
    
    return <div id="generalInfo">
        <h2>General Info</h2>
        <hr />
        <div className="info"><b>Name : </b> {personName} </div>
        <div className="info"><b>Email : </b>{email}</div>
        <div className="info"><b>Mobile no. : </b>{mobileNum}</div>
    </div>
}

function GeneralInfoForm({nameUpdate,emailUpdate,mobileNumUpdate,isActive,handleEdit,handleSubmit}){
    return <div id="GeneralInfonput" className={isActive ? 'editable':''}>
        <h2>General Info</h2>
    <div id="nameInput">
        <b>Name : </b> <input type="text" onChange={nameUpdate} disabled={!isActive}/>
    </div>

    <div id="emailInput">
        <b>Email : </b> <input type="text" onChange={emailUpdate} disabled={!isActive}/>
    </div>

    <div id="mobNumInput">
        <b>Mobile no. : </b> <input type="text" onChange={mobileNumUpdate} disabled={!isActive}/>
    </div>
    <div className="edit_submit">
        <button className='editbtn' onClick={handleEdit} value='section1'>Edit</button>
        {isActive && 
        <button  className='submitbtn' onClick={handleSubmit} value='section1'>save</button>
        }
    </div>

    </div>
}

export {GeneralInfoForm,GeneralInfo}