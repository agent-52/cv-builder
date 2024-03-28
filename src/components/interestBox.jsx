import "../styles/educationBox.css";
import {useState} from "react"
function Interest({onClick, deleteVisible, id, cvInterest, handleCvInterest}){
  
  return (
    <div className="flex column gap1">
      <div className="flex gap2">
        <input type="text" id={`interest${id}`} className="inputWidth2 inputHeight1" value={cvInterest} onChange={handleCvInterest}/>
        {(deleteVisible )?<button className="deleteSkill" onClick={onClick}><img src="src\icons8-delete-24.png" alt="" className="deleteIcon"/></button>:null}
      </div>
      
    </div>
  )
}

function InterestBox({interest, interestId, handleAddInterest, interestArray, handleDeleteInterest, cvInterest, handleCvInterest}){
  



  return (
  <div className="flex column gap1 interestBox">
    <div className="eduHeading">
      <div className="eduInfoHead1 flex gap1 fsize2 lightBold vcentre">
        <div className="circle">5</div>
        <div>Interests</div>
      </div>
      <div className="eduInfoHead2 fsize3 flex column gap1">
        <p>Your interests can give employers a better sense of who you are as a person and what motivates you.</p>
        <p>Be sure to choose interests that are relevant to the job you're applying for, and that showcase your personality, skills, and values. e.g if you're applying for a job in marketing, include interests such as writing or photography.</p>
        <button className="addEducation button1" onClick={handleAddInterest}>+ Add Interest</button>
      </div>

    </div>
    <div className="flex column gap1 skillBox background">
      {interestArray.map((intr) => {
        return(
          <Interest onClick={() => handleDeleteInterest(intr)} deleteVisible={interestId.deleteVisible} id={intr} key={intr} cvInterest={cvInterest(intr)} handleCvInterest={(e) => handleCvInterest(e, intr)} />
        )
      })}
    </div>
      
  </div>
  )
}

export {InterestBox}