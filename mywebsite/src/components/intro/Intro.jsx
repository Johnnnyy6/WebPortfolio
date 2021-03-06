import "./intro.scss";
import { init } from 'ityped'
import { useEffect, useRef } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed: 45,
      strings: ['Studying computer Science', 'Aspiring Software Developer!' ] ,
    });

  },[])
  
  return(
     <div className='intro' id="intro">
       <div className="left">
         <div className="imgContainer">
           <img src="assets/starpp.png" alt = ""/>
         </div>
       </div>
       <div className="right">
         <div className="wrapper">
           <h2>Hi there, I'm</h2>
           <h1>Jonathan Perea</h1>
           <h3>A student from El Paso, Texas</h3>
           <h3><span ref = {textRef}></span></h3>
         </div>
         <a href="#portfolio">
           <ArrowDownwardIcon className="icon" />
         </a>
       </div>
     </div> 

  )
}
