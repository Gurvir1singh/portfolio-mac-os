import React, { useRef } from 'react'
import Terminal from 'react-console-emulator'
import MacWindow from './MacWindow'
import "./cli.scss"

function Cli({windowName, setwindowStatus,window}) {
  const terminalRef = useRef(null)

  const commands = {
    
    about: {
      description: 'Learn about David',
      fn: () => {
        return `
████████████████████████████████████████████
  David - Full Stack Developer
████████████████████████████████████████████

Welcome to my portfolio! I'm a passionate developer
with expertise in modern web technologies and
full-stack development. I love building scalable
applications and solving complex problems.

Experience: 3+ years in Full Stack Development
Focus: React, Node.js, Python, and Cloud Technologies

Type 'projects' to see my work
Type 'skills' to view my tech stack
Type 'contact' for ways to reach me
        `.trim()
      }
    },
    projects: {
      description: 'View portfolio projects',
      fn: () => {
        return `
📁 Portfolio Projects:

1. Scheds - Course Schedule Generator
   Tech: ASP.NET Core, C#, SQL Server, Bootstrap
   
2. FinTrack - Personal Finance Dashboard
   Tech: React, TypeScript, Chart.js, MongoDB, Express
   
3. SecureAuth - Backend Identity Service
   Tech: Python, Django, PostgreSQL, Docker, Redis
   
4. ChatStream - Real-time Messaging App
   Tech: Vue.js, Firebase, Socket.io
   
5. TerminalX - CLI Productivity Tool
   Tech: Rust, Tokio, System APIs

Type 'projects [number]' to see details about a specific project
        `.trim()
      }
    },
    skills: {
      description: 'View technical skills',
      fn: () => {
        return `
💻 Technical Skills:

Frontend:
  • React.js, Vue.js, HTML5, CSS3/SCSS
  • TypeScript, JavaScript, Tailwind CSS
  • Redux, React Hooks, Component Architecture

Backend:
  • Node.js, Express, Python, Django
  • ASP.NET Core, C#, Rust
  • RESTful APIs, Microservices

Databases:
  • SQL Server, PostgreSQL, MongoDB
  • Redis, Firebase

DevOps & Tools:
  • Docker, Git, GitHub, CI/CD
  • AWS, Azure, Linux/Mac

Other:
  • Agile/Scrum, Unit Testing, Web Security
        `.trim()
      }
    },
    contact: {
      description: 'Get contact information',
      fn: () => {
        return `
📧 Get in Touch:

Email: david@example.com
GitHub: github.com/davidportfolio
LinkedIn: linkedin.com/in/daviddev
Portfolio: daviddev.com

Feel free to reach out for opportunities, collaborations,
or just to chat about tech! 🚀
        `.trim()
      }
    },
    whoami: {
      description: 'Display current user',
      fn: () => 'David | Full Stack Developer'
    },
    resume: {
      description: 'View resume/CV',
      fn: () => {
        return `
📄 Resume:

EXPERIENCE:
  Senior Developer @ TechCorp (2022-Present)
    • Led development of 5+ full-stack applications
    • Mentored junior developers
    • Improved application performance by 40%
    
  Full Stack Developer @ StartupXYZ (2021-2022)
    • Built scalable microservices
    • Implemented CI/CD pipelines
    • Reduced API response time by 60%

EDUCATION:
  Bachelor's in Computer Science
  University of Technology (2021)

CERTIFICATIONS:
  • AWS Solutions Architect
  • React Professional
  • Docker & Kubernetes

Type 'projects' to view my work samples
        `.trim()
      }
    },
 
  }

  const welcomeMessage = `
+==================================================+
|                                                  |
|   Welcome to David's Portfolio Terminal 🖥️      |
|                                                  |
| I'm a full-stack developer passionate about      |
| building beautiful and functional applications    |
|                                                   |
| Type 'help' to see available commands             |
|                                                   |
+==================================================+
`


  return (
    <MacWindow  setwindowStatus={setwindowStatus} window={window} windowName={windowName} width='60vw' height="50vh" >
      <div className="cli-window">

        <Terminal
          ref={terminalRef}
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={'David@server:~$'}
promptLabelStyle={{"color":"yellowgreen"}}
inputTextStyle={{"color":"orange"}}
autoFocus={true}
        />
      </div>
    </MacWindow>
  )
}

export default Cli