import React from 'react'
import GithubData from '../../assets/github.json'
import MacWindow from './MacWindow'
import "./Github.scss"



const GitCard = ({data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" }}) => {
    return <div className="card">
     
            <img src={data.image} alt={data.title} />
  
        <div className="card-content">
            <h1>{data.title}</h1>
            <h4>{data.description}</h4>
            <div className="tags">
                {data.tags.map((tag,index)=>{
                   return <p key={index} className='tag'>{tag}</p>
                })}
            </div>
            <div className="links">
                <div className="repoLink link">{data.repoLink}</div>
                <div className="repoLink link">{data.demoLink}</div>
            </div>

        </div>
    </div>


}
function Github() {
    return (
        <MacWindow>
            <div className="cards">
                {GithubData.map((item, index) => {
                    return <GitCard key={index} data={item} />
                })}
            </div>
        </MacWindow>
    )
}

export default Github