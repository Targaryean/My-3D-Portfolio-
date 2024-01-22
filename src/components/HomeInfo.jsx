import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

const InfoBox = ({text, btnText, link}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
            {text}</p>

        <Link to = {link} className='neo-brutalism-white neo-btn'>{btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (

        <InfoBox
        text = "Welcome to the playground of my creativity!"
        btnText = "Let's explore"
        link = '/projects'
        />
      
    ),
  
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
  
}

export default HomeInfo