import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./styles/header.css"
import {useState} from "react"
import {Header} from "./components/header.jsx"
import {ProfileBox} from "./components/profileBox.jsx"
import {GeneralInfoBox} from "./components/generalInfoBox.jsx"
import {EducationBox} from "./components/educationBox"
import {WorkBox} from "./components/workBox"
import {SkillBox} from "./components/skillsBox"
import {InterestBox} from "./components/interestBox"
import { CvDisplay } from './components/editCv'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>
    <CvDisplay />
    
  </>,
)
