import React from "react";
import {useHistory,useLocation} from "react-router-dom";

function ProjectMain(props) {
  const history=useHistory()
  const location=useLocation()
  console.log(location)
  const {title,image,about,technologies,screenShoots}=location.data
  return (
    <section className="s1" style={{minHeight:'100vh',padding:'50px 0'}}>
      <div className="main-container">
        <div className="project-wrapper">
          <div className="navProject-wrapper">
            <a onClick={()=>history.push('/')} style={{cursor:"pointer"}}>
              <div className="dots-wrapper" >
                <div id="dot-1" className="browser-dot"></div>
                <div id="dot-2" className="browser-dot"></div>
                <div id="dot-3" className="browser-dot"></div>
              </div>
            </a>

            <ul id="navigation">
              <li>
                <a onClick={()=>history.push('/')} style={{cursor:"pointer"}}>Home</a>
              </li>
            </ul>
          </div>

          <div className="projectGreeting-wrapper">
            <h1>{title}</h1>
          </div>

          <div className="projectImg-container">
			      <img src={image}/>
		      </div>
          <div className="detail-section">
          <p>{about}
          <br/>
          <br/>
          </p>
         
          
          
          
      
          <h5>Technologies:</h5>
          {technologies.map((el,index)=>{
            return (
              <ul key={index}>
            <li>- {el}</li>
          </ul>
            )
          })}
          
          <div className="ss-section">
          <h4>screen shoots</h4>
          <div className="all-images">
          {screenShoots.map((el,index)=>{
            return(
              <div className="group">
          <h5>{el.name}</h5>
          <div className="images">
            <img src={el.image}/>
          </div>
          </div>
            )
          })}

          
          
          
          

          </div>
          </div>
          </div>
		  </div>
      </div>
    </section>
  );
}

export default ProjectMain;
