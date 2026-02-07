import Image from 'next/image';
import Link from 'next/link';

const featuredProjects = [
  {
    title: 'Performance Laboratory',
    client: 'Royal College of Music',
    image: '/images/portfolio/rcm-lab.png',
    description: 'The Royal College of Music’s Performance Laboratory is a cutting-edge immersive facility that uses advanced acoustic and visual simulation tech, including Unreal Engine-driven virtual audiences and adjustable acoustics, to let performers practise, train and be studied under realistic performance conditions.',
    role: 'I served as Lead Developer, architecting a modular and scalable Unreal Engine framework to support dynamic performance research and live show production. This included deep integration with DMX lighting, QLab audio, bespoke UI workflows and multi-projection mapping systems, enabling flexible experimentation across acoustic, visual and performance-driven scenarios.',
    link: '/portfolio',
  },
  {
    title: 'LILITH.AI',
    client: 'A+E',
    image: '/images/portfolio/Lilith.png',
    description: 'LILITH.AEON is an immersive XR dance and interactive art experience in which an AI-driven virtual dancer performs inside a large LED cube, responding in real time to audience movement through AI, motion capture and 3D animation, to explore transhumanism and the boundaries of human and digital existence.',
    role: 'I led the character-side Unreal Engine engineering for LILITH.AI, defining the technical approach for real-time, audience-responsive character performance. This included ownership of rigging strategy and oversight, sequencer-driven dynamic systems, bespoke character VFX, and resolving a long-standing Live Link bone-streaming bottleneck to enable reliable AI-driven real-time interaction.',
    link: '/portfolio',
  },
  {
    title: 'NOOR Toolkit',
    client: 'Proteus',
    image: '/images/portfolio/noor.png',
    description: 'NOOR is a collaborative visualisation tool by Proteus that enables multi-user, multi-location review and live editing of 3D projects within shared extended-reality environments. It integrates with existing DCC pipelines and supports world-scaling from tabletop models to full-scale spaces, enabling seamless collaboration across devices without specialist training.',
    role: "I acted as the overall technical architect and lead developer, designing and building the core Unreal Engine framework that underpins NOOR. This included a bespoke multiplayer architecture with EOS-backed global connectivity, session hosting and reconnection, alongside robust XR best-practice systems enabling seamless collaboration across devices, scales and locations.",

    link: '/portfolio',
  },
];

