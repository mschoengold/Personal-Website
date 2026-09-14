export default function Writing() {
  const writings = [
    {
      publication: 'Just Security',
      date: 'August 17, 2026',
      title:
        'Convening Before the Crisis: The Case for a Standing Public-Private National Security Forum',
      description:
        'Argues that Congress should establish a permanent forum where business and government leaders meet regularly on national security threats, rather than relying on ad-hoc crisis coordination, given that private companies now control much of the critical infrastructure and strategic technology the country depends on.',
      tags: ['National Security', 'Business', 'Congress'],
      url: 'https://www.justsecurity.org/152254/standing-table-business-national-security/',
      image:
        'https://www.justsecurity.org/wp-content/uploads/2026/08/GettyImages-2288364651.jpg',
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

  const tagFills = ['fill-amber', 'fill-azure', 'fill-violet'];

  return (
    <section id="writing" className="px-6 pt-14 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="tab fill-violet">
          <span className="tab-label">Writing</span>
        </div>

        <div className="slab">
          <h2 className="font-display text-2xl md:text-3xl text-ink mb-2">
            Public writing
          </h2>
          <p className="text-ink-muted mb-7">
            Essays and perspectives on defense, technology, and policy.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {writings.map((piece) => (
              <article key={piece.url} className="box-sm p-0 overflow-hidden flex flex-col">
                <a
                  href={piece.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-b-[2.5px] border-edge bg-tag-amber"
                  aria-label={`Read the article on ${piece.publication}`}
                >
                  <img
                    src={piece.image}
                    alt={piece.imageAlt}
                    className="w-full h-[175px] object-cover block"
                    loading="lazy"
                  />
                </a>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="tagline fill-amber">{piece.publication}</span>
                    <span className="kicker whitespace-nowrap">{piece.date}</span>
                  </div>

                  <h3 className="card-h mb-2.5">
                    <a
                      href={piece.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline decoration-2 underline-offset-2"
                    >
                      {piece.title}
                    </a>
                  </h3>

                  <p className="text-sm text-ink-muted leading-relaxed mb-4">
                    {piece.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {piece.tags.map((tag, i) => (
                      <span key={tag} className={`tagline ${tagFills[i % tagFills.length]}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
