'use client';

export default function Contact() {
  // Heavily obfuscated email - hello@zenith-digital.co.uk
  const getEmail = () => {
    const parts = [
      String.fromCharCode(104, 101, 108, 108, 111),
      String.fromCharCode(64),
      String.fromCharCode(122, 101, 110, 105, 116, 104, 45, 100, 105, 103, 105, 116, 97, 108),
      String.fromCharCode(46),
      String.fromCharCode(99, 111, 46, 117, 107),
    ];
    return parts.join('');
  };

  const handleEmailClick = () => {
    const email = getEmail();
    const subject = encodeURIComponent('Project Inquiry - Zenith Digital');
    const body = encodeURIComponent(
      'Hello,\n\nI would like to discuss a project with you.\n\nProject Type: \nBudget: \nTimeline: \n\nPlease let me know when would be a good time to discuss this further.\n\nBest regards,'
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[color:var(--canvas)] pt-24">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(199,166,111,0.12),_transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--accent)]">Contact</p>
          <h1 className="font-display text-4xl md:text-6xl mt-4">Let's talk about your next project.</h1>
          <p className="text-lg text-[color:var(--muted)] mt-6 max-w-3xl mx-auto">
            Share your brief and we will respond with a clear path forward, including technical recommendations and next steps.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-8">
            <h2 className="text-2xl font-semibold text-white">Send a project enquiry</h2>
            <p className="text-[color:var(--muted)] mt-4">
              Use the email template below and we will reply within 24 hours with availability and recommendations.
            </p>
            <div className="mt-6 rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-2)] p-6">
              <h3 className="text-sm uppercase tracking-[0.22em] text-[color:var(--accent)]">Include</h3>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)] list-disc pl-5">
                <li>Project type and scope</li>
                <li>Timeline and budget (if available)</li>
                <li>Specific requirements or success metrics</li>
                <li>Preferred contact method</li>
              </ul>
            </div>
            <button
              onClick={handleEmailClick}
              className="mt-8 w-full rounded-full bg-[color:var(--accent)] px-6 py-4 text-sm font-semibold tracking-[0.08em] text-black hover:bg-[color:var(--accent-strong)] transition-colors"
            >
              Send Email
            </button>
            <p className="text-xs text-[color:var(--muted)] mt-4 text-center">
              This opens your email client with a pre-filled template.
            </p>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-8">
              <h2 className="text-2xl font-semibold text-white">Studio details</h2>
              <p className="text-[color:var(--muted)] mt-4">
                Zenith Digital Ltd. delivers senior-led Unreal Engine development across broadcast, live events, and immersive media.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[color:var(--glow)] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[color:var(--accent-strong)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--accent)]">Email</p>
                    <button onClick={handleEmailClick} className="text-[color:var(--accent-strong)] hover:text-white transition-colors">
                      Click to send email
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[color:var(--glow)] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[color:var(--accent-strong)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0v10a2 2 0 002 2h4a2 2 0 002-2V6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--accent)]">Business</p>
                    <p className="text-white">Zenith Digital Ltd.</p>
                    <p className="text-sm text-[color:var(--muted)]">Registered in England: 15217578</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-8">
              <h3 className="text-sm uppercase tracking-[0.22em] text-[color:var(--accent)]">Connect</h3>
              <p className="text-[color:var(--muted)] mt-3">Follow along for updates and new releases.</p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="h-10 w-10 rounded-full border border-[color:var(--line)] flex items-center justify-center text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/daniel-orchard-2b156a47/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-[color:var(--line)] flex items-center justify-center text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full border border-[color:var(--line)] flex items-center justify-center text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.446.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
