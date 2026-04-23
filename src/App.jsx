import "./app.scss"
import Dock from "./components/Dock"
import Nav from "./components/Nav"
import Github from "./components/windows/Github"
import Notes from "./components/windows/Note"

function App() {

 

  return (
  <main>
    <Nav/>
   
    <Dock/>
    {/* <Github/> */}
    <Notes/>
  </main>
  )
}

export default App
