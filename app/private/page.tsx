'use client';

import { useState } from 'react';
import { Lock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivateProjects() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  // NOTE: this check runs in the browser, so the password below ships inside the
  // public JavaScript bundle and anyone can read it. Move this section behind
  // Netlify's built-in password protection (Site settings > Access control)
  // before treating anything here as genuinely private.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'L0ver!coL0ver!co') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-16">
        <div className="max-w-md w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-ink mb-6 hover:underline decoration-2 underline-offset-4"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="box p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="box-sm fill-amber p-4 rounded-full">
                <Lock className="text-ink" size={28} />
              </div>
            </div>

            <h1 className="font-display text-2xl text-center text-ink mb-2">
              Private Projects
            </h1>
            <p className="text-ink-muted text-center mb-6">
              This section is password protected. Please enter the password to continue.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-panel border-[2.5px] border-edge rounded-lg text-ink placeholder-ink-soft focus:outline-none focus:shadow-brutal-sm transition-shadow"
                autoFocus
              />

              {error && (
                <p className="text-sm text-center font-semibold text-ink bg-tag-violet border-2 border-edge rounded-lg py-2">
                  {error}
                </p>
              )}

              <button type="submit" className="btn-b fill-amber w-full text-center">
                Access Private Projects
              </button>
            </form>

            <p className="kicker text-center mt-6 leading-relaxed">
              Note: in production this should use Netlify&apos;s built-in password protection.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const projects = [
    {
      title: 'Insight Markets',
      description:
        'Corporate prediction market platform enabling external stakeholders to trade on business outcomes using play money to surface collective intelligence.',
      status: 'Development',
      tags: ['Next.js', 'TypeScript', 'Trading Platform', 'AI'],
    },
    {
      title: 'Confidential Project Alpha',
      description:
        'Strategic initiative focused on enterprise transformation and operational optimization for Fortune 500 clients.',
      status: 'In Progress',
      tags: ['Strategy', 'Operations', 'Enterprise'],
    },
    {
      title: 'Defense Innovation Initiative',
      description:
        'Research and analysis on emerging defense technologies and their strategic implications for national security.',
      status: 'Research Phase',
      tags: ['Defense', 'Innovation', 'Policy'],
    },
    {
      title: 'Policy Analysis Framework',
      description:
        'Comprehensive framework for evaluating complex policy decisions in high-stakes environments.',
      status: 'Development',
      tags: ['Policy', 'Analysis', 'Decision Support'],
    },
    {
      title: 'Operational Excellence Program',
      description:
        'Multi-phase program to enhance organizational effectiveness and strategic execution capabilities.',
      status: 'Planning',
      tags: ['Operations', 'Leadership', 'Strategy'],
    },
  ];

  const tagFills = ['fill-amber', 'fill-azure', 'fill-violet', 'fill-sage'];

  return (
    <main className="min-h-screen px-6 pt-10 pb-14">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-ink mb-6 hover:underline decoration-2 underline-offset-4"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="tab">
          <span className="tab-label">Private</span>
        </div>

        <div className="slab">
          <h1 className="font-display text-2xl md:text-3xl text-ink mb-2">
            Private Projects
          </h1>
          <p className="text-ink-muted mb-7">
            Detailed information about ongoing and confidential projects.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <div key={project.title} className="box-sm p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="card-h text-[21px]">{project.title}</h3>
                  <span className="tagline fill-sage whitespace-nowrap">{project.status}</span>
                </div>

                <p className="text-sm text-ink-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={tag} className={`tagline ${tagFills[i % tagFills.length]}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="box-sm fill-violet mt-6 p-5">
            <p className="text-sm text-ink">
              <strong className="font-bold">Note:</strong> The information on this page is for
              demonstration purposes. Replace with your actual private project details.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
