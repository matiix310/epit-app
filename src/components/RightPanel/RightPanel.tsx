import React from 'react'

// styles
import './RightPanel.css'

// components
import LoginButton from './LoginButton/LoginButton'
import Navbar from './Navbar/Navbar'

function RightPanel() {
  return (
    <>
        <div className="right-panel">
            <div className="login-container">
                <LoginButton authType='microsoft' />
                <LoginButton authType='forge' />
            </div>

            <div className="game-container"></div>

            <Navbar />

            <h1 className="copyright">By Matiix310 width ❤️</h1>
        </div>
    </>
  )
}

export default RightPanel