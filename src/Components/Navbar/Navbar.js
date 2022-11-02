import { Link } from 'react-router-dom';
import './Navbar.css';


export default function Navbar (){
    return(
        <div>
       
        <nav className="nav">      
        <Link to = {`/`}>
        <div className="logo">
            <p className="slogan">CH</p>
            <div className="key white"></div>
            <p className="slogan">O</p>
            <div className="key black"></div>
            <p className="slogan">P</p>
            <div className="key white"></div>
            <p className="slogan">I</p>
            <div className="key black"></div>
            <p className="slogan">A</p>
            <div className="key white"></div>
            <p className="slogan">RT</p>
        </div>
        </Link>
           <ul className="navbar">
            <li className="nav-link"></li>
            <li className="nav-link"></li>
            <li className="nav-link"></li>
            <li className="login"><img className="user" src="../images/svg-home/user.png" alt=""></img></li>
        </ul>
    </nav>
   
    </div>
    


    )



}