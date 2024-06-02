import { Link } from "react-router-dom";

function Header(){
    return (        
        <>
        <div className="header">
          <h1 className='mainheader'>Statistical Physics of Active &amp; Complex Systems (SPACS) Research Group</h1>
        </div>

        <div className='navigation'>
          <div className='nav-item'>
            <a href="/">Home</a>
          </div>
          <div className='nav-item'>
            <Link to="publications">Publications</Link>
          </div>
          <div className='nav-item'>
            <Link to="/people">People</Link>
          </div>
          <div className='nav-item'>
            <Link to="/teaching">Teaching</Link>
          </div>
          <div className='nav-item'>
            <Link to="software">Software</Link>
          </div>
        </div> 
        </>
    )
}

export default Header;