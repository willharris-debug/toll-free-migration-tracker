import { NextRequest, NextResponse } from "next/server";
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isAuthed = request.cookies.get("auth")?.value === "1";
  const exempt = ["/login", "/api/auth"];
  if (!isAuthed && !exempt.some(p => pathname.startsWith(p))) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}
export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"] };