const capabilityHighlights = [
  {
    title: 'Virtual Production',
    description: 'On-set tools, pipelines, and real-time systems that keep productions agile and cinematic.',
  },
  {
    title: 'Broadcast & Live',
    description: 'Data-driven graphics and interactive systems built for the pressure of live transmission.',
  },
  {
    title: 'XR & Immersive',
    description: 'End-to-end experiences spanning AR, VR, and large-scale interactive installations.',
  },
  {
    title: 'Custom Unreal Tooling',
    description: 'Bespoke plugins, workflows, and optimization that turn ambitious ideas into deliverable software.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--canvas)]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(199,166,111,0.15),_transparent_55%)]" />
        <div className="absolute -top-32 right-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(199,166,111,0.2),_transparent_65%)] blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--accent)]">Zenith Digital</p>
            <h1 className="font-display text-4xl md:text-6xl leading-tight mt-4">
              High-end Unreal Engine
              <span className="block text-[color:var(--accent-strong)]">development for immersive media.</span>
            </h1>
            <p className="text-lg text-[color:var(--muted)] mt-6 max-w-xl">
              Zenith Digital is an independent technical studio specialising in complex projects across film, television, games, broadcast, VR/XR, and location-based experiences. The work is led end-to-end by Daniel, bringing over 14 years of hands-on industry experience, primarily centred around Unreal Engine, alongside bespoke tooling, integrations, mobile and XR development, and AI-driven systems.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-black hover:bg-[color:var(--accent-strong)] transition-colors"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-[color:var(--accent)] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-[color:var(--accent-strong)] hover:text-white hover:border-[color:var(--accent-strong)] transition-colors"
              >
                Start a Project
              </Link>
            </div>
            <div className="mt-12 grid gap-4 text-sm text-[color:var(--muted)]">
              {[
                {
                  label: 'Who you hire',
                  value: 'Principal Unreal Engine Engineer with 14 years of delivery experience.',
                },
                {
                  label: 'Where I deliver',
                  value: 'Film, TV, games, broadcast, VR/XR, and location‑based entertainment.',
                },
                {
                  label: 'What I build',
                  value: 'Unreal Engine systems, bespoke tools, mobile apps, and AI-driven solutions.',
                },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-2 border-l border-[color:var(--line)] pl-4">
                  <p className="uppercase tracking-[0.18em] text-xs text-[color:var(--accent)]">{item.label}</p>
                  <p className="text-base text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--surface)]/80 p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent)]">Unreal Engine Focus</p>
                <span className="text-xs text-[color:var(--muted)]">Clarity over complexity</span>
              </div>
              <h2 className="font-display text-2xl text-white mt-6">Unreal Engine expertise that de‑risks delivery.</h2>
              <div className="mt-4 space-y-4 text-sm text-[color:var(--muted)]">
                <p>
                  While Zenith Digital works across a range of technical disciplines, Unreal Engine is the core focus for
                  most projects. A key part of that work is helping clients demystify and navigate the engine’s complexity.
                </p>
                <p>
                  Unreal Engine is a powerful and deeply complex platform, with that complexity increasing sharply outside
                  traditional game development. In XR, film, television, and live or real-time broadcast contexts, teams
                  frequently encounter edge cases where established workflows no longer apply and experience matters more
                  than documentation.
                </p>
                <p>
                  With over 14 years of daily, hands-on Unreal Engine experience, I can help you understand
                  what is possible, what is risky, and how to approach problems with confidence. That includes clear
                  explanations, practical advice, and honest time estimates — not just code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--accent)]">Capabilities</p>
              <h2 className="font-display text-3xl md:text-4xl mt-4">High-end delivery across realtime mediums.</h2>
            </div>
            <p className="text-[color:var(--muted)] max-w-lg">
              We support creative teams with strategic technical leadership, ensuring the end result is both striking and
              reliable in production.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilityHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-[color:var(--muted)] mt-3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-[color:var(--surface-2)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--accent)]">Featured Work</p>
              <h2 className="font-display text-3xl md:text-4xl mt-4">Selected projects shaping the future of realtime.</h2>
            </div>
            <Link
              href="/portfolio"
              className="text-sm font-semibold tracking-[0.08em] text-[color:var(--accent-strong)] hover:text-white transition-colors"
            >
              View All Projects
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.title} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] overflow-hidden group">
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">{project.client}</p>
                  <h3 className="text-xl font-semibold text-white mt-3">{project.title}</h3>
                  <p className="text-sm text-[color:var(--muted)] mt-3">{project.description}</p>
                  {project.role && (
                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">My Contribution</p>
                      <p className="text-sm text-[color:var(--muted)] mt-2">{project.role}</p>
                    </div>
                  )}
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-sm font-semibold tracking-[0.08em] text-[color:var(--accent-strong)] mt-6 hover:text-white transition-colors"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Discovery & Strategy',
                description: 'We translate creative ambition into a technical roadmap with clear milestones and risks surfaced early.',
              },
              {
                title: 'Rapid Prototyping',
                description: 'High-fidelity prototypes validate story, interaction, and performance before production commitments.',
              },
              {
                title: 'Delivery & Support',
                description: 'We integrate with your team, ship robust systems, and stay on hand for iteration and live support.',
              },
            ].map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent)]">Step 0{index + 1}</p>
                <h3 className="text-xl font-semibold text-white mt-4">{item.title}</h3>
                <p className="text-sm text-[color:var(--muted)] mt-3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border border-[color:var(--line)] bg-[radial-gradient(circle_at_top,_rgba(199,166,111,0.2),_transparent_60%)] p-12 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--accent)]">Let us collaborate</p>
            <h2 className="font-display text-3xl md:text-4xl mt-4">Ready to build your next realtime experience?</h2>
            <p className="text-[color:var(--muted)] mt-4 max-w-2xl mx-auto">
              Share your brief and we will craft a technical strategy that elevates the creative vision and keeps production on track.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[color:var(--accent)] px-8 py-3 text-sm font-semibold tracking-[0.08em] text-black mt-8 hover:bg-[color:var(--accent-strong)] transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

