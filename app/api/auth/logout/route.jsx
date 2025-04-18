import { NextResponse } from "next/server";

export async function POST() {

  const response = NextResponse.json({ message: "Logged out successfully" }, { status: 200 });
  response.cookies.set("directus_session_token", "", {
    path: "/",
    httpOnly: true,
    secure: true,  
    sameSite: "lax",
    expires: new Date(0), 
  });

  return response;
}
