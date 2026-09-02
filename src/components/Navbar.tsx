import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">Steven Lomon Lennartsson</a>
        <button
          className="navbar-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        <div className={`navbar-links${open ? ' open' : ''}`}>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
          <a href="#contact" onClick={() => setOpen(false)}>Get in Touch</a>
        </div>
      </div>
    </nav>
  )
}
