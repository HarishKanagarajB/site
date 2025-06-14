import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const careersFormUrl = process.env.NEXT_PUBLIC_CAREERS_FORM;
  if (!careersFormUrl) {
    throw new Error("Contact form URL is not defined.");
  }

  try {
    const payload = await req.json();

    // Send the request to the Apps Script URL
    const response = await fetch(careersFormUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // Check if the response is JSON
    const contentType = response.headers.get("Content-Type");

    if (!contentType?.includes("application/json")) {
      const responseText = await response.text();
      console.error("Received non-JSON response:", responseText); // Log the raw HTML for debugging
      return NextResponse.json({
        success: false,
        error: "Received non-JSON response. Likely an error page.",
      });
    }

    // If it's JSON, parse it and return it
    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error("Error in proxy:", error);

    // Check if the error is an instance of Error
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }

    // If it's not an instance of Error, handle it as a generic unknown error
    return NextResponse.json({ success: false, error: "An unknown error occurred" });
  }
}
