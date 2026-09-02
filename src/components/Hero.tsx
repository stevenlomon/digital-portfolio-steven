import turtleImg from '../assets/vibe-turtle.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-eyebrow">Hi! :)) I'm</p>
          <h1 className="hero-title">Steven Lomon Lennartsson</h1>
          <p className="hero-description">
            Full-Stack hatchling, lover of everything music and book related, and hobby gardener growing the garden that is{' '}
            <em>Florilegium</em>
          </p>
          <p className="hero-description">
            I build things for the web slowly,
            deliberately, and with care. Intentional, grounded, human.
          </p>
          <a href="#portfolio" className="hero-cta">
            View My Work
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
        <div className="hero-image">
          <img
            src={turtleImg}
            alt="Vibe Turtle — a cute green turtle mascot juggling books, vinyl records, and a retro computer"
            width="420"
            height="300"
          />
        </div>
      </div>
    </section>
  )
}
