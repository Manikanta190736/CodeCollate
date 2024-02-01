import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

              <h1>Why Choose Me </h1>
              <p>
                Expertise:Mastered C++ by solving 300+ LeetCode problems, showcasing problem-solving skills and algorithmic expertise.Seamlessly translating that knowledge into real-world applications through a MERN stack project
              </p>
              <p>
                Reliability: My aptitude for swiftly grasping new concepts sets me apart as a quick learner. 
                I thrive on absorbing knowledge and swiftly adapting to emerging technologies, which proves to be a valuable asset in the constantly evolving realm of software development.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
};