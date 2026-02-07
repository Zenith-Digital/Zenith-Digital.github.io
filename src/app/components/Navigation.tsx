'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[color:var(--canvas)]/85 backdrop-blur-xl z-50 border-b border-[color:var(--line)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16 py-4">
          {/* Logo */}
          <Link href="/" className="text-lg md:text-xl font-semibold text-[color:var(--accent-strong)]">
            Zenith Digital
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[color:var(--muted)]">
            <Link href="/" className="hover:text-[color:var(--accent-strong)] transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="hover:text-[color:var(--accent-strong)] transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-[color:var(--accent-strong)] transition-colors">
              Contact
            </Link>
            <Link href="/tutorials" className="hover:text-[color:var(--accent-strong)] transition-colors">
              Tutorials
            </Link>
            <Link href="/marketplace" className="hover:text-[color:var(--accent-strong)] transition-colors">
              FAB Store
            </Link>
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center rounded-full border border-[color:var(--accent)] px-5 py-2 text-xs font-semibold tracking-[0.08em] text-[color:var(--accent-strong)] hover:border-[color:var(--accent-strong)] hover:text-white transition-colors"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[color:var(--muted)] hover:text-[color:var(--accent-strong)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-3 pb-4 space-y-1 bg-[color:var(--surface)] border border-[color:var(--line)] rounded-2xl mt-3">
              <Link href="/" className="block px-3 py-2 text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors">
                Home
              </Link>
              <Link href="/portfolio" className="block px-3 py-2 text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors">
                Contact
              </Link>
              <Link href="/tutorials" className="block px-3 py-2 text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors">
                Tutorials
              </Link>
              <Link href="/marketplace" className="block px-3 py-2 text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--accent-strong)] transition-colors">
                FAB Store
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-sm font-semibold tracking-[0.08em] text-[color:var(--accent-strong)]"
              >
                Start a Project
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
