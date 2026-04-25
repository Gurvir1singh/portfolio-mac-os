import React from 'react'
import GithubData from '../../assets/github.json'
import MacWindow from './MacWindow'
import "./Github.scss"



const GitCard = ({data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" }}) => {
    return <div className="card">
       
            <img src={data.image} alt={data.title} />
      
        <div className="card-content">
            <h1 className='title'>{data.title}</h1>
            <h4 className='description'>{data.description}</h4>
            <div className="tags">
                {data.tags.map((tag,index)=>{
                   return <p key={index} className='tag'>{tag}</p>
                })}
            </div>
            <div className="links">
                <a className="repoLink link" href={data.repoLink}><i className="ri-git-repository-line"></i>Repo</a>
                <a className="repoLink link" href={data.demoLink}><i className="ri-share-box-line"></i>Demo</a>
            </div>

        </div>
    </div>


}
function Github( {setwindowStatus,window,windowName} ) {
    return (
        <MacWindow setwindowStatus={setwindowStatus} window={window} windowName={windowName}>
            <div className="cards">
                {GithubData.map((item, index) => {
                    return <GitCard key={index} data={item} />
                })}
            </div>
        </MacWindow>
    )
}

export default Github