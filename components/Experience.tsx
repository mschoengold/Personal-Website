import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Business Operations Lead',
      organization: 'Palantir Technologies',
      period: 'December 2025 - Present',
      type: 'work',
    },
    {
      title: 'Acting Chief of Staff',
      organization: 'Department of Defense, Office of the Secretary of Defense, Office of the Assistant Secretary of Defense for Special Operations and Low-Intensity Conflict (ASD-SO/LIC)',
      period: 'December 2024 - December 2025',
      type: 'work',
    },
    {
      title: 'Director for Afghanistan',
      organization: 'National Security Council, The White House',
      period: 'August 2023 - October 2024',
      type: 'work',
    },
    {
      title: 'Special Assistant',
      organization: 'Department of State, Counselor of the U.S. Department of State',
      period: 'May 2022 - May 2023',
      type: 'work',
    },
    {
      title: 'Team Lead',
      organization: 'Department of State, Bureau of Conflict and Stabilization Operations',
      period: 'September 2020 - May 2022',
      type: 'work',
    },
    {
      title: 'Deputy Director, Policy Advisor, and Strategic Planner',
      organization: 'Department of State, Office of the Special Envoy for the Defeat of ISIS',
      period: 'September 2016 - August 2020',
      type: 'work',
    },
    {
      title: 'Client Representative/Sales Strategist',
      organization: 'International Business Machines (IBM), Summit Development Leadership Program',
      period: 'June 2015 - August 2016',
      type: 'work',
    },
    {
      title: 'Associate',
      organization: 'Chemonics International',
      period: 'April 2009 - May 2011',
      type: 'work',
    },
    {
      title: 'Manager, Monitoring and Evaluation',
      organization: 'Afghanistan Stabilization Initiative, USAID/OTI-funded Program (Helmand, Afghanistan)',
      period: 'May 2011 - May 2012',
      type: 'work',
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
      year: '2009',
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary-400">
          Experience
        </h2>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <Briefcase className="text-primary-400" size={24} />
            Professional Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-dark-400 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-600 border-4 border-dark-600"></div>

                <div className="bg-dark-600/30 backdrop-blur-sm rounded-lg p-6 border border-dark-400">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-primary-400 font-medium mb-2">
                    {exp.organization}
                  </p>
                  <p className="text-dark-200 text-sm">{exp.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <GraduationCap className="text-primary-400" size={24} />
            Education
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-dark-600/30 backdrop-blur-sm rounded-lg p-6 border border-dark-400"
              >
                <h4 className="text-xl font-bold text-white mb-1">
                  {edu.degree}
                </h4>
                <p className="text-primary-400 font-medium mb-1">
                  {edu.institution}
                </p>
                <p className="text-dark-200 text-sm">
                  {edu.field}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Affiliations */}
        <div className="mt-12 p-6 bg-dark-600/20 rounded-lg border border-dark-400">
          <h4 className="text-lg font-bold text-white mb-3">
            Professional Affiliations
          </h4>
          <p className="text-dark-100">Member, Council on Foreign Relations</p>
        </div>
      </div>
    </section>
  );
}
