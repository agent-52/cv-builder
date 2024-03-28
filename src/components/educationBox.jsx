import "../styles/educationBox.css";
import {useState} from "react"
function Education({onClick, deleteVisible, id, schoolName, handleSchoolName, handleEduendingDate, eduendingDate, handleEdustartingDate, edustartingDate, degree, handleDegree}){
  
  return (
    <div className="flex column gap1">
      <div className="inputGrid">
        <div className="flex column gap3">
          <label htmlFor={`schoolName${id}`}>School name</label>
          <input type="text" id={`schoolName${id}`}className="  inputHeight1" onChange={handleSchoolName} value={schoolName}/>
        </div>
        <div className="flex column gap3">
          <label htmlFor={`degree${id}`}>Degree/Certification</label>
          <input type="text" id={`degree${id}`} className=" inputHeight1" onChange={handleDegree} value={degree}/>
        </div>
      </div>
      <div className="inputGrid">
        <div className="flex column gap3">
          <label htmlFor={`edustartingDate${id}`}>Starting date</label>
          <input type="text" id={`edustartingDate${id}`} className="  inputHeight1" onChange={handleEdustartingDate} value={edustartingDate}/>
        </div>
        <div className="flex column gap3">
          <label htmlFor={`eduendingDate${id}`}>Ending date</label>
          <input type="text" id={`eduendingDate${id}`} className=" inputHeight1" onChange={handleEduendingDate} value={eduendingDate}/>
        </div>
      </div>
      {(deleteVisible )?<button className="deleteEdu button2" onClick={onClick}><img src="src\icons8-delete-24.png" alt="" className="deleteIcon"/>Delete Entry</button>:null}
    </div>
  )
}

function EducationBox({education, eduId, handleAddEdu, eduArray, handleDeleteEdu, schoolName, handleSchoolName, handleEduendingDate, eduendingDate, handleEdustartingDate, edustartingDate, degree, handleDegree}){

  return (
  <div className="flex column gap1 educationBox">
    <div className="eduHeading">
      <div className="eduInfoHead1 flex gap1 fsize2 lightBold vcentre">
        <div className="circle">2</div>
        <div>Education</div>
      </div>
      <div className="eduInfoHead2 fsize3 flex column gap1">
        <p>The education demonstrates your commitment to learning and your willingness to acquire new skills.</p>
        <p>If you have multiple degrees, list them in reverse chronological order, with the most recent degree listed first and if you don't have any formal education, consider including any relevant certifications or training you may have received.</p>
        <button className="addEducation button1" onClick={handleAddEdu}>+ Add more education</button>
      </div>

    </div>
    <div className="flex column gap1 eduContentBox background">
      {eduArray.map((edu) => {
        return(
          
          <Education onClick={() => handleDeleteEdu(edu)} deleteVisible={eduId.deleteVisible} id={edu} key={edu} schoolName={education[edu].schoolName} handleSchoolName={(e) => handleSchoolName(e, edu)} handleEduendingDate={(e) => handleEduendingDate(e, edu)} eduendingDate={eduendingDate(edu)} handleEdustartingDate={(e)=>handleEdustartingDate(e, edu)} edustartingDate={edustartingDate(edu)} degree={degree(edu)} handleDegree={(e) => handleDegree(e, edu)}/>
        )
      })}
    </div>
      
  </div>
  )
}

export {EducationBox}