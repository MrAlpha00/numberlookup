# Data Breach - OSINT Toolkit Specification

## Project Overview
- **Project Name**: Data Breach - OSINT Investigation Toolkit
- **Type**: Multi-page Web Application
- **Core Functionality**: A powerful OSINT toolkit with 30+ modules across 8 categories for phone lookup, email search, social media OSINT, network analysis, regional data, hardware lookup, finance tools, security tools, and utilities.
- **Target Users**: Security researchers, investigators, cybersecurity professionals, journalists

## UI/UX Specification

### Design Theme: "Cyber Noir Terminal"
- **Aesthetic**: Dark cyberpunk with neon accents, terminal/hacker vibe
- **Primary Background**: Deep black (#0a0a0f) with subtle grid pattern
- **Secondary Background**: Dark charcoal (#12121a) with glassmorphism
- **Accent Colors**:
  - Primary: Electric Cyan (#00f0ff)
  - Secondary: Neon Magenta (#ff00aa)
  - Tertiary: Toxic Green (#00ff88)
  - Warning: Orange (#ff8800)
  - Error: Red (#ff3366)
- **Typography**:
  - Headings: "Orbitron" (futuristic, tech feel)
  - Body: "JetBrains Mono" (monospace, terminal aesthetic)
  - Fallback: monospace

### Layout Structure
- **Navigation**: Fixed top navbar with logo, nav links, auth buttons
- **Sections**: Full-width with max-container (1400px)
- **Grid**: CSS Grid for module cards (auto-fit, minmax)
- **Responsive**: Mobile-first, breakpoint at 768px, 1024px, 1280px

### Visual Effects
- **Glassmorphism**: backdrop-filter blur on cards
- **Neon glow**: box-shadow with accent colors
- **Hover animations**: Scale + glow transition (0.3s ease)
- **Scanline effect**: Subtle animated overlay
- **Particle background**: Floating code/grid effect

## Pages Structure

### 1. Home Page (index.html)
- Hero section with tagline "Unveil the Hidden"
- Feature highlights with animated icons
- Category showcase cards (8 categories)
- Live stats counter
- CTA buttons to login/register
- Footer with links

### 2. Login Page (login.html)
- Centered card with glassmorphism
- Email/Username field
- Password field with show/hide toggle
- Remember me checkbox
- Login button with loading state
- "Forgot password?" link
- OAuth buttons (Google, GitHub) - decorative
- Link to register

### 3. Register Page (register.html)
- Full name field
- Email field
- Password field with strength indicator
- Confirm password field
- Terms acceptance checkbox
- Register button
- Link to login

### 4. Privacy Policy Page (privacy.html)
- Clean document layout
- Sections: Data Collection, Data Usage, Security, Cookies, Contact

### 5. Terms & Conditions Page (terms.html)
- Acceptance required section
- User obligations
- Limitation of liability

### 6. Refund Policy Page (refund.html)
- No refund mention as requested
- Clear statement about no refunds

### 7. Dashboard (dashboard.html) - After Login
- Welcome message with user name
- Quick access grid to all modules
- Recent activity (placeholder)
- User profile section

### 8. Data Breach Module Page (modules/)
- Category-based navigation
- Individual module pages for each tool

## Module Categories & Tools

### 🪪 Identity (6 Modules)
1. **Phone Intel** - Phone number lookup with API
2. **Phone Intel (Lilac)** - Alternative phone lookup
3. **Email Lookup** - Email to person lookup
4. **Aadhaar Info** - Aadhaar number verification
5. **Aadhaar Family Node** - Family member lookup
6. **PAN Verification** - PAN card verification

### 📱 Social (4 Modules)
7. **Telegram Lookup** - Telegram user lookup
8. **Username Search** - Cross-platform username search
9. **Social Media Scan** - Social media profile scan
10. **Instagram OSINT** - Instagram information gatherer

### 🌍 Network (5 Modules)
11. **IP Lookup** - IP address information
12. **Domain WHOIS** - Domain whois lookup
13. **Port Scanner** - Common port scanner
14. **DNS Records** - DNS record retrieval
15. **Subdomain Enum** - Subdomain enumeration

### 📍 Regional (4 Modules)
16. **Court Records** - Indian court records search
17. **Pincode Lookup** - Indian pincode lookup
18. **Vehicle Info** - Vehicle registration lookup
19. **Vehicle RC Details** - Vehicle RC verification

### 💻 Hardware (2 Modules)
20. **MAC Address Lookup** - MAC vendor lookup
21. **IMEI Check** - IMEI validation and info

### 💳 Finance (4 Modules)
22. **UPI Lookup** - UPI ID verification
23. **IFSC Lookup** - Bank IFSC code lookup
24. **GST Verification** - GST number verification
25. **BIN Lookup** - Bank Identification Number lookup

### 🔐 Security (3 Modules)
26. **SSL Certificate** - SSL certificate details
27. **Hash Lookup** - Hash identification
28. **URL Scanner** - URL safety scanner

### 🧑‍💻 Developer (1 Module)
29. **JSON to CSV** - Convert JSON to CSV

### 🚚 Logistics (1 Module)
30. **Shipment Tracker** - Courier tracking

### 🧰 Utility (1 Module)
31. **Base64 Encode/Decode** - Base64 utility

## Functionality Specification

### Authentication
- Login/Register forms with validation
- Session storage for demo (mock auth)
- Protected dashboard redirect

### Number Lookup Module (Primary)
- Input field for phone number
- API key configuration (user provides)
- Result display matching provided JSON format
- Fields: mobile, name, fname, id, circle, address, email, alt

### Other Modules
- Each module has:
  - Input form with validation
  - API call simulation (mock data for demo)
  - Result display card
  - Copy/Clear functionality

## Acceptance Criteria
1. ✅ Home page loads with animations
2. ✅ All navigation links work
3. ✅ Login/Register forms validate correctly
4. ✅ Dashboard shows after successful login (mock)
5. ✅ All module pages are accessible
6. ✅ Number lookup displays formatted results
7. ✅ Mobile responsive on all devices
8. ✅ No console errors on page load