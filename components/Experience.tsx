type Sector = 'public' | 'private';

export default function Experience() {
  const experiences: {
    employer: string;
    title: string;
    detail?: string;
    period: string;
    sector: Sector;
    current?: boolean;
  }[] = [
    {
      employer: 'Palantir Technologies',
      title: 'Business Operations Lead',
      period: 'December 2025 - Present',
      sector: 'private',
      current: true,
    },
    {
      employer: 'Department of Defense',
      title: 'Acting Chief of Staff',
      detail:
        'Office of the Secretary of Defense, Office of the Assistant Secretary of Defense for Special Operations and Low-Intensity Conflict (ASD-SO/LIC)',
      period: 'December 2024 - December 2025',
      sector: 'public',
    },
    {
      employer: 'National Security Council',
      title: 'Director for Afghanistan',
      detail: 'The White House',
      period: 'August 2023 - October 2024',
      sector: 'public',
    },
    {
      employer: 'Department of State',
      title: 'Special Assistant',
      detail: 'Counselor of the U.S. Department of State',
      period: 'May 2022 - May 2023',
      sector: 'public',
    },
    {
      employer: 'Department of State',
      title: 'Team Lead',
      detail: 'Bureau of Conflict and Stabilization Operations',
      period: 'September 2020 - May 2022',
      sector: 'public',
    },
    {
      employer: 'Department of State',
      title: 'Deputy Director, Policy Advisor, and Strategic Planner',
      detail: 'Office of the Special Envoy for the Defeat of ISIS',
      period: 'September 2016 - August 2020',
      sector: 'public',
    },
    {
      employer: 'IBM',
      title: 'Client Representative/Sales Strategist',
      detail: 'International Business Machines, Summit Development Leadership Program',
      period: 'June 2015 - August 2016',
      sector: 'private',
    },
    {
      employer: 'Afghanistan Stabilization Initiative',
      title: 'Manager, Monitoring and Evaluation',
      detail: 'USAID/OTI-funded Program (Helmand, Afghanistan)',
      period: 'May 2011 - May 2012',
      sector: 'public',
    },
    {
      employer: 'Chemonics International',
      title: 'Associate',
      period: 'April 2009 - May 2011',
      sector: 'private',
    },
  ];

  const education = [
    {
      degree: 'Master of Science in Foreign Service',
      institution: 'Georgetown University',
      field: 'Walsh School of Foreign Service',
      year: '2015',
    },
    {
      degree: 'Master of Business Administration',
      institution: 'Georgetown University',
      field: 'McDonough School of Business',
      year: '2015',
    },
    {
      degree: 'Bachelor of Arts',
      institution: 'Northwestern University',
      field: 'Weinberg School of Arts and Sciences',
      year: '2008',
    },
  ];

  const affiliations = [
    'Member, Council on Foreign Relations',
    'President, Clark and Hinman Foundation',
  ];

  // Sector is encoded in the card colour: public sector azure, private sector amber.
  const sectorFill: Record<Sector, string> = {
    public: 'fill-azure',
    private: 'fill-amber',
  };

  return (
    <section id="experience" className="px-6 pt-14 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="tab fill-azure">
          <span className="tab-label">Experience</span>
        </div>

        <div className="slab">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-2">
            <h2 className="font-display text-2xl md:text-3xl text-ink">
              Professional Experience
            </h2>

            <div className="flex items-center gap-2">
              <span className="tagline fill-azure">Public sector</span>
              <span className="tagline fill-amber">Private sector</span>
            </div>
          </div>
          <p className="text-ink-muted mb-7">Most recent first.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experiences.map((exp) => (
              <div
                key={exp.employer + exp.period}
                className={`box-sm p-5 ${sectorFill[exp.sector]}`}
              >
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <span className="kicker text-ink">{exp.period}</span>
                  {exp.current && (
                    <span className="tagline bg-panel whitespace-nowrap">Current</span>
                  )}
                </div>

                <h3 className="card-h mb-1.5">{exp.employer}</h3>

                <p className="text-[14px] font-semibold text-ink leading-snug">
                  {exp.title}
                </p>

                {exp.detail && (
                  <p className="text-[13px] leading-snug text-ink-muted mt-1.5">
                    {exp.detail}
                  </p>
                )}
              </div>
            ))}
          </div>

          <h3 className="font-display text-xl md:text-2xl text-ink mt-10 mb-4">
            Education
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {education.map((edu) => (
              <div key={edu.degree} className="box-sm p-5">
                <div className="kicker text-ink">{edu.year}</div>
                <h4 className="card-h mt-2.5 mb-1.5">{edu.degree}</h4>
                <p className="text-[13.5px] leading-snug text-ink-muted">
                  {edu.institution} &middot; {edu.field}
                </p>
              </div>
            ))}
          </div>

          <div className="box-sm fill-violet mt-4 px-5 py-4">
            <span className="kicker text-ink">Professional Affiliations</span>
            <ul className="mt-2 space-y-1">
              {affiliations.map((item) => (
                <li key={item} className="text-[15px] font-semibold text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
