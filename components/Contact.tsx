import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mschoengold/',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:m.schoengold.beatty@gmail.com',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://x.com/MSchoengold',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/mschoengold',
    },
  ];

  return (
    <section id="contact" className="px-6 pt-14 pb-12 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="tab">
          <span className="tab-label">Contact</span>
        </div>

        <div className="slab">
          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">
                Get in touch
              </h2>
              <p className="text-ink-muted text-base max-w-lg mb-7">
                Interested in collaborating or want to discuss national security,
                defense policy, or enterprise operations? Feel free to reach out.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="box-sm py-3 flex flex-col items-center gap-1.5 text-ink hover:bg-tag-amber transition-colors"
                      aria-label={link.name}
                    >
                      <Icon size={18} />
                      <span className="text-xs font-bold">{link.name}</span>
                    </a>
                  );
                })}
              </div>

              <p className="font-mono text-[12.5px] font-semibold text-ink-soft">
                Currently based in{' '}
                <span className="fill-amber border-2 border-edge rounded px-1.5 py-0.5">
                  Washington, DC
                </span>
              </p>
            </div>

            <figure className="box-sm p-2.5 m-0">
              <img
                src="/images/IMG_2880.jpeg"
                alt="Michael Schoengold Beatty with his son, Theo"
                className="w-full h-[360px] object-cover block border-2 border-edge rounded"
              />
              <figcaption className="kicker pt-3 pb-1 px-1">With my son, Theo</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
