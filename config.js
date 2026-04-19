// ========================================
// CONFIGURATION FILE
// Edit these values with your actual credentials
// ========================================

window.AppConfig = {
  // Google OAuth Client ID (get from https://console.cloud.google.com)
  googleClientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
  
  // Google Analytics Measurement ID (get from https://analytics.google.com)
  analyticsId: 'G-YOUR_ID',
  
  // Phone Lookup API (already configured)
  phoneApiUrl: 'https://nv6.ek4nsh.in/api/proxy',
  
  // App Name
  appName: 'Data Breach',
  appUrl: window.location.origin
};

// ========================================
// HOW TO GET YOUR CREDENTIALS:
// ========================================

// GOOGLE CLIENT ID:
// 1. Go to https://console.cloud.google.com
// 2. Select your project (or create new)
// 3. Go to APIs & Services → Credentials
// 4. Click "Create Credentials" → "OAuth client ID"
// 5. Application type: "Web application"
// 6. Name: "Data Breach"
// 7. Authorized redirect URIs:
//    - http://localhost:3000/callback.html
//    - https://yourdomain.vercel.app/callback.html
// 8. Copy the Client ID (ends with .com)

// GOOGLE ANALYTICS:
// 1. Go to https://analytics.google.com
// 2. Start Measurement
// 3. Enter website name and URL
// 4. Copy the Measurement ID (starts with G-)

// ========================================
// DEPLOY TO VERCEL:
// ========================================
// vercel env add GOOGLE_CLIENT_ID your_value
// vercel env add GOOGLE_ANALYTICS_ID G-XXXXXX
// vercel deploy