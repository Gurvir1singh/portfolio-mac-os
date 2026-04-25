import "./dock.scss"


function Dock({ windowStatus, setwindowStatus }) {
  return (
    <footer className='dock'>

      <div
        onClick={() => { setwindowStatus((state) => ({ ...state, github: { ...state.github, open: !state.github.open } })) }}
        className="icon github"><img src="/dock-icon/github.svg" alt="" /></div>
      <div
        onClick={() => { setwindowStatus((state) => ({ ...state, notes: { ...state.notes, open: !state.notes.open } })) }}
        className="icon note"><img src="/dock-icon/note.svg" alt="" /></div>
      <div
        onClick={() => { setwindowStatus((state) => ({ ...state, resume: { ...state.resume, open: !state.resume.open } })) }}
        className="icon pdf"><img src="/dock-icon/pdf.svg" alt="" /></div>
      <div
        onClick={() => {window.open("https://calendar.google.com/calendar/u/0/r", "_blank")}} className="icon calender"><img src="/dock-icon/calender.svg" alt="" /></div>
      <div
        onClick={() => { setwindowStatus((state) => ({ ...state, spotify: { ...state.spotify, open: !state.spotify.open } })) }}
        className="icon spotify"><img src="/dock-icon/spotify.svg" alt="" />
        </div>
      <div onClick={()=>{window.open("mailto:try.david@gmail.com")}} className="icon mail"><img src="/dock-icon/mail.svg" alt="" /></div>
      <div
        onClick={() => { window.open("https://www.linkedin.com/in/gurvirsingh01/", "_blank") }} className="icon link"><img src="/dock-icon/link.svg" alt="" /></div>
      <div
        onClick={() => { setwindowStatus((state) => ({ ...state, cli: { ...state.cli, open: !state.cli.open } })) }}
        className="icon cli"><img src="/dock-icon/cli.svg" alt="" /></div>

    </footer>
  )
}

export default Dock