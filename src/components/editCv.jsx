import {useState} from "react"
import {ProfileBox} from "./profileBox.jsx"
import {GeneralInfoBox} from "./generalInfoBox.jsx"
import {EducationBox} from "./educationBox"
import {WorkBox, Work} from "./workBox"
import {SkillBox} from "./skillsBox"
import {InterestBox} from "./interestBox"
import {Header} from "./header.jsx"
import {Cv} from "./cv.jsx"
import "../index.css"

function removeElementAt(arr, index) {
  let frontPart = arr.slice(0, index);
  let lastPart  = arr.slice( index+1 ); // index to end of array
  return [...frontPart, ...lastPart];
}

/////////////////////////////



///////////////////////////

function CvDisplay(){
  const [image, setImage] = useState("")
  function onFileSelected(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
  
    var imgtag = document.querySelector(".profileImage");
    imgtag.title = selectedFile.name;
  
    reader.onload = function(event) {
      imgtag.src = event.target.result;
      setImage(event.target.result)

    };
  
    reader.readAsDataURL(selectedFile);
  }

    /////////////work functions//////////
    const [workId, setWorkId] = useState({id:1, deleteVisible:false})
    const [workArray, setWorkArray] = useState([0])
    const [work, setWork] = useState([{position:"", company:"", workstartingDate:"", workendingDate:"", location:"", tasks:"" }])
    console.log("work", work)
    
    function handleAddWork(){
      const id = workId.id
      setWorkId({...workId, id:id+1, deleteVisible:true})
      workArray.push(workId.id)
      const newWorkObj = work
      newWorkObj[id] = {position:"", company:"", workstartingDate:"", workendingDate:"", location:"", tasks:""}
      setWork(newWorkObj)
    }
    
    console.log("workArray",workArray)
    function handleDeleteWork(id){
      const newWorkArray = workArray.filter((num) => num!==id)
      const newWorkObj = work
      delete newWorkObj[id];
      setWork(newWorkObj)
      console.log(newWorkArray)
      setWorkArray(newWorkArray)
    }
  
    
  
    function handlePosition(e, wo){
      work[wo].position = e.target.value
      
      setWork([...work])
    }
    function handleLocation(e, wo){
      work[wo].location = e.target.value
      
      setWork([...work])
    }
    function handleTasks(e, wo){
      work[wo].tasks = e.target.value
      
      setWork([...work])
    }
    
    function handleCompany(e, wo){
      work[wo].company = e.target.value
      
      setWork([...work])
    }
    function handleWorkendingDate(e, wo){
      
      work[wo].workendingDate = e.target.value
      
      setWork([...work])
    }
    function handleWorkstartingDate(e, wo){
      
      work[wo].workstartingDate = e.target.value
      
      setWork([...work])
    }
    function position(wo){
      return (work[wo].position)
    }
    function tasks(wo){
      return (work[wo].tasks)
    }
    function location(wo){
      return (work[wo].location)
    }
    function company(wo){
      return (work[wo].company)
    }
    function workendingDate(wo){
      return (work[wo].workendingDate)
    }
    function workstartingDate(wo){
      return (work[wo].workstartingDate)
    }
  
    ////////////////////////////////////
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [profession, setProfession] = useState("")
  const [city, setCity] = useState("")
  const [linkedinUserName, setLinkedinUserName] = useState("")
  const [url, setUrl] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")
  function handleFirstName(e){
    console.log("first name rerendered")
    setFirstName(e.target.value)
  }
  function handleLastName(e){
    setLastName(e.target.value)
  }
  function handleProfession(e){
    setProfession(e.target.value)
  }
  function handleCity(e){
    setCity(e.target.value)
  }
  function handleLinkedinUserName(e){
    setLinkedinUserName(e.target.value)
  }
  function handleUrl(e){
    setUrl(e.target.value)
  }
  function handleEmail(e){
    setEmail(e.target.value)
  }
  function handlePhone(e){
    setPhone(e.target.value)
  }
  function handleDescription(e){
    setDescription(e.target.value)
  }
  const fullName = firstName+" "+lastName;

  ////////edu functions//////////
  const [eduId, seteduId] = useState({id:1, deleteVisible:false})
  const [eduArray, setEduArray] = useState([0])

  function handleAddEdu(){
    const id = eduId.id
    seteduId({...eduId, id:id+1, deleteVisible:true})
    eduArray.push(eduId.id)
    const newEduObj = education
    newEduObj[id] = {schoolName:"", degree:"", edustartingDate:"", eduendingDate:"" }
    setEducation(newEduObj)
  }
  
  console.log("eduArray ",eduArray)
  function handleDeleteEdu(id){
    const newEduArray = eduArray.filter((num) => num!==id)
    const newEduObj = education
    delete newEduObj[id];
    setEducation(newEduObj)
    console.log(newEduArray)
    setEduArray(newEduArray)
    
  }

  const [education, setEducation] = useState([{schoolName:"", degree:"", edustartingDate:"", eduendingDate:"" }])
  console.log(education)
  ///////////////imp//////////////
  function handleSchoolName(e, edu){
    education[edu].schoolName = e.target.value
    
    setEducation([...education])
  }
  /////////////////////////////////
  function handleDegree(e, edu){
    education[edu].degree = e.target.value
    
    setEducation([...education])
  }
  function handleEduendingDate(e, edu){
    
    education[edu].eduendingDate = e.target.value
    
    setEducation([...education])
  }
  function handleEdustartingDate(e, edu){
    
    education[edu].edustartingDate = e.target.value
    
    setEducation([...education])
  }
  function schoolName(edu){
    
    return (education[edu].schoolName)
    
    
  }
  function degree(edu){
    return (education[edu].degree)
  }
  function eduendingDate(edu){
    return (education[edu].eduendingDate)
  }
  function edustartingDate(edu){
    return (education[edu].edustartingDate)
  }

  //////////////////////////
  /////////////////////////////////////////////////////////////////////
  const [skillId, setSkillId] = useState({id:1, deleteVisible:true})
  const [skillArray, setSkillArray] = useState([0])
  const [skill, setSkill] = useState([{cvSkill:""}])
  console.log(skill)
  
  function handleAddSkill(){
    const id = skillId.id
    setSkillId({...skillId, id:id+1, deleteVisible:true})
    skillArray.push(skillId.id)
    const newSkillObj = skill
    newSkillObj[id] = {cvSkill:"" }
    setSkill(newSkillObj)
  }
  
  console.log("skillArray", skillArray)
  function handleDeleteSkill(id){
    const newSkillArray = skillArray.filter((num) => num!==id)
    const newSkillObj = skill
    delete newSkillObj[id];
    console.log(newSkillArray)
    setSkillArray(newSkillArray)
    setSkill(newSkillObj)

  }
  

  function handleCvSkill(e, sk){
    
    skill[sk].cvSkill = e.target.value
    
    setSkill([...skill])
  }
  function cvSkill(sk){
    
    return (skill[sk].cvSkill)
    
    
  }

  //////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////
  const [interestId, setInterestId] = useState({id:1, deleteVisible:true})
  const [interestArray, setInterestArray] = useState([0])
  const [interest, setInterest] = useState([{cvInterest:""}])
  console.log("interest",interest)
  
  function handleAddInterest(){
    const id = interestId.id
    setInterestId({...interestId, id:id+1, deleteVisible:true})
    interestArray.push(interestId.id)
    const newInterestObj = interest
    newInterestObj[id] = {cvInterest:"" }
    setInterest(newInterestObj)
  }
  
  console.log("interestArray", interestArray)
  function handleDeleteInterest(id){
    const newInterestArray = interestArray.filter((num) => num!==id)
    const newInterestObj = interest
    delete newInterestObj[id];
    console.log(newInterestArray)
    setInterestArray(newInterestArray)
    setInterest(newInterestObj)

  }
  

  function handleCvInterest(e, intr){
    
    interest[intr].cvInterest = e.target.value
    
    setInterest([...interest])
  }
  function cvInterest(intr){
    
    return (interest[intr].cvInterest)
    
    
  }

  //////////////////////////////////////////////////////////////////////


  const[displayCv, setDisplayCv] = useState(false)
  function handleDisplayCv(){
    console.log(displayCv)
    setDisplayCv(true)
  }
  function handleEditCv(){
    console.log("editCv")
    setDisplayCv(false)
  }
  if(!displayCv){
    return(
      <>
      <Header handleDisplayCv={handleDisplayCv} handleEditCv={handleEditCv} />
      <div className="maingrid">
        <ProfileBox onFileSelected={onFileSelected} image={image}/>
        <GeneralInfoBox  lastName={lastName} handleFirstName={handleFirstName} firstName={firstName} handleLastName={handleLastName} profession={profession} handleProfession={handleProfession} city={city} handleCity={handleCity} linkedinUserName={linkedinUserName} handleLinkedinUserName={handleLinkedinUserName} url={url} handleUrl={handleUrl} email={email} handleEmail={handleEmail} phone={phone} handlePhone={handlePhone} description={description} handleDescription={handleDescription} />

        

        <EducationBox education={education} setEducation={setEducation} eduId={eduId} handleAddEdu={handleAddEdu} eduArray={eduArray} handleDeleteEdu={handleDeleteEdu} schoolName={schoolName} handleSchoolName={handleSchoolName} handleEduendingDate={handleEduendingDate} eduendingDate={eduendingDate} handleEdustartingDate={handleEdustartingDate} edustartingDate={edustartingDate} degree={degree} handleDegree={handleDegree}/>

        <WorkBox work={work} setWork={setWork} workId={workId} handleAddWork={handleAddWork} workArray={workArray} handleDeleteWork={handleDeleteWork} position={position} handlePosition={handlePosition} company={company} handleCompany={handleCompany} location={location} handleLocation={handleLocation} workstartingDate={workstartingDate} handleWorkstartingDate={handleWorkstartingDate} workendingDate={workendingDate} handleWorkendingDate={handleWorkendingDate} tasks={tasks} handleTasks={handleTasks}/>

        <SkillBox skill={skill} skillId={skillId} handleAddSkill={handleAddSkill} skillArray={skillArray} handleDeleteSkill={handleDeleteSkill} cvSkill={cvSkill} handleCvSkill={handleCvSkill}/>

        <InterestBox interest={interest} interestId={interestId} handleAddInterest={handleAddInterest} interestArray={interestArray} handleDeleteInterest={handleDeleteInterest} cvInterest={cvInterest} handleCvInterest={handleCvInterest}/>
        

        

        
        
      </div>
      </>
    )
  }else{
    return(
      <>
        <Header handleDisplayCv={handleDisplayCv} handleEditCv={handleEditCv} />
        <div className="downloadButton placeCenter"><button className="button1">Download as PDF</button></div>
        <div className="cvContainer">
          <Cv image={image} onFileSelected={onFileSelected} fullName={fullName} profession={profession} city={city} linkedinUserName={linkedinUserName} url={url} email={email} phone={phone} description={description} eduArray={eduArray} degree={degree} schoolName={schoolName} eduendingDate={eduendingDate} edustartingDate={edustartingDate} workArray={workArray} position={position} company={company} location={location} workendingDate={workendingDate} workstartingDate={workstartingDate} tasks={tasks} skillArray={skillArray} cvSkill={cvSkill} interestArray={interestArray} cvInterest={cvInterest} />
        </div>
        
      </>
    )
  }
  

}

export{CvDisplay}