import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      name,
      email,
      phone,
      location,
      project,
      message,
      lead_type,
    } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { message: "Name and phone are required" },
        { status: 400 }
      );
    }

    const query = `
      INSERT INTO leads 
      (name, email, phone, location, project, message, lead_type)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    await pool.execute(query, [
      name,
      email,
      phone,
      location,
      project,
      message,
      lead_type || "general",
    ]);

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully",
    });

  } catch (error) {
    console.error("Lead API Error:", error);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
