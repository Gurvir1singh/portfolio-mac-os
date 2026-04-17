import "./dock.scss"


function Dock() {
  return (
    <footer className='dock'>
      
        <div className="icon github"><img src="/dock-icon/github.svg" alt="" /></div>
        <div className="icon note"><img src="/dock-icon/note.svg" alt="" /></div>
        <div className="icon pdf"><img src="/dock-icon/pdf.svg" alt="" /></div>
        <div className="icon calender"><img src="/dock-icon/calender.svg" alt="" /></div>
        <div className="icon spotify"><img src="/dock-icon/spotify.svg" alt="" /></div>
        <div className="icon mail"><img src="/dock-icon/mail.svg" alt="" /></div>
        <div className="icon link"><img src="/dock-icon/link.svg" alt="" /></div>
        <div className="icon cli"><img src="/dock-icon/cli.svg" alt="" /></div>
     
    </footer>  
  )
}

export default Dock