import Link from 'next/link';
import {
  FaYoutube,
  FaDiscord,
  FaTiktok,
  FaXTwitter,
} from 'react-icons/fa6';

export default function Footer() {
  const socialLinks = [
    {
      icon: FaYoutube,
      url: process.env.NEXT_PUBLIC_YOUTUBE_URL,
      label: 'YouTube',
    },
    {
      icon: FaDiscord,
      url: process.env.NEXT_PUBLIC_DISCORD_URL,
      label: 'Discord',
    },
    {
      icon: FaTiktok,
      url: process.env.NEXT_PUBLIC_TIKTOK_URL,
      label: 'TikTok',
    },
    {
      icon: FaXTwitter,
      url: process.env.NEXT_PUBLIC_X_URL,
      label: 'X',
    },
  ];

  return (
    <footer className="bg-patriot-navy text-white mt-20">
      <div className="container-custom py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">RWP</h3>
            <p className="text-gray-300">
              The Official Website For Right Wing Politics - Your source for
              political commentary and analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/videos" className="text-gray-300 hover:text-white">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-white">
                  Support Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-social"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; 2026 Right Wing Politics. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
