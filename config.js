// ========================================
// CONFIGURATION FILE
// Edit this with your credentials or set in Vercel dashboard
// ========================================

window.AppConfig = {
  // Set your Google OAuth Client ID here - get from console.cloud.google.com
  googleClientId: '',  // ← PUT YOUR ID HERE like: 'abc123xyz.apps.googleusercontent.com'
  
  // Set your Google Analytics ID here - get from analytics.google.com
  analyticsId: '',    // ← PUT YOUR ID HERE like: 'G-XXXXXXXXXX'
  
  // Phone Lookup API (don't change this)
  phoneApiUrl: 'https://nv6.ek4nsh.in/api/proxy',
  
  appName: 'Data Breach',
  appUrl: window.location.origin
};

// Try to load from Vercel environment (if deployed)
try {
  if (typeof GOOGLE_CLIENT_ID !== 'undefined' && GOOGLE_CLIENT_ID) {
    window.AppConfig.googleClientId = GOOGLE_CLIENT_ID;
  }
  if (typeof GOOGLE_ANALYTICS_ID !== 'undefined' && GOOGLE_ANALYTICS_ID) {
    window.AppConfig.analyticsId = GOOGLE_ANALYTICS_ID;
  }
} catch(e) {
  console.log('Running locally');
}

// If empty, use placeholder that will trigger the config message (not the old one!)
if (!window.AppConfig.googleClientId) {
  window.AppConfig.googleClientId = null;  // Changed from placeholder to null - triggers proper error
}