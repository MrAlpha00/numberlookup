# 🛡️ Data Breach - OSINT Investigation Toolkit

A powerful open-source intelligence platform with 30+ modules for phone lookup, email search, social media OSINT, network analysis, and more. Built for security researchers and investigators.

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **31+ OSINT Modules** across 8 categories
- **Phone Lookup** with your API integration
- **Email Search** across data breaches
- **Network Analysis** - IP, WHOIS, DNS, Port Scanner
- **Social OSINT** - Telegram, Username Search, Instagram
- **Finance Tools** - IFSC, GST, UPI, BIN verification (India)
- **Hardware Lookup** - MAC Address, IMEI Check
- **Security Tools** - SSL, Hash, URL Scanner
- **Utility Tools** - JSON to CSV, Base64, Shipment Tracking
- **Google Authentication** - Sign in with Google
- **Google Analytics** - Track website visitors

---

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/numberlookup.git
cd numberlookup

# Open in browser
# Just open index.html in your browser
# Or use a local server:
npx serve .
# or
python -m http.server 8000
```

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or push to GitHub and connect to Vercel
```

---

## 🔧 Configuration Guide

### 1. Google Analytics Setup

**How to get your Google Analytics ID:**

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **"Start Measuring"**
4. Enter your website name (e.g., "Data Breach")
5. Enter website URL: `https://yourdomain.vercel.app`
6. Click **Create**
7. Copy the **Measurement ID** (starts with `G-XXXXXXXXXX`)
8. Add it to your code or environment variables

**Add to your site:**

```html
<!-- Add to <head> in all HTML files -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID');
</script>
```

**Or in env.example:**
```
GOOGLE_ANALYTICS_ID=G-YOUR_ID
```

---

### 2. Google Sign-In OAuth Setup

**How to create Google OAuth credentials:**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click **"Select a project"** → **"New Project"**
3. Name: "Data Breach OSINT"
4. Click **Create**
5. Go to **APIs & Services** → **Library**
6. Search and enable **Google+ API** or **Identity Platform**
7. Go to **OAuth consent screen**
8. Select **External** → **Create**
9. Fill in:
   - App name: "Data Breach"
   - User support email: your@email.com
   - Developer email: your@email.com
10. Click **Save and Continue**
11. Click **Add or remove scopes** → Search "email" & "profile" → **Update**
12. Click **Save and Continue**
13. Click **Add users** → Enter your email
14. Click **Save and Continue**
15. Go to **Credentials** → **Create Credentials** → **OAuth client ID**
16. Application type: **Web application**
17. Name: "Data Breach Web"
18. **Authorized redirect URIs:**
   - `http://localhost:3000`
   - `https://yourdomain.vercel.app`
   - `https://yourdomain.vercel.app/callback`
19. Click **Create**
20. Copy **Client ID** and **Client Secret**

**Add to your site:**

```
GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret
```

---

### 3. Other API Keys (Optional)

#### Phone Lookup API (Already configured)
```
PHONE_API_URL=https://nv6.ek4nsh.in/api/proxy
# No API key needed - just phone number
```

#### Session Secret (Generate your own)
```bash
# Generate a random secret:
openssl rand -base64 32
```

---

## 📁 Project Structure

```
├── index.html          # Home page
├── login.html         # Login page (with Google Sign-In)
├── register.html    # Registration page
├── dashboard.html   # Main dashboard
├── privacy.html     # Privacy policy
├── terms.html       # Terms & conditions
├── refund.html     # Refund policy (no refunds)
├── styles.css      # Main stylesheet
├── script.js      # JavaScript functionality
├── modules/        # Module pages (28 modules)
├── env.example    # Environment template
├── vercel.json    # Vercel configuration
└── README.md      # This file
```

---

## 📱 Modules Overview

| Category | Modules |
|----------|---------|
| 🪪 Identity | Phone Intel, Email Lookup, Aadhaar Verify, PAN Verify |
| 📱 Social | Telegram Lookup, Username Search, Social Scan, Instagram OSINT |
| 🌍 Network | IP Lookup, Domain WHOIS, Port Scanner, DNS Records, Subdomain Enum |
| 📍 Regional | Court Records, Pincode Lookup, Vehicle Info |
| 💻 Hardware | MAC Address Lookup, IMEI Check |
| 💳 Finance | UPI Lookup, IFSC Lookup, GST Verification, BIN Lookup |
| 🔐 Security | SSL Certificate, Hash Lookup, URL Scanner |
| 🧑‍💻 Developer | JSON to CSV |
| 🚚 Logistics | Shipment Tracker |
| 🧰 Utility | Base64 Encode/Decode |

---

## 🎨 Design

- **Theme**: Cyber Noir Terminal
- **Colors**: Dark background with neon cyan/magenta accents
- **Fonts**: Orbitron (headings), JetBrains Mono (body)
- **Effects**: Glassmorphism, neon glow, animations

---

## 📋 Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing page with features and categories |
| `login.html` | User login with Google Sign-In |
| `register.html` | New user registration |
| `dashboard.html` | Module access dashboard |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms & conditions |
| `refund.html` | No refund policy |

---

## 🔐 Environment Variables

Copy `env.example` to `.env`:

```bash
# ===== GOOGLE =====
GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret

# ===== ANALYTICS =====
GOOGLE_ANALYTICS_ID=G-YOUR_ID

# ===== PHONE API =====
PHONE_API_URL=https://nv6.ek4nsh.in/api/proxy

# ===== SECURITY =====
SESSION_SECRET=your_random_secret_key
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT License - see LICENSE file for details.

---

## ⚠️ Disclaimer

This tool is for educational and research purposes only. Users are responsible for ensuring compliance with applicable laws and regulations in their jurisdiction. The developers assume no liability for misuse of this software.

---

**Data Breach** - Unveil the Hidden 🔍