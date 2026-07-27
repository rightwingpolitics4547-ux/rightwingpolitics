import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/videos', label: 'Videos' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/donate', label: 'Donate' },
  ];

  const isActive = (href) => router.pathname === href;

  return (
    <nav className="bg-white dark:bg-gray-900 border-b-2 border-patriot-red shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold font-heading text-patriot-navy dark:text-white">
              RWP
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-patriot-red border-b-2 border-patriot-red'
                    : 'text-gray-700 dark:text-gray-300 hover:text-patriot-red'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-900 dark:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 px-4 rounded ${
                  isActive(link.href)
                    ? 'bg-patriot-red text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
