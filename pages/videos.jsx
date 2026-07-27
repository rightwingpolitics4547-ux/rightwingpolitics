import Layout from '../components/Layout';
import Link from 'next/link';

export default function Videos() {
  const videos = [
    {
      id: 1,
      title: 'Political Analysis: Recent Developments',
      date: '2026-07-20',
      views: '10.5K',
    },
    {
      id: 2,
      title: 'Commentary on Current Events',
      date: '2026-07-18',
      views: '8.3K',
    },
    {
      id: 3,
      title: 'Right Wing Perspectives Explained',
      date: '2026-07-15',
      views: '12.1K',
    },
    {
      id: 4,
      title: 'Election Analysis & Discussion',
      date: '2026-07-12',
      views: '15.7K',
    },
  ];

  return (
    <Layout title="Videos - Right Wing Politics">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-patriot-navy to-patriot-red py-12">
        <div className="container-custom text-white">
          <h1 className="heading-xl mb-2">Our Videos</h1>
          <p className="text-lg text-gray-100">
            Browse our collection of political commentary and analysis
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="card p-6 group cursor-pointer">
                <div className="bg-gray-300 dark:bg-gray-700 aspect-video rounded-lg mb-4 flex items-center justify-center group-hover:bg-gray-400 dark:group-hover:bg-gray-600 transition-colors">
                  <span className="text-gray-500 text-center">
                    Video Thumbnail
                  </span>
                </div>
                <h3 className="heading-md mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>{video.date}</span>
                  <span>{video.views} views</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              For all videos, visit our YouTube channel
            </p>
            <a
              href={process.env.NEXT_PUBLIC_YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
