'use client';

import Link from 'next/link';

export default function Navigation() {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Writing', href: '#writing' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const social = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mschoengold/' },
    { name: 'X', href: 'https://x.com/MSchoengold' },
    { name: 'GitHub', href: 'https://github.com/mschoengold' },
    { name: 'Email', href: 'mailto:m.schoengold.beatty@gmail.com' },
  ];

  return (
    <nav className="px-6 pt-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 border-3 border-edge rounded-full bg-panel shadow-brutal-sm pl-5 pr-3 py-2">
        <div className="flex items-center gap-1 min-w-0">
          <Link href="/" className="font-display text-[15px] text-ink mr-3 shrink-0">
            MSB
          </Link>

          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[13.5px] font-semibold text-ink px-3 py-1.5 rounded-full hover:bg-tag-amber transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Link
              href="/private"
              className="text-[13.5px] font-semibold text-ink px-3 py-1.5 rounded-full hover:bg-tag-amber transition-colors"
            >
              Private
            </Link>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 shrink-0">
          {social.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-ink border-2 border-edge rounded-full px-3 py-1.5 bg-panel hover:bg-tag-amber transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-ink p-1.5" aria-label="Menu">
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
