import { NavLink } from "react-router-dom";
export const Service = ()=>{
    return(
        <>
        <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

              <h1>Expertise</h1>
              <div>
              <li>FULL-STACK-Development</li>
                <NavLink to="/contact"><button className="btn"> Connect Now</button></NavLink>
              <NavLink exact to="/services/fullstack" >Learn More </NavLink>
              </div>
              <div>
              <li>DSA</li>
              <NavLink to="/contact"><button className="btn"> Connect Now</button></NavLink>
              <NavLink exact to="/services/dsa" >Learn More </NavLink>
              </div>
              <div>
              <li>Front-end-Development</li>
              <NavLink to="/contact"><button className="btn"> Connect Now</button></NavLink>
              <NavLink exact to="/services/frontend" >Learn More </NavLink>
              </div>
              <div>
              <li>Backend-Devlopment</li>
              <NavLink to="/contact"><button className="btn"> Connect Now</button></NavLink>
              <NavLink exact to="/services/dsa" >Learn More </NavLink>
              </div>
             </div>
            <div className="hero-image">
              <img
                src="/images/network.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      
        
        
        </>
    )
};