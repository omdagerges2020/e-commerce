export function middleware(req) {
    const response = NextResponse.next();
  
    // Add CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*'); // Adjust for specific domains if necessary
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    // Handle OPTIONS request for preflight
    if (req.method === 'OPTIONS') {
      return new Response(null, {
        headers: response.headers,
      });
    }
  
    return response;
  }
  
  export const config = {
    matcher: '/api/:path*', // Match only API routes
  };

  