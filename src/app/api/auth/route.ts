import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = formData.get("password") as string;
  if (password === process.env.TRACKER_PASSWORD) {
    const res = NextResponse.redirect(new URL("/", request.url), { status: 303 });
    res.cookies.set("auth", "1", { httpOnly: true, sameSite: "lax", maxAge: 60*60*24*7, path: "/" });
    return res;
  }
  const url = new URL("/login", request.url); url.searchParams.set("error", "1");
  return NextResponse.redirect(url);
}
