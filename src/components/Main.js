import React from "react";
import {useHistory} from 'react-router-dom'

function Main({themeHandler}) {
  const history=useHistory()
 
  return (
    <section className="s1">
      <div className="main-container">
        <div className="greeting-wrapper">
          <h1>Hi, I'm Ali Imaran</h1>
        </div>

        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <a onClick={()=>history.push('/')} style={{cursor:"pointer"}}>
              <div className="dots-wrapper" >
                <div id="dot-1" className="browser-dot"></div>
                <div id="dot-2" className="browser-dot"></div>
                <div id="dot-3" className="browser-dot"></div>
              </div>
            </a>

            <ul id="navigation">
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="left-column">
            <img id="profile_pic" src='./images/Dennis.jpg'/>
            <h5 style={{textAlign: "center",lineHeight:"0"}}>
              Personalize Theme
            </h5>

            <div id="theme-options-wrapper">
              <div data-mode="light" id="light-mode" className="theme-dot" onClick={()=>themeHandler('light')}></div>
              <div data-mode="blue" id="blue-mode" className="theme-dot" onClick={()=>themeHandler('blue')}></div>
              <div data-mode="green" id="green-mode" className="theme-dot" onClick={()=>themeHandler('green')}></div>
              <div data-mode="purple" id="purple-mode" className="theme-dot" onClick={()=>themeHandler('purple')}></div>
            </div>
          </div>

          <div className="right-column">
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tr" className="corner"></div>
                <h3>What I Do</h3>
                <p>
                  I am a Fullstack Developer and i love to build webApps. 
                </p>
                <div id="corner-br" className="corner"></div>
                <div id="corner-bl" className="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
