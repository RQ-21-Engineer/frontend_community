import { members } from '@/data/members';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  const member = members.find(m => m.github === params.username);
  
  if (!member) {
    return new NextResponse('Member not found', { status: 404 });
  }

  return NextResponse.json(member);
}
