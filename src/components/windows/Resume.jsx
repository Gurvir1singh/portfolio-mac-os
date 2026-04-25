import React from 'react'
import "./resume.scss"
import MacWindow from './MacWindow'

function Resume({setwindowStatus,window ,windowName}) {
    return (
        <MacWindow setwindowStatus={setwindowStatus} window={window} windowName={windowName}>
            <div className="resume-window">

                <iframe src="/resume.pdf" frameBorder="0"></iframe>
            </div>
        </MacWindow>
    )
}

export default Resume