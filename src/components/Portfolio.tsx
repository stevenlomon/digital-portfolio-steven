const projects = [
  {
    title: 'Florilegium',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['Next.js', 'PostgreSQL', 'TypeScript'],
    emoji: '🌿',
    link: '#',
  },
  {
    title: 'Linkin Park E-Store',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.',
    tags: ['React', 'E-Commerce'],
    emoji: '🎸',
    link: '#',
  },
  {
    title: 'Vibe Salad',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate.',
    tags: ['React', 'API'],
    emoji: '🥗',
    link: '#',
  },
  {
    title: 'Pokémon Collector',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.',
    tags: ['React', 'PokéAPI'],
    emoji: '⚡',
    link: '#',
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
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="project-card-image">
                {project.emoji}
              </div>
              <div className="project-card-body">
                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>
                <span className="project-card-link">
                  View Project
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
