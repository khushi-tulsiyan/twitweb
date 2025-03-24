import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get the backend URL from environment or use default
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    
    // Make the request to the backend API
    const response = await fetch(`${backendUrl}/api/trends/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // If the response is not ok, throw an error
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return NextResponse.json(
        { error: errorData?.error || 'Failed to fetch trends from backend' },
        { status: response.status }
      );
    }

    // Parse the response data
    const data = await response.json();
    
    // Return the data from the backend
    return NextResponse.json(data);
  } catch (error) {
    console.error('API proxy error:', error);
    return NextResponse.json(
      { error: 'Error connecting to backend service' },
      { status: 500 }
    );
  }
} 