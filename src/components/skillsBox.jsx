import "../styles/educationBox.css";
import {useState} from "react"
function Skill({onClick, deleteVisible, id, cvSkill, handleCvSkill}){
  
  return (
    <div className="flex column gap1">
      <div className="flex gap2">
        <input type="text" id={`skill${id}`} className="inputWidth2 inputHeight1" value={cvSkill} onChange={handleCvSkill}/>
        {(deleteVisible )?<button className="deleteSkill" onClick={onClick}><img src="src\icons8-delete-24.png" alt="" className="deleteIcon" /></button>:null}
      </div>
      
    </div>
  )
}

function SkillBox({skill, skillId, handleAddSkill, skillArray, handleDeleteSkill, cvSkill, handleCvSkill}){
  



  return (
  <div className="flex column gap1 skillBox">
    <div className="eduHeading">
      <div className="eduInfoHead1 flex gap1 fsize2 lightBold vcentre">
        <div className="circle">4</div>
        <div>Skills</div>
      </div>
      <div className="eduInfoHead2 fsize3 flex column gap1">
        
        <p>Here is an opportunity to showcase your relevant abilities and qualifications for the job. Be specific about your skills and match them with the requirements of the job you're applying for. Include technical skills, communication skills, and problem-solving abilities.</p>
        <button className="addEducation button1" onClick={handleAddSkill}>+ Add Skill</button>
      </div>

    </div>
    <div className="flex column gap1 skillBox background">
      
      {skillArray.map((sk) => {
        return(
          <Skill onClick={() => handleDeleteSkill(sk)} deleteVisible={skillId.deleteVisible} id={sk} key={sk} cvSkill={cvSkill(sk)} handleCvSkill={(e) => handleCvSkill(e,sk)}/>
        )
      })}
    </div>
      
  </div>
  )
}

export {SkillBox}