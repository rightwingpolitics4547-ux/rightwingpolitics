import Layout from '../components/Layout';
import Link from 'next/link';
import { FaCoffee } from 'react-icons/fa6';

export default function Donate() {
  return (
    <Layout
      title="Donate - Right Wing Politics"
      description="Support Right Wing Politics and help us continue our mission"
    >
      {/* Page Header */}
      <section className="bg-gradient-to-r from-patriot-navy to-patriot-red py-12">
        <div className="container-custom text-white">
          <h1 className="heading-xl mb-2">Support Our Work</h1>
          <p className="text-lg text-gray-100">
            Help us continue producing quality political content
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          {/* Why Support */}
          <div className="mb-12">
            <h2 className="heading-md mb-4 text-center">Why Support RWP?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Creating quality political commentary takes significant time,
              resources, and dedication. Your support helps us:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-patriot-red font-bold mr-4 text-lg">
                  ✓
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Produce high-quality video content
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-patriot-red font-bold mr-4 text-lg">
                  ✓
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Invest in better equipment and production tools
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-patriot-red font-bold mr-4 text-lg">
                  ✓
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Dedicate more time to research and analysis
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-patriot-red font-bold mr-4 text-lg">
                  ✓
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Grow our team and expand our reach
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-patriot-red font-bold mr-4 text-lg">
                  ✓
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Keep our content free and accessible to all
                </span>
              </li>
            </ul>
          </div>

          <div className="divider" />

          {/* Donation CTA */}
          <div className="bg-gradient-to-r from-patriot-red to-red-700 text-white rounded-lg p-12 text-center mb-12">
            <FaCoffee className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="heading-md mb-4">Buy Me a Coffee</h2>
            <p className="mb-8 text-gray-100">
              Support RWP with a one-time contribution or become a recurring
              supporter. Every dollar helps us continue our mission.
            </p>
            <a
              href={process.env.NEXT_PUBLIC_BUYMEACOFFEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-patriot-red font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Support on Buy Me a Coffee
            </a>
          </div>

          <div className="divider" />

          {/* Transparency */}
          <div>
            <h2 className="heading-md mb-4 text-center">
              Transparency & Accountability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              We believe in being transparent with our supporters. All donations
              go directly toward:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card p-6 text-center">
                <div className="text-3xl mb-2">🎥</div>
                <h3 className="font-bold mb-2">Content Creation</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Video production, editing, and publishing
                </p>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl mb-2">⚙️</div>
                <h3 className="font-bold mb-2">Infrastructure</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Website hosting, servers, and platform fees
                </p>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl mb-2">📚</div>
                <h3 className="font-bold mb-2">Research</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Sources, tools, and educational resources
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Thank you for considering supporting Right Wing Politics. Your
              contribution makes a real difference!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={process.env.NEXT_PUBLIC_BUYMEACOFFEE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Donate Now
              </a>
              <Link href="/" className="btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
