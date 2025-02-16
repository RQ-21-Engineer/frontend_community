import { members, slugify } from '@/data/members';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('search')?.toLowerCase();

  if (query) {
    const filtered = members.filter(member => 
      member.name.toLowerCase().includes(query) ||  // Search original name
      slugify(member.name).includes(query)         // Also search slugified version
    );
    return NextResponse.json(filtered);
  }

  return NextResponse.json(members);
}
