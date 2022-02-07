import "./topbar.scss";
import {Contacts, Mail} from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}) {
    return(
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">.Jonathan()</a>
                    <div className="itemContainer">
                        <Contacts className="icon"/>
                        <span>(915) 274-8824</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>john.perea00@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
