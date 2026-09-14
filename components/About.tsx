export default function About() {
  const stats = [
    { label: 'Years experience', value: '15+', fill: 'fill-amber' },
    { label: 'Exec branch agencies', value: '4', fill: 'fill-azure' },
    { label: 'Country deployments', value: '7+', fill: 'fill-sage' },
    { label: 'Cavities', value: '2', fill: 'fill-violet' },
  ];

  return (
    <section id="about" className="px-6 pt-14 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="tab">
          <span className="tab-label">About</span>
        </div>

        <div className="slab">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
            <div>
              <h2 className="font-display text-2xl md:text-3xl leading-tight text-ink mb-5 text-balance">
                At the seam of security, diplomacy, and technology
              </h2>

              <div className="space-y-4 text-ink-muted leading-relaxed">
                <p className="text-base text-ink">
                  I&apos;ve spent my career helping leaders and teams navigate hard problems at the seam between national security, diplomacy, and technology, then translating that complexity into decisions, momentum, and outcomes.
                </p>
                <p>
                  I&apos;m currently a Business Operations Lead at <strong className="text-ink font-bold">Palantir Technologies</strong>, where I help deliver and scale software for the U.S. national security enterprise and the broader defense industrial base.
                </p>
                <p>
                  Before Palantir, I worked at the highest levels of the U.S. government: as Acting Chief of Staff in the <strong className="text-ink font-bold">Office of the Secretary of Defense</strong> for Special Operations and Low-Intensity Conflict, as a Director at the White House <strong className="text-ink font-bold">National Security Council</strong>, and in several roles at the <strong className="text-ink font-bold">State Department</strong>, including on the Global Coalition to Defeat ISIS.
                </p>
                <p>
                  I began closer to the ground, managing a USAID program in Helmand Province, Afghanistan, an experience that shaped how I think about strategy, incentives, and what implementation really requires.
                </p>
                <p>
                  I hold dual graduate degrees from Georgetown University (MSFS and MBA) and am a Council on Foreign Relations Term Member. Outside of work, I&apos;m a student of history and technology, and a devoted husband and dad.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              {stats.map((stat) => (
                <div key={stat.label} className={`box-sm p-4 ${stat.fill}`}>
                  <div className="font-display text-3xl leading-none text-ink">
                    {stat.value}
                  </div>
                  <div className="kicker text-ink mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
