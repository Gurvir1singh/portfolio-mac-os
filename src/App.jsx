import { useState } from "react"
import "./app.scss"
import Dock from "./components/Dock"
import Nav from "./components/Nav"
import Cli from "./components/windows/Cli"
import Github from "./components/windows/Github"
import Notes from "./components/windows/Note"
import Resume from "./components/windows/Resume"
import Spotify from "./components/windows/Spotify"

function App() {

  const [windowStatus, setwindowStatus] = useState(
    {
    github: {
        open: false,
        windowName: "github",
        previousPosition: { x: 0, y: 0 },
        previousSize: { width: 0, height: 0 },
        windowFullScreen: false,
        windowMinimized: false,
        isActive: false,
    },
    notes: {
        open: false,
        windowName: "notes",
        previousPosition: { x: 0, y: 0 },
        previousSize: { width: 0, height: 0 },
        windowFullScreen: false,
        windowMinimized: false,
        isActive: false,
    },
    resume: {
        open: false,
        windowName: "resume",
        previousPosition: { x: 0, y: 0 },
        previousSize: { width: 0, height: 0 },
        windowFullScreen: false,
        windowMinimized: false,
        isActive: false,
    },
    spotify: {
        open: false,
        windowName: "spotify",
        previousPosition: { x: 0, y: 0 },
        previousSize: { width: 0, height: 0 },
        windowFullScreen: false,
        windowMinimized: false,
        isActive: false,
    },
    cli: {
        open: false,
        windowName: "cli",
        previousPosition: { x: 0, y: 0 },
        previousSize: { width: 0, height: 0 },
        windowFullScreen: false,
        windowMinimized: false,
    }
  })

  return (
    <main onContextMenu={(e) => e.preventDefault()} >
      <Nav />

      <Dock windowStatus={windowStatus} setwindowStatus={setwindowStatus} />
      {windowStatus.github.open && <Github setwindowStatus={setwindowStatus} window={windowStatus.github} windowName={windowStatus.github.windowName} />}
      {windowStatus.notes.open && <Notes setwindowStatus={setwindowStatus} window={windowStatus.notes}  windowName={windowStatus.notes.windowName}/>}
      {windowStatus.resume.open && <Resume setwindowStatus={setwindowStatus} window={windowStatus.resume} windowName={windowStatus.resume.windowName} />}
      {windowStatus.spotify.open && <Spotify setwindowStatus={setwindowStatus} window={windowStatus.spotify} windowName={windowStatus.spotify.windowName}/>}
      {windowStatus.cli.open && <Cli setwindowStatus={setwindowStatus} window={windowStatus.cli} windowName={windowStatus.cli.windowName}/>}
    </main>
  )
}

export default App
