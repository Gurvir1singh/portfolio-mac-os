import "./app.scss"
import Dock from "./components/Dock"
import Nav from "./components/Nav"
import Github from "./components/windows/Github"
import Notes from "./components/windows/Note"
import Resume from "./components/windows/Resume"

function App() {

 

  return (
  <main>
    <Nav/>
   
    <Dock/>
    <Github/>
    <Notes/>
    <Resume/>
  </main>
  )
}

export default App
