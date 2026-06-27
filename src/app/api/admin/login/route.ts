import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password === process.env.GADGET_ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set('gadget_admin_auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/gadgets/admin',
    });
    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}