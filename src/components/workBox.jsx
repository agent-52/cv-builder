import "../styles/educationBox.css";
import {useState} from "react"
function Work({onClick, deleteVisible, id, position, handlePosition, company, handleCompany, location, handleLocation, workstartingDate, handleWorkstartingDate, workendingDate, handleWorkendingDate, tasks, handleTasks}){
  
  return (
    <div className="flex column gap1">
      <div className="inputGrid">
        <div className="flex column gap3">
          <label htmlFor={`position${id}`}>Your Position</label>
          <input type="text" id={`position${id}`}className="  inputHeight1" value={position} onChange={handlePosition}/>
        </div>
        <div className="flex column gap3">
          <label htmlFor={`company${id}`}>Company</label>
          <input type="text" id={`company${id}`} className=" inputHeight1" value={company} onChange={handleCompany}/>
        </div>
      </div>
      <div className="inputGrid">
        <div className="flex column gap3">
          <label htmlFor={`location${id}`}>Location</label>
          <input type="text" id={`location${id}`} className="  inputHeight1" value={location} onChange={handleLocation}/>
        </div>
        <div className="flex spaceBetween">
          <div className="flex column gap3">
            <label htmlFor={`workstartingDate${id}`}>Starting date</label>
            <input type="text" id={`workstartingDate${id}`} className=" inputHeight1" value={workstartingDate} onChange={handleWorkstartingDate}/>
          </div>
          <div className="flex column gap3">
            <label htmlFor={`workendingDate${id}`}>Ending date</label>
            <input type="text" id={`workendingDate${id}`} className=" inputHeight1" value={workendingDate} onChange={handleWorkendingDate}/>
          </div>
        </div>
      </div>
      <div className="flex column gap3">
        <label htmlFor={`tasks${id}`}>Tasks / Achievements</label>
        <textarea type="text" id={`tasks${id}`}className="inputWidth2 inputHeight2" value={tasks} onChange={handleTasks}/>
      </div>
      {(deleteVisible )?<button className="deleteWork button2" onClick={onClick}><img src="src\icons8-delete-24.png" alt="" className="deleteIcon"/>Delete Entry</button>:null}
    </div>
  )
}

function WorkBox({work, workId, handleAddWork, workArray, handleDeleteWork, position, handlePosition, company, handleCompany, location, handleLocation, workstartingDate, handleWorkstartingDate, workendingDate, handleWorkendingDate, tasks, handleTasks}){

  return (
  <div className="flex column gap1 workBox">
    <div className="eduHeading">
      <div className="eduInfoHead1 flex gap1 fsize2 lightBold vcentre">
        <div className="circle">3</div>
        <div>Work Experience</div>
      </div>
      <div className="eduInfoHead2 fsize3 flex column gap1">
        <p>Showcase your professional accomplishments and demonstrate your ability to contribute to an organization.</p>
        <p>In addition to the basics, you should also include a brief description of your duties and accomplishments while in the role. This can help potential employers understand the scope of your responsibilities and the impact of it.</p>
        <button className="addEducation button1" onClick={handleAddWork}>+ Add more experience</button>
      </div>

    </div>
    <div className="flex column gap1 eduContentBox background">
      {workArray.map((wo) => {
        return(

          <Work onClick={() => handleDeleteWork(wo)} deleteVisible={workId.deleteVisible} id={wo} key={wo} position={work[wo].position} handlePosition={(e) => handlePosition(e, wo)} company={company(wo)} handleCompany={(e) => handleCompany(e, wo)} location={location(wo)} handleLocation={(e) => handleLocation(e, wo)} workstartingDate={workstartingDate(wo)} handleWorkstartingDate={(e) => handleWorkstartingDate(e, wo)} workendingDate={workendingDate(wo)} handleWorkendingDate={(e) => handleWorkendingDate(e, wo)} tasks={tasks(wo)} handleTasks={(e) => handleTasks(e, wo)}/>
        )
      })}
    </div>
      
  </div>
  )
}

export {WorkBox, Work}