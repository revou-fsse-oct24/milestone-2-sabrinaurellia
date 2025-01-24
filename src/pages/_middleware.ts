import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies['auth-token'];
  if (!token && req.nextUrl.pathname !== '/login') {
    return NextResponse.redirect('/login');
  }
  return NextResponse.next();
}