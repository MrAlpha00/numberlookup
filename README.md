# 🛡️ Data Breach - OSINT Investigation Toolkit

A powerful open-source intelligence platform with 30+ modules for phone lookup, email search, social media OSINT, network analysis, and more. Built for security researchers and investigators.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **31+ OSINT Modules** across 8 categories
- **Phone Lookup** with your API key integration
- **Email Search** across data breaches
- **Network Analysis** - IP, WHOIS, DNS, Port Scanner
- **Social OSINT** - Telegram, Username Search, Instagram
- **Finance Tools** - IFSC, GST, UPI, BIN verification (India)
- **Hardware Lookup** - MAC Address, IMEI Check
- **Security Tools** - SSL, Hash, URL Scanner
- **Utility Tools** - JSON to CSV, Base64, Shipment Tracking

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

## 📁 Project Structure

```
├── index.html          # Home page
├── login.html         # Login page
├── register.html      # Registration page
├── dashboard.html   # Main dashboard
├── privacy.html     # Privacy policy
├── terms.html       # Terms & conditions
├── refund.html     # Refund policy (no refunds)
├── styles.css      # Main stylesheet
├── script.js        # JavaScript functionality
├── modules/         # Module pages
│   ├── phone-lookup.html
│   ├── ip-lookup.html
│   ├── email-lookup.html
│   └── ...
├── env.example      # Environment variables template
├── vercel.json     # Vercel configuration
└── README.md       # This file
```

## 🔧 Configuration

### Phone Lookup API

1. Open `modules/phone-lookup.html`
2. Enter your API key in the input field
3. Your key is saved locally for future use

### Environment Variables

Copy `env.example` to `.env` and configure:

```bash
PHONE_API_KEY=your_key_here
SESSION_SECRET=your_secret_key
```

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

## 🎨 Design

- **Theme**: Cyber Noir Terminal
- **Colors**: Dark background with neon cyan/magenta accents
- **Fonts**: Orbitron (headings), JetBrains Mono (body)
- **Effects**: Glassmorphism, neon glow, animations

## 📋 Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing page with features and categories |
| `login.html` | User login with OAuth options |
| `register.html` | New user registration |
| `dashboard.html` | Module access dashboard |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms & conditions |
| `refund.html` | No refund policy |

## 🔐 Security

- Session-based authentication (localStorage)
- No server-side data storage
- Client-side API key storage
- HTTPS recommended for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## ⚠️ Disclaimer

This tool is for educational and research purposes only. Users are responsible for ensuring compliance with applicable laws and regulations in their jurisdiction. The developers assume no liability for misuse of this software.

---

**Data Breach** - Unveil the Hidden 🔍