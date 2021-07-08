import React, { useEffect } from 'react'
import projectsData from '../data'

import ProjectMain from '../components/ProjectMain'

function Projects() {
    
    useEffect(()=>{
        
        let theme = localStorage.getItem('theme')
    
        if(theme == null ){
            return document.head.childNodes[21].href='../css/Default.css'
        }
        if(theme == 'purple' ){
            return document.head.childNodes[21].href='../newCss/Purple.css'
        }
        if(theme == 'green' ){
            return document.head.childNodes[21].href='../newCss/Green.css'
        }
        if(theme == 'blue' ){
            return document.head.childNodes[21].href='../newCss/Blue.css'
        }
    },[])
    

    return (
        <div>
            <ProjectMain/>
        </div>
    )
}

export default Projects
