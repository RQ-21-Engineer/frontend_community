import Image from 'next/image';
import Link from 'next/link';
import type { Member } from '@/data/members';

async function getMemberData(username: string): Promise<Member> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/members/${username}`);
  if (!res.ok) throw new Error('Failed to fetch member');
  return res.json();
}

export default async function MemberPage({ params }: { params: { username: string } }) {
  const member = await getMemberData(params.username);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/members"
          className="inline-flex items-center text-blue-600 mb-8 hover:text-blue-700"
        >
          ← Back to Members
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 relative h-64 md:h-auto md:w-96">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
              <p className="text-gray-600 mb-4">{member.role}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {member.bio && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">About</h2>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              )}

              {member.projects && member.projects.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">Projects</h2>
                  <div className="space-y-4">
                    {member.projects.map(project => (
                      <div key={project.id} className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold">{project.name}</h3>
                        <p className="text-gray-600 text-sm">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
