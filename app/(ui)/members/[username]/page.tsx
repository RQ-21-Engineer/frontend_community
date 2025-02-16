import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe, FaArrowLeft } from "react-icons/fa";
import type { Member } from "@/data/members";

async function getMemberData(username: string): Promise<Member> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/members/${username}`
  );
  if (!res.ok) throw new Error("Failed to fetch member");
  return res.json();
}

export default async function MemberPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const member = await getMemberData((await params).username);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 to-black py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto relative">
            <div className="absolute top-0 left-0 z-10">
              <Link
                href="/members"
                className="inline-flex items-center text-blue-400 mb-8 hover:text-blue-300 transition-colors"
              >
                <FaArrowLeft className="mr-2" /> Back to Members
              </Link>
            </div>

            <div className="md:flex items-center space-x-8 pt-16">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden mb-6 md:mb-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {member.name}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-xl text-blue-400">{member.role}</span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">Class of {member.year}</span>
                </div>
                {/* Added Quote here */}
                {member.quote && (
                  <blockquote className="text-lg italic text-blue-200">
                    &quot;{member.quote}&quot;
                  </blockquote>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left Column - About, Quote, Skills */}
          <div className="md:col-span-2 space-y-8">
            {member.bio && (
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">About</h2>
                <p className="text-zinc-300 leading-relaxed">{member.bio}</p>
              </div>
            )}

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm
                      border border-blue-500/20 hover:bg-blue-600/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {member.projects && member.projects.length > 0 && (
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">
                  Projects
                </h2>
                <div className="space-y-4">
                  {member.projects.map((project) => (
                    <div
                      key={project.id}
                      className="p-6 bg-zinc-800/50 rounded-xl hover:bg-zinc-800 transition-colors"
                    >
                      <h3 className="text-xl font-semibold mb-2 text-blue-300">
                        {project.name}
                      </h3>
                      <p className="text-zinc-400">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Stats, Links & Connections */}
          <div className="space-y-8">
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-zinc-500 text-sm">Student ID</p>
                  <p className="text-zinc-200">{member.npm}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">GitHub</p>
                  <a
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaGithub />
                    <span>@{member.github}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Connect Card - Updated */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Connect</h2>
              <div className="space-y-4">
                <a
                  href={`https://github.com/${member.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-xl hover:bg-zinc-900 transition-all group"
                >
                  <span className="text-zinc-300 group-hover:text-white">
                    GitHub Profile
                  </span>
                  <FaGithub className="text-zinc-400 group-hover:text-blue-400" />
                </a>
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-xl hover:bg-zinc-900 transition-all group"
                  >
                    <span className="text-zinc-300 group-hover:text-white">
                      Personal Website
                    </span>
                    <FaGlobe className="text-zinc-400 group-hover:text-blue-400" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
