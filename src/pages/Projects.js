//import fields1 from "./assets/ss1.png"
import fieldssw from "../assets/sw.png"
import slenderSwimmer from "../assets/shape_dependence.jpg"
import activeParcticle from "../assets/ptps_contour.jpg"
//import ribosomeTranslation from "../assets/ribosome_translation_with_decay.png"
//import ribosomeTranslationFig from "../assets/gem_fig.png"
import tasepDecay from "../assets/tasep_decay_fig1.jpg"



function Projects(){
    return (
        <div>
        
        <h2>Research</h2>
        {/* Biophysical modelling of gener expression */}
        <section className='flex-section'>
          <h4>
            Biophysical modelling of gene expression 
          </h4>
          {/*<img src={ribosomeTranslationFig} alt="Rbiosome translation"  /> */}
          <p>
            Gene translation is a complex process in which the genetic information encoded in DNA is transcribed into messenger RNA (mRNA) and then translated into proteins. In the cytoplasm, ribosomes read the mRNA in groups of three nucleotides called codons. Transfer RNA (tRNA) molecules ferry amino acids corresponding to each codon to the ribosome, where they are joined together to form a polypeptide chain. 
          </p>
          {/*<img src={ribosomeTranslation} alt="Rbiosome translation"  />*/}
          <img id="lateral_img" src={tasepDecay} alt="TASEP decay. Theory and simulations." />
          <p>
            Biophysical modeling of gene translation involves using mathematical and computational approaches to understand the physical principles underlying the process. Specifically, we model the one dimensional ribosome translation of the messenger RNA (mRNA) as a Totally Asymmetric Simple Exclusion Process (TASEP) with quenched hopping rates disorder and finite decay rate of the chain.
          </p>

          <ul>
            <li>
                <strong>Ibrahim, Y.</strong>, Dorignac, J., Geniet, F., Chevalier, C., Walter, J.-C., Walliser, N.-O., Pameggiani, A., & Palmeri, J. (2023). Chain decay and rates disorder in the totally asymmetric simple exclusion process (arXiv:2310.00329). arXiv. http://arxiv.org/abs/2310.00329
            </li>
            <br/>
            <li>
                Chevalier, C., Dorignac, J., <strong>Ibrahim, Y.</strong>, Choquet, A., David, A., Ripoll, J., Rivals, E., Geniet, F., Walliser, N.-O., & Palmeri, J. (2023). Physical modeling of ribosomes along messenger RNA: Estimating kinetic parameters from ribosome profiling experiments using a ballistic model. PLOS Computational Biology, 19(10), e1011522.
            </li>
          </ul>
  
        </section>
  
        <section className='flex-section'>
          <h4>Active particle dynamics near hard surfaces</h4>
          <img src={fieldssw} alt='field distortion near hard wall' />
          <p> 
            We are also interested in the hydrodynamic and potential disturbance fields interactions of the active particles with confining boundaries/walls. The active particles show nontrivial dynamics in the presence of confining walls. For different system parameters, they could rebound, slide or stay stationary within the wall vicinity. 
          </p>
        <ul >
          <li> 
            <strong>Ibrahim, Yahaya</strong>, and Tanniemola B. Liverpool. <q>How walls affect the dynamics of self-phoretic microswimmers</q>. <em>The European Physical Journal Special Topics 225.8-9 (2016): 1843-1874</em>.
          </li>
          <br />
          <li>
            <strong>Y. Ibrahim</strong>, T. B. Liverpool <a target="_blank" rel="noreferrer" href="http://iopscience.iop.org/article/10.1209/0295-5075/111/48008"><q>The dynamics of a self-phoretic Janus swimmer near a wall</q>.</a><em> EPL <strong>111</strong> (2015) 48008.</em>
            </li>
        </ul>
        
        
        </section>
  
        <section className='flex-section'>
          <h4>Shape dependence of the active particle dynamics</h4> 
          <img src={slenderSwimmer} alt="slender particle propulsion" />
          <p>
            Among the commonly self-propelled systems widely studied experimentally includes bi-metallic nano-rods. To better understand the role of the active particle shape, we theoretically study the self-propulsion of a thin (slender) colloid driven by asymmetric chemical reactions on its surface at vanishing Reynolds number. Using the method of matched asymptotic expansions, we obtain the colloid self-propulsion velocity as a function of its shape and surface physicochemical properties. The mechanics of self-phoresis for rod-like swimmers has a richer spectrum of behaviors than spherical swimmers due to the presence of two small length scales, the slenderness of the rod and the width of the slip layer. This leads to subtleties in taking the limit of vanishing slenderness. As a result, even for very thin rods, the distribution of curvature along the surface of the swimmer, namely, its shape, plays a surprising role in determining the efficiency of propulsion. We find that thin cylindrical self-phoretic swimmers with blunt ends move faster than thin prolate spheroid shaped swimmers with the same aspect ratio.
          </p>

          <ul>
            <li>
              <strong>Ibrahim, Y.,</strong> Golestanian, R., & Liverpool, T. B. (2018). Shape dependent phoretic propulsion of slender active particles. Physical Review Fluids, 3(3), Article 3.</li>
          </ul>

  
        </section>
  
        <section className='flex-section'>

          <h4>Micro and nano-scale autonomous propulsion</h4>
          <p>
            <em>Active particles</em> are micro and nano-scale particles capable of autonoomous motion in aqueous solution. They are usually powered by chemical reactions. These systems could serve as toy models for probing non-equilibrium statistical mechanical theories. They also have potential applications in medicine (e.g. as drug delivery systems). 
          </p>

        <img id="lateral_img" src={activeParcticle} alt='solute field' /> 

      <p>
        Guided by experimental data, our research involve developing mathematical models, their analytic solution and/or simulations to understand the essential physics of these systems. Our goal is to aid both our fundamental understanding of non-equilibrium processes and nano-scale motor design paradigm.
      </p>
    <ul>
     <li>
        <strong>Y. Ibrahim</strong>, R. Golestanian, and T. B. Liverpool <q>Multiple phoretic mechanisms in the self-propulsion in Pt-Insulator Janus swimmer</q>. <em>J. Fluid Mech. (2017), vol. 828, pp. 318--352.</em>
      </li>
      <br />
      <li>
        S. Ebbens, D. A. Gregory, G. Dunderdale, J. R. Howse, <strong>Y. Ibrahim</strong>, T. B. Liverpool and R. Golestanian <a target="_blank" rel="noreferrer" href="http://iopscience.iop.org/article/10.1209/0295-5075/106/58003/meta"><q>Electrokinetic effects in catalytic Pt-Insulator Janus swimmers</q>.</a> <em>EPL <strong>106</strong> (2014)58003.</em>
      </li>
    </ul>
  
        </section>

        </div>
    )
}

export default Projects;