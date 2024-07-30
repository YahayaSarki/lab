import profilePic from "../profile_photos/yahaya3.jpg"


function Sidebar() {
    return (
        <>
        <div className='aside'>

<div className='sidebar'>
  <img 
    src={profilePic}
    size="100"
    alt="Dr Yahaya"
  />
  
  <div className='title'>Dr. Yahaya Ibrahim</div>

  <div className="bio">(<strong>Email:</strong> yisarki@gmail.com)</div>
    
  <div className='bio'>
    I'm a theoretical physicist and applied mathematician with research interest in both the fundamental and applications of 
    non-equilibrium statistical physics. The application areas of interest are active matter theory, biological systems and Artificial Intelligence (AI).
  </div>
  
  <div>
    <h4>Research Tools</h4>
    <p>perturbation analysis &#8226; information theory &#8226; monte-carlo simulations &#8226; molecular dynamics simulations &#8226; matched asymptotic expansions &#8226; stochastic simulations &#8226; partial differential equations &#8226; C++ and python programming languages</p>
  </div>
  
  <div>
    <h4>Current affiliation</h4>
    <p>
      Umaru Musa Yar'adua University, Nigeria.
    </p>
  </div>
  
  <div>
    <h4>Past affiliations</h4>
    <p>
      University of Bristol, UK and Universite de Montpellier, France
    </p>
  </div>     
</div>
  
</div>
        </>
    )
}


export default Sidebar;