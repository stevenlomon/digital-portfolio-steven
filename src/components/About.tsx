import portfolioPic from '../assets/steven-cropped.jpg'
import cs50Duck from '../assets/cs50-duck.png'
import UkiyoFrog from '../assets/ukiyo-e-frog.png'

export default function About() {
  return (
    <>
      <hr className="section-divider" />
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <div className="about-layout">
          <div className="about-photo-area">
            <img
              src={portfolioPic}
              alt="Me :))"
            />
            <div className="about-accents">
              <img
                src={cs50Duck}
                alt="CS50 rubber duck"
                className="about-accent-icon"
              />
              <img
                src={UkiyoFrog}
                alt="Ukiyo-e style frog"
                className="about-accent-icon"
              />
            </div>
          </div>

          <div className="about-text">
            <h3>From the classroom to the codebase</h3>
            <p>
              I started my career as a math teacher and librarian. Two jobs
              that will always hold a very dear and special place in my heart.
              Those parts of me love to come out in
              unexpected ways when coding and collaborating .
            </p>
            <p>
              My journey into development began with Harvard's CS50 which planted a very important seed.
              Now I'm a Full-Stack Developer in training at Medieinstitet. I love everything that the
              Full-Stack world has to offer and I do the best I humanly can to create intuitive and clean UX!
            </p>

            <div className="about-values">
              <div className="value-card">
                <p className="value-card-label">Clear Communication</p>
                <p>
                  Years of teaching taught me that the best code, like the best
                  lesson, explains itself.
                </p>
              </div>
              <div className="value-card">
                <p className="value-card-label">Teaching &amp; Learning</p>
                <p>
                  I will do both for as long as my lungs work. Life long learning; I'm a student of life
                </p>
              </div>
              <div className="value-card">
                <p className="value-card-label">First Principles</p>
                <p>
                  Understand the foundations before reaching for the framework.
                  Build from the ground up.
                </p>
              </div>
              <div className="value-card">
                <p className="value-card-label">Slow &amp; Steady</p>
                <p>
                  Iteration over perfection. Small steps, compounding over time.
                  The turtle always finishes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
