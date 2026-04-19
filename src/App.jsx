import "./app.scss"
import Dock from "./components/Dock"
import Nav from "./components/Nav"
import MacWindow from "./components/windows/MacWindow"
function App() {

 

  return (
  <main>
    <Nav/>
    <MacWindow></MacWindow>
    <Dock/>
  </main>
  )
}

export default App
