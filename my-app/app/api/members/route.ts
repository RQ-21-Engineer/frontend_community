import { members } from '@/data/members';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('search')?.toLowerCase();

  if (query) {
    const filtered = members.filter(member => 
      member.name.toLowerCase().includes(query) ||
      member.skills.some(skill => skill.toLowerCase().includes(query))
    );
    return NextResponse.json(filtered);
  }

  return NextResponse.json(members);
}
