import profilePic from "../profile_photos/yahaya2.jpg"


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
    I'm a theoretical physicist and applied mathematician with research interests in both the fundamentals and applications of 
    non-equilibrium statistical physics. I'm particularly interested in active matter, complex systems and the symbiotic relationship between statistical physics and Artificial Intelligence (AI).
  </div>
  
  <div>
    <h4>Research Tools</h4>
    <p>Perturbation analysis, information theory, monte-carlo simulations, molecular dynamics simulations, matched asymptotic expansions, stochastic simulations, partial differential equations, C++ and Python programming languages.</p>
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