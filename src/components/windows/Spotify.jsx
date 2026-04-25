import React from 'react'
import MacWindow from "./MacWindow"
import "./spotify.scss"

function Spotify({ setwindowStatus,window,windowName}) {
    return (
        <MacWindow setwindowStatus={setwindowStatus} window={window} windowName={windowName} width='30vw' height="40vh" >
            <div className="spotify-window">

                <iframe data-testid="embed-iframe" style={{ "borderRadius": "12px" }} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9WDOjoils23?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWindow>
    )
}

export default Spotify