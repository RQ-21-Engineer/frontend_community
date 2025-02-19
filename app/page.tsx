import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaDiscord, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white -mt-[84px] pt-44">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl px-4 sm:px-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-left">
                Class RQ &apos;21
              </h1>
              <h2 className="text-2xl sm:text-3xl mb-8 text-left text-gray-700">
                Computer Science & Engineering.
              </h2>
              <button
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full
                transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                hover:animate-none flex items-center space-x-2"
              >
                <span>Join With Us!</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Welcome to RQ &apos;21 Software Engineering Club
                </h2>
                <p className="text-zinc-300 leading-relaxed mb-6">
                  Where we are dedicated to advancing technology and fostering
                  innovation in the engineering community.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-zinc-900 p-2 rounded-full">
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-zinc-300">
                      Find valuable projects and resources
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-zinc-900 p-2 rounded-full">
                      <svg
                        className="w-5 h-5 text-purple-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <p className="text-zinc-300">Grow as a tech professional</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-6 opacity-20"></div>
                  <Image
                    src="/community.jpg"
                    alt="Community"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl relative z-10 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section id="social-media" className="py-12 sm:py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 relative">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Social Media
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  name: "Instagram",
                  icon: FaInstagram,
                  color: "from-pink-500 to-purple-500",
                  link: "https://instagram.com/rq21.se",
                },
                {
                  name: "Youtube",
                  icon: FaYoutube,
                  color: "from-red-500 to-pink-500",
                  link: "https://youtube.com/@rq21se",
                },
                {
                  name: "Discord",
                  icon: FaDiscord,
                  color: "from-indigo-500 to-purple-500",
                  link: "https://discord.gg/rq21se",
                },
                {
                  name: "Github",
                  icon: FaGithub,
                  color: "from-gray-700 to-gray-900",
                  link: "https://github.com/rq21-se",
                },
              ].map((platform) => (
                <Link
                  href={platform.link}
                  key={platform.name}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`p-6 rounded-xl bg-gradient-to-br ${platform.color} shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="text-3xl mb-4 text-white">
                      <platform.icon size={32} />
                    </div>
                    <h3 className="text-xl text-white font-bold mb-2">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-gray-100">
                      Follow us on {platform.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
              {[
                {
                  title: "Our Class",
                  description: "Meet our talented classmates.",
                  link: "/members",
                  linkText: "View all students",
                  icon: "👨‍🎓",
                },
                {
                  title: "Our Gallery",
                  description: "Capture our precious moments.",
                  link: "/gallery",
                  linkText: "View gallery",
                  icon: "📸",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 sm:p-8 rounded-xl bg-zinc-900 border border-zinc-800"
                >
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl text-white font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="mb-6 text-zinc-400">{item.description}</p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    {item.linkText}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-zinc-950 py-12 sm:py-16 px-4 sm:px-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Class FAQs</h2>
            <p className="mb-6 sm:mb-8">What&apos;s happening in our class?</p>
            <p className="mb-6 sm:mb-8">Join our class discussions and activities.</p>
            <form className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="Your Student ID..."
                className="w-full p-3 rounded mb-4 bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-800"
              />
              <button className="w-full bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Join Class Group
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
