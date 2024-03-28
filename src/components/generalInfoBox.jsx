import "../styles/generalInfoBox.css";
import {useState} from "react"


function GeneralInfoBox({firstName, lastName, handleFirstName, handleLastName, profession, handleProfession, city, handleCity, linkedinUserName, handleLinkedinUserName, url, handleUrl, email, handleEmail, phone, handlePhone, description, handleDescription  }){

  return (
    
  <div className="flex column gap1 generalInfo">
    
    <div className="genHeading">
      <div className="genInfoHead1 flex gap1 fsize2 lightBold vcentre">
        <div className="circle">1</div>
        <div>General Information</div>
      </div>
      <div className="genInfoHead2 fsize3">
        <p>This is a critical part of your CV as it gives the potential employer a glimpse of who you are. This is an opportunity for you to introduce yourself, highlight your skills, and provide a brief summary of your career goals.</p>
      </div>

    </div>
    <div className="flex column gap1 background">
      <div className="inputGrid">
        <div className="flex column gap3">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" className=" inputHeight1" onChange={handleFirstName} vlaue={firstName}/>
        </div>
        <div className="flex column gap3">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" className=" inputHeight1" onChange={handleLastName} value={lastName}/>
        </div>
      </div>
      <div className="flex column gap3">
        <label htmlFor="profession">Profession</label>
        <input type="text" id="profession"className="inputWidth2 inputHeight1" onChange={handleProfession} value={profession}/>
      </div>
      <div className="flex column gap3">
        <label htmlFor="city">City</label>
        <input type="text" id="city" className="inputWidth2 inputHeight1" onChange={handleCity} value={city}/>
      </div>

      <div className="inputGrid">
        <div className="flex column gap3"> 
          <label htmlFor="linkedinName">LinkedIn username</label>
          <input type="text" id="linkedinName" className=" inputHeight1" onChange={handleLinkedinUserName} value={linkedinUserName}/>
        </div>
        <div className="flex column gap3">
          <label htmlFor="portfolio">Portfolio Url</label>
          <input type="url" id="portfolio" className=" inputHeight1" onChange={handleUrl} value={url}/>
        </div>
      </div>

      <div className="inputGrid">
        <div className="flex column gap3">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className=" inputHeight1" onChange={handleEmail} value={email}/>
        </div>
        <div className="flex column gap3">
          <label htmlFor="phone">Phone number</label>
          <input type="number" id="phone" className=" inputHeight1" onChange={handlePhone} value={phone}/>
        </div>
      </div>
      <div className="flex column gap3">
        <label htmlFor="description">Description (About me)</label>
        <textarea type="text" id="description" className="inputWidth2 inputHeight2" onChange={handleDescription} value={description}/>
      </div>
      

    </div>
  </div>
  )
}

export {GeneralInfoBox}