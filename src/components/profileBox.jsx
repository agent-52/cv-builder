import "../styles/profileBox.css"
import {Cv} from "./cv"

function ProfileBox({onFileSelected, image}){

  
  return(
    <div className="profileBox">
      <div className="grid placeCenter">
        <div className=""><img src={image} alt="" className="profileImage circle2" /></div>
      </div>
      <div className="flex column gap1">
        <h2>Profile Picture</h2>
        <div className="profileDesc1 fsize3">Adding a photo to your CV can be a great way to personalize your application and make a positive first impression. When uploading your photo, make sure it is a clear and recent headshot that shows your face in a professional manner.</div>
        <div className="profileDesc2 fsize3">When taking your photo, dress professionally and consider the background and lighting. A neutral background and good lighting can help to highlight your features and present you in the best possible light. Remember, your photo is an important part of your CV, so take the time to choose a high-quality image that represents you in a professional and approachable manner.</div>
        <div className="profileDesc3 fsize3">When you're done, the next step is to start filling your application with your personal information, good luck!</div>
        <div>
          <label htmlFor="profile" className="button1">Choose File</label>
          <input className="hide inputWidth2 inputHeight1" type="file" id="profile" onChange={onFileSelected}/>
        </div>
      </div>
    </div>
  )
    
  
}





export {ProfileBox}