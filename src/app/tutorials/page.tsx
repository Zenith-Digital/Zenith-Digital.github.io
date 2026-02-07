import Image from 'next/image';

export default function Tutorials() {
  const tutorials = [
    {
      title: "Unreal Engine C++, A Beginners 101",
      image: "/images/tut/cpp_101_art.jpg",
      description: "In this series I will be taking you through how to get started using C++ for the Unreal Engine. The course is split into theory first, and then two practical demonstrations, with a small interlude in the middle to cover some quick tips and potential areas of problems. The series is going to explain everything and assumes no prior knowledge to C++ for Unreal.",
      level: "Beginner",
      duration: "8+ hours",
      price: "Discounted",
      link: "https://www.udemy.com/course/unreal-engine-cpp-101/?couponCode=PROMO30",
      topics: ["C++ Fundamentals", "Unreal Engine", "Theory & Practice", "Beginner Friendly"],
    },
    {
      title: "Building Perceptive AI in Unreal Engine",
      image: "/images/tut/perceptiveAI_art.png",
      description: "In this series I will be showing how to set up two different AI designs, one for a shooter experience, and one for a RPG style AI. We will cover blackboard and behaviour trees, EQS queries, and the AI perception component using sight, sound and damage stimuli. Includes comprehensive EQS system overview.",
      level: "Intermediate",
      duration: "10+ hours",
      price: "Discounted",
      link: "https://www.udemy.com/course/perceptive-ai-in-unreal-engine/?couponCode=PROMO30",
      topics: ["AI Behavior Trees", "EQS Queries", "AI Perception", "Blackboard", "Shooter AI", "RPG AI"],
    },
    {
      title: "Unreal 4 Material Shaders - All You Need to Get Started",
      image: "/images/tut/material_basics_art.png",
      description: "In this series I will be taking you with the setup of a large number of different materials to teach you how to utilise the Unreal 4 material system in a practical way. We will cover PBR workflow, material functions, opaque, translucent, masked, light functions, and deferred decals.",
      level: "Beginner to Intermediate",
      duration: "12+ hours",
      price: "Discounted",
      link: "https://www.udemy.com/course/unreal4-materials-101/?couponCode=SITEPROMO",
      topics: ["Material System", "PBR Workflow", "Shader Creation", "Material Functions", "Lighting"],
    },
    {
      title: "Using JSON In Unreal Engine 4 - C++",
      image: "/images/tut/json_art.jpg",
      description: "In this course, we will be looking at how to utilise Unreal's Json implementation to create your own Json files for use in your project. Json is a great method for storing certain data types for all manner of projects, such as pipelines, game data, configs, and more. Written in C++ using Unreal Engine 4.22.",
      level: "Intermediate",
      duration: "6+ hours",
      price: "Discounted",
      link: "https://www.udemy.com/course/using-json-in-unreal-engine-4/?couponCode=SITEPROMO",
      topics: ["JSON Implementation", "Data Storage", "C++ Programming", "File I/O", "Config Systems"],
    },
  ];

  return (
    <main className="min-h-screen bg-[color:var(--canvas)] pt-24">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(93,228,255,0.12),_transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl text-white mb-6">Tutorials</h1>
            <p className="text-xl text-[color:var(--muted)] max-w-3xl mx-auto mb-8">
              Lectures and practicals for developing in Unreal Engine 4.
              Master advanced techniques with comprehensive, hands-on courses.
            </p>
            <div className="max-w-3xl mx-auto rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] px-5 py-4 text-left">
              <p className="text-sm text-[color:var(--muted)]">
                <span className="text-[color:var(--accent-strong)] font-semibold">Tutorial Update:</span>{' '}
                Tutorial production is currently on pause while existing material is reviewed and refreshed.
                A new wave of Unreal Engine 5 focused tutorials is planned for release in a future update.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {tutorials.map((tutorial, index) => (
              <article key={index} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] overflow-hidden group">
                <div className="relative h-64 overflow-hidden bg-[color:var(--surface-2)]">
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={tutorial.image}
                      alt={tutorial.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-black bg-[color:var(--accent)]">
                      {tutorial.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-[color:var(--accent-strong)] bg-[color:var(--glow)] border border-[color:var(--line)]">
                      {tutorial.price}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{tutorial.title}</h3>

                  <div className="flex items-center gap-4 mb-4 text-sm text-[color:var(--muted)]">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Certificate included
                    </div>
                  </div>

                  <p className="text-[color:var(--muted)] mb-4 text-sm leading-relaxed line-clamp-3">
                    {tutorial.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {tutorial.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium text-[color:var(--accent-strong)] bg-[color:var(--glow)]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <a
                    href={tutorial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-full bg-[color:var(--accent)] hover:bg-[color:var(--accent-strong)] text-black font-semibold py-3 px-6 transition-colors text-center block"
                  >
                    Explore Course on Udemy
                  </a>
                </div>
              </article>
            ))}
          </div>

          <section className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-8 mb-16">
            <h2 className="font-display text-3xl text-white mb-8 text-center">Why Choose These Tutorials?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[color:var(--glow)] border border-[color:var(--line)]">
                  <svg className="w-8 h-8 text-[color:var(--accent-strong)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Industry Expertise</h3>
                <p className="text-[color:var(--muted)]">Learn from real-world experience on major productions like The Mandalorian, Game of Thrones, and Star Wars.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[color:var(--glow)] border border-[color:var(--line)]">
                  <svg className="w-8 h-8 text-[color:var(--accent-strong)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Practical Approach</h3>
                <p className="text-[color:var(--muted)]">Theory combined with hands-on demonstrations and practical examples.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[color:var(--glow)] border border-[color:var(--line)]">
                  <svg className="w-8 h-8 text-[color:var(--accent-strong)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Comprehensive Coverage</h3>
                <p className="text-[color:var(--muted)]">From beginner fundamentals to advanced techniques, with detailed explanations.</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="rounded-2xl border border-[color:var(--line)] bg-[radial-gradient(circle_at_top,_rgba(93,228,255,0.18),_transparent_65%)] p-8">
              <h2 className="font-display text-3xl text-white mb-4">Ready to Level Up Your Skills?</h2>
              <p className="text-xl text-[color:var(--muted)] mb-6">
                Join developers who have enhanced their Unreal Engine expertise with these courses.
              </p>
              <p className="text-[color:var(--accent-strong)] font-semibold mb-8">
                All courses include lifetime access, downloadable resources, and certificate of completion.
              </p>
              <a
                href="https://www.udemy.com/user/daniel-orchard-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-[color:var(--accent)] hover:bg-[color:var(--accent-strong)] text-black font-semibold py-4 px-10 text-lg transition-colors"
              >
                View All Courses on Udemy
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
