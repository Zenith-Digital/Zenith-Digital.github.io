import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[color:var(--canvas)] border-t border-[color:var(--line)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Zenith Digital</h3>
            <p className="text-[color:var(--muted)] mb-6 max-w-xl">
              High-end Unreal Engine development for film, broadcast, theatre, and immersive media.
              We bridge creative intent and real-time technology with production-ready tooling.
            </p>
            <div className="text-sm text-[color:var(--muted)] space-y-1">
              <p>(c) 2026 Zenith Digital Ltd.</p>
              <p>All Rights Reserved</p>
              <p>Registered In England: 15217578</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-[color:var(--muted)]">
              <li>Virtual Production</li>
              <li>XR Development</li>
              <li>Broadcast Graphics</li>
              <li>Custom Unreal Tools</li>
              <li>Motion Capture</li>
              <li>Experience Prototyping</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[color:var(--line)] pt-8 mt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/privacy" className="text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/tutorials" className="text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors text-sm">
              Tutorials
            </Link>
            <Link href="/marketplace" className="text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors text-sm">
              FAB Store
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/daniel-orchard-2b156a47/" target="_blank" rel="noopener noreferrer" className="text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.446.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
