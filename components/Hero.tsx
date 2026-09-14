export default function Hero() {
  const facts = [
    { label: 'Now', value: 'Palantir Technologies' },
    { label: 'Before', value: 'DoD · NSC · State' },
    { label: 'Education', value: 'Georgetown · Northwestern' },
    { label: 'Member', value: 'Council on Foreign Relations' },
  ];

  return (
    <section className="px-6 pt-12 pb-4">
      <div className="max-w-6xl mx-auto box p-0 overflow-hidden">
        <div className="grid lg:grid-cols-[1.5fr_1fr]">
          <div className="fill-amber p-8 md:p-11 lg:border-r-3 border-edge border-b-3 lg:border-b-0">
            <span className="tagline">
              Palantir Technologies &middot; Washington, DC
            </span>

            <h1 className="font-display text-5xl md:text-6xl leading-[0.94] text-ink mt-6 mb-5">
              Michael
              <br />
              Schoengold
              <br />
              Beatty
            </h1>

            <p className="font-mono text-xs md:text-[12.5px] font-semibold text-ink mb-6">
              Business Operations Lead&nbsp;&nbsp;/&nbsp;&nbsp;National Security Strategist
            </p>

            <p className="text-[17px] leading-relaxed font-medium text-ink max-w-xl mb-8">
              I work at the intersection of national security and technology. At Palantir,
              I focus on defense solutions for the Department of Defense and the broader
              defense industrial base.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#about" className="btn-b">
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#contact" className="btn-b fill-violet">
                Get in touch
              </a>
            </div>
          </div>

          <div className="p-6 md:p-7 grid gap-3 content-center">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="box-sm px-4 py-3 flex items-center justify-between gap-3"
              >
                <span className="kicker">{fact.label}</span>
                <span className="text-sm font-bold text-ink text-right">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
