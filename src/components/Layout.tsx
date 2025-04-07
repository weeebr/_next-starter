"use client";

import { ReactNode, useState } from "react";
import { navigationLinks } from "@/config/navigation";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl">Logo</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } bg-white dark:bg-gray-900 border-t dark:border-gray-800`}
        >
          <div className="container mx-auto px-4 py-2 space-y-2">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 hover:text-blue-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>

      <footer className="sticky bottom-0 z-50 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-4 text-center text-sm">
          © {new Date().getFullYear()} Next Starter. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
