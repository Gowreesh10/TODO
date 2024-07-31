import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'
function LandingPage() {
    const navigate = useNavigate();

    const handleGetStarted = ()=>{
        navigate('/auth');
    }
  return (
    <div className='container'>
        <body>
            <header>
                <h1 className='fredericka-the-great-regular'>TODO</h1>
            </header>
            <main>
                <h4 className='kaushan-script-regular'>Stay Organized and On Track,</h4>
                <p className='gentium-book-plus-regular'>Never miss a deadline or forget an important task again.</p>
                <p className='gentium-book-plus-regular'>Our app helps you stay organized, so you can focus on what matters most.</p>
                <div className="button-container"><button className='button' onClick={handleGetStarted}>Get Started</button></div>
            </main>
        </body>
    </div>
  )
}

export default LandingPage