import Layout from '../components/Layout';
import Link from 'next/link';
import {
  FaYoutube,
  FaDiscord,
  FaTiktok,
  FaXTwitter,
} from 'react-icons/fa6';
import { FaTruthSocial } from 'react-icons/fa6';

export default function Home() {
  const socialLinks = [
    {
      icon: FaYoutube,
      url: process.env.NEXT_PUBLIC_YOUTUBE_URL,
      label: 'YouTube',
      color: 'hover:text-red-600',
    },
    {
      icon: FaDiscord,
      url: process.env.NEXT_PUBLIC_DISCORD_URL,
      label: 'Discord',
      color: 'hover:text-blue-600',
    },
    {
      icon: FaTiktok,
      url: process.env.NEXT_PUBLIC_TIKTOK_URL,
      label: 'TikTok',
      color: 'hover:text-black dark:hover:text-white',
    },
    {
      icon: FaTruthSocial,
      url: process.env.NEXT_PUBLIC_TRUTH_SOCIAL_URL,
      label: 'Truth Social',
      color: 'hover:text-blue-700',
    },
    {
      icon: FaXTwitter,
      url: process.env.NEXT_PUBLIC_X_URL,
      label: 'X',
      color: 'hover:text-black dark:hover:text-white',
    },
  ];

  return (
    <Layout title="Right Wing Politics - Home">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-patriot-navy to-patriot-red py-20 md:py-32">
        <div className="container-custom text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
            Right Wing Politics
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Political Commentary & Analysis for Informed Citizens
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/videos" className="btn-primary">
              Watch Videos
            </Link>
            <a
              href={process.env.NEXT_PUBLIC_YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Subscribe
            </a>
          </div>
        </div>
      </section>

      {/* Latest Video Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center">Latest Video</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-black rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white text-lg">
                    YouTube Video Player
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Configure YouTube channel ID in .env.local
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center">Follow Us</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md transition-all hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon className="w-8 h-8" />
                </a>
              );
            })}
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Stay connected across all platforms
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-patriot-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold font-heading mb-4">
            Support Our Work
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Help us continue producing quality political content
          </p>
          <a
            href={process.env.NEXT_PUBLIC_BUYMEACOFFEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-patriot-red font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Buy Me a Coffee
          </a>
        </div>
      </section>
    </Layout>
  );
}
