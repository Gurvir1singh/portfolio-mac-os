import React, { useEffect, useState } from 'react'
import MacWindow from './MacWindow'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import "./note.scss"

function Note({ setwindowStatus,window,windowName}) { 

const [markdown, setMarkdown] = useState(null)

useEffect(() => {
  fetch("/note.txt")
  .then(res => res.text())
  .then(text => setMarkdown(text))
}, [])



  return (
    <MacWindow setwindowStatus={setwindowStatus} window={window} windowName={windowName}>
        <div className="note-Window">
          {markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighlighter>:<p>Loading...</p>}
        </div>

    </MacWindow>
  )
}

export default Note    