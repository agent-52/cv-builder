import "../styles/cv.css"




function General({fullName, profession, city, linkedinUserName, url, email, phone, description}){

  return(
  <div className="flex column gap5">
    <div className="flex column gap4">
      <div className="fullName">{fullName}</div>
      <div className="profession">{profession}</div>
    </div>
    <div className="alignCenter gap2">
      <img src="src\location-sign.svg" alt="" className="cvIcon"/>
      <div className="capitalize">{city}</div>
    </div>
    <div>
      {description}
    </div>
    <div className="cvGrid2">
      <div className="alignCenter gap2">
        <div><img src="src\mail.svg" alt="" className="cvIcon" /></div>
        <div><a className="blue" href={email}>{email}</a></div>
      </div>
      <div className="alignCenter gap2">
        <div><img src="src\linkedin.svg" alt="" className="cvIcon"/></div>
        <div><a className="blue" href={linkedinUserName}>{linkedinUserName}</a></div>
      </div>
      <div className="alignCenter gap2">
        <div><img src="src\phone.svg" alt="" className="cvIcon" /></div>
        <div>{phone}</div>
      </div>
      <div className="alignCenter gap2">
        <div><img src="src\office-briefcase.svg" alt="" className="cvIcon" /></div>
        <div><a className="blue" href={url}>{url}</a></div>
      </div>
    </div>
  </div>
  )
}

function EducationCv({eduArray, degree, schoolName, eduendingDate, edustartingDate}){
  return(
    <div className="flex column gap1">
      <h3 className="">Education</h3>
      <div className="cvEduContainer flex column gap5">
        {eduArray.map((edu) =>{
          
          return(
            <div className="flex column gap1" key={edu}>
              <div className="flex column gap4">
                <div className="degree">{degree(edu)}</div>
                <div className="school">{schoolName(edu)}</div>
              </div>
              <div className="blue bold3">{edustartingDate(edu)} - {eduendingDate(edu)}</div>
            </div>
          )
          
        })}
            
      </div>
      
    </div>
    
  )
}

function WorkCv({workArray, position, company, location, workendingDate, workstartingDate, tasks}){
  return(
    <div className="flex column gap1">
      <h3 className="">Work Experience</h3>
      <div className="cvEduContainer flex column gap1">
        {workArray.map((wo) =>{
          
          return(
            <div className="flex column gap1" key={wo}>
              <div className="flex column gap4">
                <div className="position">{position(wo)}</div>
                <div className="company">{company(wo)}</div>
              </div>
              <div className="spaceBetween blue bold3">
                <div>{workstartingDate(wo)} - {workendingDate(wo)}</div>
                <div>{location(wo)}</div>
              </div>
              <div className="flex column gap2">
                <div className="bold3">Achievements / Tasks:</div>
                <div>{tasks(wo)}</div>
              </div>
            </div>
          )
          
        })}
            
      </div>
      
    </div>
    
  )
}

function SkillCv({skillArray, cvSkill}){
  return(
    <div className="flex column gap1">
      <h3 className="">Skills</h3>
      <div className="cvEduContainer flex column gap2 capitalize">
        {skillArray.map((sk) =>{
          
          return(
            <div className="" key={sk}>
              
              <div className="">- {cvSkill(sk)}</div>
 
            </div>
          )
          
        })}
            
      </div>
      
    </div>
    
  )
}

function InterestCv({interestArray, cvInterest}){
  return(
    <div className="flex column gap1">
      <h3 className="">Interests</h3>
      <div className="cvEduContainer flex column gap1 capitalize">
        {interestArray.map((intr) =>{
          
          return(
            <div className="" key={intr}>
              
              <div className="">. {cvInterest(intr)}</div>
 
            </div>
          )
          
        })}
            
      </div>
      
    </div>
    
  )
}



function Cv({onFileSelected, image, fullName, profession, city, linkedinUserName, url, email, phone, description, eduArray, degree, schoolName, eduendingDate, edustartingDate, workArray, position, company, location, workendingDate, workstartingDate, tasks, skillArray, cvSkill, interestArray, cvInterest}){

  console.log("cv rerendered")

  return(

    <div className="cvBox">
      <div className="smallBox">
        <div className="placeCenter"><div><img src={image} alt="" className="circle2 profileImage blackBorder"/></div></div>
        <div>
          <SkillCv skillArray={skillArray} cvSkill={cvSkill}/>
        </div>
        <div>
          <InterestCv interestArray={interestArray} cvInterest={cvInterest}/>
        </div>
      </div>
      <div className="largeBox fsize3">
        <div>
          <General fullName={fullName} profession={profession} city={city} linkedinUserName={linkedinUserName} url={url} email={email} phone={phone} description={description} />
        </div>
        <div>
          <WorkCv workArray={workArray} position={position} company={company} location={location} workendingDate={workendingDate} workstartingDate={workstartingDate} tasks={tasks}/>
        </div>
        <div>
          <EducationCv eduArray={eduArray} degree={degree} schoolName={schoolName} eduendingDate={eduendingDate} edustartingDate={edustartingDate}/>
        </div>

        
      </div>
    </div>
  )
}

export{Cv, General}