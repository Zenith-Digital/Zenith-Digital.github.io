import Image from 'next/image';

export default function Portfolio() {
  const currentProjects = [
      {
      title: 'NOOR',
      client: 'Proteus',
      image: '/images/portfolio/noor_Art.png',
      description: 'Research & development on NOOR, a multi-platform Unreal Engine toolkit designed for real-time collaboration across VR, AR, and desktop. Implemented custom multiplayer framework supporting session hosting, reconnection logic, and seamless interaction across devices.',
      highlights: [
        'Multi-platform XR toolkit for real-time collaboration',
        'Custom multiplayer framework with hosting and reconnection',
        'Seamless interaction across VR, AR, and desktop',
      ],
      technologies: ['Unreal Engine', 'VR', 'AR', 'Multiplayer', 'C++'],
      link: 'https://www.proteus.company/',
      imageFit: 'cover',
    },
    {
      title: 'LILITH.AI',
      client: 'A+E',
      image: '/images/portfolio/Lilith.png',
      description: 'Engineered a custom Unreal Engine framework for A+E to power interactive storytelling via the Lilith.AI platform. I led the transition to a high-fidelity v2 rigging pipeline and developed dynamic animation systems - including real-time audience tracking and procedural VFX - to replace static playbacks. Notably, I resolved a critical, months-old Live Link bone-streaming bottleneck within three days, enabling seamless real-time character interactions and fully dynamic AI-driven performances.',
      highlights: [
        'Custom Unreal Engine framework for interactive storytelling',
        'High-fidelity v2 rigging pipeline and dynamic animation systems',
        'Resolved Live Link bone-streaming bottleneck for realtime interaction',
      ],
      technologies: ['Unreal Engine', 'Character Development', 'AI', 'Integration'],
      link: 'https://aelab.uk/',
      imageFit: 'cover',
    },
    {
      title: 'Performance Laboratory',
      client: 'Royal College of Music',
      image: '/images/portfolio/rcm-lab.png',
      description: 'Lead Developer architecting a modular and scalable framework for dynamic show production. Seamless integration with DMX lighting systems, QLab audio, sophisticated UI interactions, and multi-projection mapped outputs.',
      highlights: [
        'Modular framework for dynamic show control',
        'Integrated DMX lighting and QLab audio systems',
        'Multi-projection outputs with tailored UI workflows',
      ],
      technologies: ['Unreal Engine', 'DMX', 'QLab', 'Multi-projection', 'Live Performance'],
      link: 'https://www.rcm.ac.uk/research/projects/performancelaboratory/',
      imageFit: 'cover',
    },
    {
      title: 'Cricket Broadcast',
      client: 'Warner Bros. Discovery',
      image: '/images/portfolio/cricket.png',
      description: 'Architected a real-time broadcast visualizer for international live television, engineered for high-pressure reliability. The system ingests and parses raw Hawkeye tracking data on-the-fly to drive fully animated heatmaps, zone breakdowns, and ball trajectories without requiring restarts or repackaging. Developed the core logic to transform complex external datasets into dynamic, broadcast-ready technical analysis, ensuring sub-second accuracy for live sports commentary.',
      highlights: [
        'Live ingestion of Hawkeye tracking data',
        'Realtime heatmaps, zone breakdowns, and ball trajectories',
        'Broadcast pipeline engineered for high-pressure reliability',
      ],
      technologies: ['Unreal Engine', 'Data Visualization', 'Pipeline', 'Live Broadcasting'],
      link: 'https://wbdsports.com/page/about-warner-bros-discovery-sports',
      imageFit: 'cover',
    },
    {
      title: 'Chaos Castle',
      client: 'Super Strange Studios',
      image: '/images/portfolio/chaos-castle.jpg',
      description: 'Spearheaded development of an innovative framework with world-building features that empower users to craft dynamic worlds. Design centered around emulating tactile clay/plasticine sculpting for younger audiences.',
      highlights: [
        'World-building framework for user-created environments',
        'Tactile clay/plasticine feel for younger audiences',
        'Interactive UI/UX focused on creative play',
      ],
      technologies: ['Unreal Engine', 'World Building', 'UI/UX', 'Interactive Design'],
      link: 'https://superstrange.tv/stop-motion-animation/',
      imageFit: 'cover',
    },
    {
      title: 'Tennis Hawkeye Integration',
      client: 'Warner Bros. Discovery',
      image: '/images/portfolio/Hawkeye2.png',
      description: 'Implementation of Hawkeye dataset with custom C++ code for efficient data parsing and analysis. Created sophisticated visualization tools for automatic generation of aesthetically pleasing and consistent data representations.',
      highlights: [
        'Custom C++ parsing for Hawkeye datasets',
        'Automated visualization tools for broadcast graphics',
        'Consistent, aesthetically aligned data representations',
      ],
      technologies: ['Unreal Engine', 'C++', 'Data Visualization', 'Sports Analytics'],
      link: 'https://wbdsports.com/page/about-warner-bros-discovery-sports',
      imageFit: 'cover',
    },
    {
      title: 'Cycling Track Visualisation',
      client: 'Warner Bros. Discovery',
      image: '/images/portfolio/TrackViewer1.png',
      description: 'Bespoke system for ingesting and visualising cycling datasets with full Veloviewer JSON support. External control platform using ImGui and NetImgui for real-time operation during live broadcasts.',
      highlights: [
        'Veloviewer JSON ingestion for cycling data',
        'External control platform with ImGui and NetImgui',
        'Realtime visuals designed for live broadcast operation',
      ],
      technologies: ['Unreal Engine', 'ImGui', 'NetImgui', 'JSON', 'Live Broadcasting'],
      link: 'https://wbdsports.com/page/about-warner-bros-discovery-sports',
      imageFit: 'cover',
    },
    {
      title: 'Beijing Olympics 2022',
      client: 'Warner Bros. Discovery',
      image: '/images/portfolio/Olympics22.png',
      description: 'Modular system for populating digital environments with background NPCs, including motion capture import, procedural character variations, dynamic outfits, and animation assignment.',
      highlights: [
        'Background NPC population system for live environments',
        'Mocap import with procedural character variations',
        'Dynamic outfits and animation assignment workflows',
      ],
      technologies: ['Unreal Engine', 'Motion Capture', 'Procedural Generation', 'Character Systems'],
      link: null,
      imageFit: 'cover',
    },
    {
      title: 'The Ward Round',
      client: 'Safety Catch Ltd',
      image: '/images/portfolio/WardRoundLogo.png',
      description: 'Project details coming soon.',
      highlights: [
        'World development built in Unreal Engine',
        'Gameplay logic tailored to clinical scenarios',
        'Performance capture integration for characters',
      ],
      technologies: ['Unreal Engine', 'World Development', 'Gameplay Logic', 'Performance Capture'],
      link: null,
      imageFit: 'cover',
    },
    {
      title: 'Mozfest',
      client: 'Royal Shakespeare Company',
      image: '/images/portfolio/mozfest.png',
      description: 'Creation of a bespoke demo, featuring character and sets from the Dream-Online project, repurposed into a 30 minutes live presentation, featuring live motion capture integration, facial capture, and cue system. Developed in Unreal Engine for real-time rendering and interaction during the festival.',
      highlights: [
        'Bespoke 30-minute live demo for festival presentation',
        'Live motion capture, facial capture, and cue system',
        'Realtime rendering and interaction in Unreal Engine',
      ],
      technologies: ['Unreal Engine', 'LBE', 'Live', 'Performance Capture'],
      link: 'https://www.rsc.org.uk/',
      imageFit: 'cover',
    }
  ];

  const previousProjects = [
    {
      title: 'The Mandalorian (Season 2)',
      client: 'The Third Floor Inc.',
      image: '/images/portfolio/MandoSeason2.jpg',
      description: 'Unreal tools for Mandalorian production. C++ and Python API development with Maya integration for virtual production pipeline.',
      technologies: ['Unreal Engine', 'C++', 'Python', 'Maya', 'Virtual Production'],
    },
    {
      title: 'Game of Thrones (Season 7-8)',
      client: 'The Third Floor Inc.',
      image: '/images/portfolio/got8.jpg',
      description: 'VP tools & Pipeline Development. VR Tools for Virtual Scouting and shot-planning for the epic final seasons.',
      technologies: ['Unreal Engine', 'VR', 'Virtual Scouting', 'Pipeline Development'],
    },
    {
      title: 'Star Citizen - Squadron 42',
      client: 'The Imaginarium Studios',
      image: '/images/portfolio/Squadren42.jpg',
      description: 'Realtime visualisation in CryEngine. Motion Capture Operator providing shadow and support for cinematics direction.',
      technologies: ['CryEngine', 'Motion Capture', 'Realtime Rendering', 'Cinematics'],
    },
    {
      title: 'Avengers 2 - Age of Ultron',
      client: 'The Imaginarium Studios',
      image: '/images/portfolio/avengers.jpg',
      description: "Motion Capture Operator on-set at Shepperton Studios. Captured principal cast and stunt work for Marvel's blockbuster.",
      technologies: ['Motion Capture', 'On-set Operations', 'Performance Capture'],
    },
    {
      title: 'Star Wars - Episode 7',
      client: 'The Imaginarium Studios',
      image: '/images/portfolio/StarWars7.jpg',
      description: 'Motion capture technician in studio and on location. IBC capture operator on-set for the return to the Star Wars saga.',
      technologies: ['Motion Capture', 'On-location', 'IBC Systems'],
    },
    {
      title: 'The Ritual',
      client: 'The Imaginarium Studios',
      image: '/images/portfolio/Ritual.jpg',
      description: 'Built previs scenes in Unreal Engine. Performance capture prep and realtime setup for horror film production.',
      technologies: ['Unreal Engine', 'Previsualization', 'Performance Capture'],
    },
    {
      title: 'Battlefield 1',
      client: 'Legacy Credit',
      image: '/images/portfolio/battlefield1.jpg',
      description: 'Legacy credit. Details coming soon.',
      technologies: [],
    },
    {
      title: 'Jingle Jangle',
      client: 'Legacy Credit',
      image: '/images/portfolio/JingleJangle.jpg',
      description: 'Legacy credit. Details coming soon.',
      technologies: [],
    },
    {
      title: 'Kingsglaive',
      client: 'Legacy Credit',
      image: '/images/portfolio/Kingsglaive.jpg',
      description: 'Legacy credit. Details coming soon.',
      technologies: [],
    },
    {
      title: 'Mowgli',
      client: 'Legacy Credit',
      image: '/images/portfolio/Mowgli.jpg',
      description: 'Legacy credit. Details coming soon.',
      technologies: [],
    },
    {
      title: 'Ryse',
      client: 'Legacy Credit',
      image: '/images/portfolio/Ryse.jpg',
      description: 'Legacy credit. Details coming soon.',
      technologies: [],
    },
    {
      title: 'Tempest',
      client: 'Legacy Credit',
      image: '/images/portfolio/Tempest.jpg',
      description: 'Legacy credit. Details coming soon.',
      technologies: [],
    },
    {
      title: 'Mad Factory',
      client: 'Legacy Credit',
      image: '/images/portfolio/MadFactory.jpg',
      description: 'Legacy credit. Details coming soon.',
      technologies: [],
    },
    {
      title: 'Dream',
      client: 'Legacy Credit',
      image: '/images/portfolio/Dream.jpg',
      description: 'Legacy credit. Details coming soon.',
      technologies: [],
    },
  ];

  return (
    <main className="min-h-screen bg-[color:var(--canvas)] pt-24">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(199,166,111,0.12),_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--accent)]">Portfolio</p>
          <h1 className="font-display text-4xl md:text-6xl mt-4">Recent Work</h1>
          <p className="text-lg text-[color:var(--muted)] mt-6 max-w-3xl">
            Zenith Digital partners with creative and technical teams to deliver robust Unreal Engine systems,
            immersive experiences, and broadcast-ready visuals.
          </p>
        </div>
      </section>

      {/* Current Projects */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {currentProjects.map((project, index) => (
              <article key={project.title} className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--surface)] overflow-hidden group">
                <div className={`lg:grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
                  <div className="relative h-[260px] sm:h-[320px] md:h-[420px] lg:h-full lg:min-h-[420px] overflow-hidden bg-[color:var(--surface-2)]">
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className={`${project.imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col gap-6">
                    <div className="flex items-center justify-end">
                      <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">{project.client}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="text-sm text-[color:var(--muted)] mt-4">{project.description}</p>
                    </div>
                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="list-disc pl-5 space-y-2 text-sm text-[color:var(--muted)]">
                        {project.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 rounded-full text-xs text-[color:var(--accent-strong)] bg-[color:var(--glow)]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold tracking-[0.08em] text-[color:var(--accent-strong)] hover:text-white transition-colors"
                      >
                        Visit Client
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Experience */}
      <section className="py-20 bg-[color:var(--surface-2)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--accent)]">Previous Experience</p>
            <h2 className="font-display text-3xl md:text-4xl mt-4">Legacy credits and career highlights.</h2>
            <p className="text-[color:var(--muted)] mt-4">
              Notable projects from Daniel's career before founding Zenith Digital.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previousProjects.map((project) => (
              <div key={project.title} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] overflow-hidden">
                <div className="relative h-44">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)] mt-2">{project.client}</p>
                  <p className="text-sm text-[color:var(--muted)] mt-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded text-xs text-[color:var(--muted)] bg-[color:var(--surface-2)]">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 rounded text-xs text-[color:var(--muted)] bg-[color:var(--surface-2)]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--surface)] p-12 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--accent)]">Next collaboration</p>
            <h2 className="font-display text-3xl md:text-4xl mt-4">Ready to start your project?</h2>
            <p className="text-[color:var(--muted)] mt-4 max-w-2xl mx-auto">
              Let's discuss how Zenith Digital can support your next production with expert Unreal Engine development.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center rounded-full bg-[color:var(--accent)] px-8 py-3 text-sm font-semibold tracking-[0.08em] text-black mt-8 hover:bg-[color:var(--accent-strong)] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
