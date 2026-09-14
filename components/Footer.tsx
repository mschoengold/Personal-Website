import SiteStats from './SiteStats';

export default function Footer() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Writing', href: '#writing' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="px-6 pb-10">
      <div className="max-w-6xl mx-auto box px-6 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11.5px] font-semibold tracking-wide text-ink-soft">
            &copy; {new Date().getFullYear()} Michael Schoengold Beatty. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13px] font-semibold text-ink">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="hover:underline decoration-2 underline-offset-4">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <SiteStats />
      </div>
    </footer>
  );
}
