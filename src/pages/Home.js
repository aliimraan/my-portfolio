import React,{useState,useEffect} from 'react'
import Main from '../components/Main'
import About from '../components/About'
import Works from '../components/Works'
import {Contact} from '../components/Contact'


function Home() {
    const [theme,setTheme]=useState('')
    const [stylePath,setStylePath]=useState('')

  const themeHandler=(color)=>{
    localStorage.setItem('theme',color)
    setTheme(color)
  }
  const setColor=()=>{
    theme==='light' && setStylePath('./css/Default.css')
    theme==='blue' && setStylePath('./css/Blue.css')
    theme==='green' && setStylePath('./css/Green.css')
    theme==='purple' && setStylePath('./css/Purple.css')
  }
  useEffect(()=>{
    let theme = localStorage.getItem('theme')

    if(theme == null){
        setTheme('light')
    }else{
        setTheme(theme)
    }

    document.head.childNodes[21].href=stylePath

      setColor()
     
  

    
  },[stylePath,theme])


    return (
        <div>
            <Main themeHandler={themeHandler}/>
            <About/>
            <Works/>
            <Contact/>
        </div>
    )
}

export default Home
