import React from "react";
import { useHistory } from "react-router-dom";
import projectsData from '../data'

function Works() {
  const history=useHistory()

  const showAllData=()=>{
    return projectsData.map((el,index)=>{
      console.log(el.title)
      return (
        <div onClick={()=>history.push({
          pathname:`/project/${el.id}`,
          data:el
        })}>
            <div className="post">
              <img className="thumbnail" src={el.image}/>
              <div className="post-preview">
                <h6 className="post-title">{el.title}</h6>
              </div>
            </div>
          </div>
      )
    })
  }

  return (
    <section className="s1">
      <div className="main-container">
        <h3 style={{textAlign: "center"}}>work</h3>

        <div className="post-wrapper">
          {showAllData()}
        </div>
      </div>
    </section>
  );
}

export default Works;
// <div className="post">
//               <img className="thumbnail" src="./images/dash.jpg" />
//               <div className="post-preview">
//                 <h6 className="post-title">Laboratory Management System</h6>
//                 <p className="post-intro">
//                   Designed built & mantained a the lab managment system for FOI
//                   Laboratories
//                 </p>
//                 <a href="post.html">Read More</a>
//               </div>
//             </div>
//           </div>