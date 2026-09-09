const projects = [
  {
    title: 'Florilegium',
    description:
      "My main project that I'm building and maintaining. A reading tracker built around intentionality, run on its own custom domain. Built with Next.js App Router and Server Components, PostgreSQL, custom JWT auth with email verification via Resend, and the Open Library API for book metadata.",
    tags: ['Next.js', 'PostgreSQL', 'TypeScript', 'TailwindCSS', 'CI/CD'],
    featured: true,
    available: true,
    live: 'https://florilegium.page',
    github: 'https://github.com/stevenlomon/florilegium',
  },
  {
    title: 'CML Massage & Wellness',
    description:
      'A real client project: migrating a local massage business from a bloated WordPress site with a pirated theme and 13 plugins to lean, custom-built PHP 8. Flat-file JSON data, structured JSON-LD for local SEO, and automated deploys via GitHub Actions over SFTP.',
    tags: ['PHP 8', 'CI/CD'],
    available: false,
    live: '#',
    github: 'https://github.com/stevenlomon/cml-massage-rebuild',
  },
  {
    title: 'Lock In Intention Timer',
    description:
      'Set what you intend to accomplish, lock in, and reflect when time is up. Built with useReducer and a finite state machine, drift-resistant timing and session persistence via localStorage.',
    tags: ['React', 'Vite', 'JavaScript'],
    available: true,
    live: 'https://stevenlomon.github.io/lock-in-intention-timer/',
    github: 'https://github.com/stevenlomon/lock-in-intention-timer',
  },
  {
    title: 'Vibe Salad',
    description:
      'A music discovery app powered by the Spotify API that serves up a shuffled mix of tracks with search and genre filtering. Built with token-based auth against Spotify\'s OAuth flow.',
    tags: ['TypeScript', 'Spotify API'],
    available: true,
    live: 'https://vibe-salad.vercel.app/',
    github: 'https://github.com/stevenlomon/vibe-salad',
  },
  {
    title: 'Linkin Park E-Store',
    description:
      'A full-stack e-commerce store for Linkin Park merchandise with product browsing, user accounts, checkout, and an admin dashboard. ',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    available: true,
    live: 'https://linkin-park-e-store.vercel.app/',
    github: 'https://github.com/stevenlomon/linkin-park-e-shop',
  },
  {
    title: 'MyPokéCollection',
    description:
      'A Pokemon card collection manager rebuilt from a Vite React SPA into Next.js to explore server components and the App Router. Browse, search, and organize cards via the PokeWallet API.',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    available: true,
    live: 'https://my-next-poke-collection.vercel.app/',
    github: 'https://github.com/stevenlomon/my-poke-collection',
  },
]

export default function Portfolio() {
  return (
    <>
      <hr className="section-divider" />
      <section id="portfolio" className="section">
        <h2 className="section-title">Things I've Built</h2>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.title} className={`project-card${project.featured ? ' project-card-featured' : ''}`}>
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <p className="project-card-description">{project.description}</p>
                <div className="project-card-actions">
                  {project.available !== false ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-link"
                    >
                      View Project
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </a>
                  ) : (
                    <span className="project-card-link project-card-link-disabled">
                      View Project (Coming Soon)
                    </span>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-github"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
