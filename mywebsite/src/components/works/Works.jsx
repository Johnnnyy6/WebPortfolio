import "./works.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Works() {

  const data = [
    {
      id: 1,
      title: "Movie WatchList",
      img: "/assets/watchlist.png",
      desc:"A react Website where the user can look up movies and add them to a watch list"
  },
  {
      id: 2,
      title: "Banking App",
      img: "/assets/bankingApp.jpg",
      desc:"A react Website where a user can set up a budget and manage their expenses"
  },
  {
      id: 3,
      title: "Hackathons",
      img: "/assets/winner.png",
      desc:"A description of some of the hackathons I've participated in"
  },
  {
      id: 4,
      title: "Personal Website",
      img: "/assets/starpp.png",
      des:"A react website built to showcase my work and who I am to others."
  },
];
  return (
    <div className="works" id="works">
      <div className="slider">
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
                <img src="/assets/grail1day.png" alt="" />
              </div>
            </div>
            </div>
            ))}
      </div>
      <ArrowBackIosIcon className=" arrow left"/>
      <ArrowForwardIosIcon className=" arrow right"/>
    </div>
  )
}
