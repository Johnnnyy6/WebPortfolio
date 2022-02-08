import "./works.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState} from "react";


export default function Works() {

  const [currentSlide,setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      img: "/assets/watchlist.png",
      title: "Movie WatchList",
      desc:"A react Website where the user can look up movies and add them to a watch list",
  },
  {
      id: "2",
      title: "Banking App",
      img: "/assets/bankingApp.jpg",
      desc:"A react Website where a user can set up a budget and manage their expenses",
  },
  {
      id: "3",
      title: "Hackathons",
      img: "/assets/winner.png",
      desc:"A description of some of the hackathons I've participated in",
  },
  {
    id: "4",
    title: "Personal Website",
    img: "/assets/starpp.png",
    desc:"A react website built to showcase my work and who I am to others.(responsive)",
  },
 
];
  const handleClick = (way) => {
  way === "left"
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d)=>(
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.img} alt=""/>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src="/assets/MSD.jpg" alt="" />
              </div>
            </div>
            </div>
            ))}
      </div>
      <ArrowBackIosIcon className=" arrow left" alt = "" onClick={()=>handleClick("left")}/>
      <ArrowForwardIosIcon className=" arrow right" alt = "" onClick={()=>handleClick()}/>
    </div>
  )
}
