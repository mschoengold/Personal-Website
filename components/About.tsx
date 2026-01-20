export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-400">
          About Me
        </h2>
        
        <div className="space-y-6 text-dark-100 leading-relaxed">
          <p className="text-lg">
            I've spent my career helping leaders and teams navigate hard problems at the seam between national security, diplomacy, and technology—then translating that complexity into decisions, momentum, and outcomes.
          </p>
          <p className="text-lg">
            I'm currently a Business Operations Lead at <strong>Palantir</strong> Technologies, where I focus on building and scaling digital operational systems for the U.S. national security enterprise.
          </p>
          <p className="text-lg">
            Before Palantir, I worked at the highest levels of the U.S. government. In the <strong>Office of the Secretary of Defense</strong> for Special Operations and Low-Intensity Conflict, I helped run a fast-moving front office and served as Acting Chief of Staff, coordinating initiatives that demanded speed, precision, and collaboration across the Department and interagency.
          </p>
          <p className="text-lg">
            At the White House <strong>National Security Council</strong> (NSC), I directed a South Asia portfolio spanning counterterrorism, hostage issues, and diplomacy—where the work often came down to building alignment quickly and executing under uncertainty.
          </p>
          <p className="text-lg">
            At the <strong>State Department</strong>, I supported senior leadership and worked on the Global Coalition to Defeat ISIS, strengthening multilateral coordination in the face of evolving threats.
          </p>
          <p className="text-lg">
            I began closer to the ground: managing a USAID program in Helmand Province, Afghanistan—an experience that shaped how I think about strategy, incentives, and what implementation really requires.
          </p>
          <p className="text-lg">
            That throughline—coalition building, disciplined execution, and calm problem-solving under pressure—has shaped how I lead.
          </p>
          <p className="text-lg">
            I hold dual graduate degrees from Georgetown University (MSFS and MBA) and am a Council on Foreign Relations Term Member. Outside of work, I'm a student of history, technology, the world, and a devoted husband and dad.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Experience', value: '15+ years' },
            { label: 'Executive Branch Agencies', value: '4' },
            { label: 'Countries Deployments', value: '7+' },
            { label: 'Cavities', value: '2' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-dark-600/50 backdrop-blur-sm rounded-lg p-6 border border-dark-400"
            >
              <div className="text-2xl font-bold text-primary-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-dark-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
