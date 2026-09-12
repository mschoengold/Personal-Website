import { ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Project Alpha',
      tags: ['Operations', 'Strategy', 'Process Design'],
    },
    {
      title: 'Project Beta',
      tags: ['Analysis', 'Policy', 'Data Visualization'],
    },
  ];

  const writings = [
    {
      publication: 'Just Security',
      date: 'August 17, 2026',
      title: 'Convening Before the Crisis: The Case for a Standing Public-Private National Security Forum',
      description:
        'Argues that Congress should establish a permanent forum where business and government leaders meet regularly on national security threats, rather than relying on ad-hoc crisis coordination, given that private companies now control much of the critical infrastructure and strategic technology the country depends on.',
      tags: ['National Security', 'Business', 'Congress'],
      url: 'https://www.justsecurity.org/152254/standing-table-business-national-security/',
      image: 'https://www.justsecurity.org/wp-content/uploads/2026/08/GettyImages-2288364651.jpg',
      imageAlt: 'Just Security article header',
    },
    {
      publication: 'Atlantic Council · MENASource',
      date: 'April 1, 2026',
      title: 'The US should rethink Iran as a Southwest Asia challenge',
      description:
        'Argues that Washington should stop treating Iran primarily as a Middle East problem and instead view it as a Southwest Asia challenge, grouped with Pakistan and Afghanistan. That reframing reshapes how the U.S. should assess the evolving terrorism threat, nuclear nonproliferation, and competition with China across the region.',
      tags: ['Iran', 'National Security', 'South Asia'],
      url: 'https://www.atlanticcouncil.org/blogs/menasource/the-us-should-rethink-iran-as-a-southwest-asia-challenge/',
      image:
        'https://www.atlanticcouncil.org/wp-content/uploads/2026/03/2026-03-23T090950Z_801527016_RC27AKAHZHCN_RTRMADP_3_IRAN-CRISIS-banner.jpg',
      imageAlt: 'Atlantic Council MENASource article header',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 scroll-mt-20 border-t border-dark-400 bg-dark-800/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="eyebrow mb-4">Projects</span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-dark-50 mt-4">
            Public projects
          </h2>
          <p className="text-dark-200 mt-3 text-lg max-w-xl">
            A selection of projects I&apos;ve worked on or am currently developing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-dark-600/50 backdrop-blur-sm rounded-xl p-6 border border-dark-400 hover:border-primary-500 transition-all duration-300"
            >
              <h3 className="font-display text-xl font-medium text-dark-50 mb-4 group-hover:text-primary-300 transition-colors">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 font-mono text-[11px] tracking-wide text-primary-300 bg-primary-600/15 border border-primary-600/40 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Public Writing */}
        <div id="writing" className="scroll-mt-20">
          <div className="mb-10">
            <span className="eyebrow mb-4">Writing</span>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-dark-50 mt-4">
              Public writing
            </h2>
            <p className="text-dark-200 mt-3 text-lg max-w-xl">
              Essays and perspectives on defense, technology, and policy.
            </p>
          </div>

          <div className="space-y-6 mb-20">
            {writings.map((piece) => (
              <article
                key={piece.url}
                className="group grid md:grid-cols-[300px_1fr] rounded-2xl overflow-hidden border border-dark-400 bg-dark-600/50 backdrop-blur-sm hover:border-primary-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Header image (falls back to the gradient if it fails to load) */}
                <a
                  href={piece.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block min-h-[200px] md:min-h-full bg-gradient-to-br from-primary-700 to-dark-700"
                  aria-label={`Read the article on ${piece.publication}`}
                >
                  <img
                    src={piece.image}
                    alt={piece.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-dark-900/10 to-transparent" />
                  <span className="absolute bottom-3 left-3 font-mono text-[11px] uppercase tracking-widest text-dark-50 bg-dark-900/60 border border-white/15 px-2.5 py-1 rounded-md">
                    {piece.publication}
                  </span>
                </a>

                <div className="p-7 md:p-8">
                  <div className="font-mono text-xs tracking-wide text-accent-300">{piece.date}</div>
                  <h3 className="font-display text-2xl font-medium text-dark-50 mt-2 mb-3 leading-snug">
                    <a
                      href={piece.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors group-hover:text-primary-300"
                    >
                      {piece.title}
                    </a>
                  </h3>
                  <p className="text-dark-100 leading-relaxed mb-5">{piece.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {piece.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 font-mono text-[11px] tracking-wide text-primary-300 bg-primary-600/15 border border-primary-600/40 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={piece.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-300 hover:text-accent-200 transition-colors"
                  >
                    Read on {piece.publication.split(' · ')[0]}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-dark-200 mb-4">
            Looking for more detailed project information?
          </p>
          <a
            href="/private"
            className="inline-flex items-center gap-2 px-6 py-3 border border-dark-400 hover:border-accent-400 text-dark-100 hover:text-dark-50 rounded-lg transition-colors font-medium"
          >
            View Private Projects
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
