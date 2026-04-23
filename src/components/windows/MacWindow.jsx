import { Rnd } from "react-rnd"
import "./MacWindow.scss"

function MacWindow({children,width,height}) {
  return (
    <Rnd 
    default={{
      width:"40vw",
      height:"60vh",
      x:400,
      y:200,

    }}>
      <div className="window" width={width} height={height}>
        <div className="title-bar">
            <div className="three-dot">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="title"><p>David  -  zsh</p></div>
        </div>
        <div className="window-content">{children}</div>
      </div>
    </Rnd>
  )
}

export default MacWindow