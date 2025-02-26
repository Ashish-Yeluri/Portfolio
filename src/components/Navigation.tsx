import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#experience', text: 'Experience' },
    { href: '#projects', text: 'Projects' },
    { href: '#education', text: 'Education' },
    { href: '#certifications', text: 'Certifications' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary/95 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-secondary font-bold text-xl">AY</a>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-textPrimary"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-textSecondary hover:text-secondary transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-textSecondary hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}