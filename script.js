// Data Breach OSINT Toolkit - JavaScript

// ============================================
// AUTHENTICATION
// ============================================
const Auth = {
  sessionKey: 'databreach_session',
  
  login: (email, password) => {
    if (email && password) {
      const session = {
        email,
        loggedIn: true,
        timestamp: Date.now()
      };
      localStorage.setItem(Auth.sessionKey, JSON.stringify(session));
      return true;
    }
    return false;
  },
  
  register: (name, email, password) => {
    if (name && email && password) {
      const users = JSON.parse(localStorage.getItem('databreach_users') || '[]');
      const exists = users.find(u => u.email === email);
      if (exists) return false;
      
      users.push({ name, email, password, timestamp: Date.now() });
      localStorage.setItem('databreach_users', JSON.stringify(users));
      
      Auth.login(email, password);
      return true;
    }
    return false;
  },
  
  logout: () => {
    localStorage.removeItem(Auth.sessionKey);
    window.location.href = 'index.html';
  },
  
  isLoggedIn: () => {
    const session = JSON.parse(localStorage.getItem(Auth.sessionKey));
    return session && session.loggedIn;
  },
  
  getUser: () => {
    const session = JSON.parse(localStorage.getItem(Auth.sessionKey));
    return session ? session.email : null;
  }
};

// ============================================
// PASSWORD STRENGTH
// ============================================
const PasswordStrength = {
  check: (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    if (score <= 2) return 'weak';
    if (score <= 4) return 'medium';
    return 'strong';
  }
};

// ============================================
// API CONFIGURATION
// ============================================
const APIConfig = {
  key: 'databreach_api_key',
  
  save: (apiKey) => {
    localStorage.setItem(APIConfig.key, apiKey);
  },
  
  get: () => {
    return localStorage.getItem(APIConfig.key);
  },
  
  has: () => {
    return !!APIConfig.get();
  }
};

// ============================================
// MODULE HANDLERS
// ============================================
const Modules = {
  // Phone Lookup with API
  phoneLookup: async (number, apiKey) => {
    if (!apiKey) {
      throw new Error('API key required. Please configure your API key.');
    }
    
    // Simulating API call - replace with actual API endpoint
    // Example: return await fetch(`https://api.example.com/phone?number=${number}&key=${apiKey}`).then(r => r.json());
    
    await delay(1500);
    
    // Mock result matching your JSON format
    return {
      developer: "Mralpha",
      results: [{
        mobile: number,
        name: "Manjunatha S V",
        fname: "venkatarayappa s c",
        id: "825017733813",
        "circle": "KARNATAKA AIRTEL",
        address: "SALAMAKALAHALLI T. Gollahalli PO Chikkaballapur Gadigivarahalli Chintamani Chikkaballapur Chikkaballapur Karnataka 563125",
        email: "",
        alt: "9972127895"
      }]
    };
  },
  
  // IP Lookup
  ipLookup: async (ip) => {
    await delay(1000);
    return {
      ip: ip,
      isp: 'Example ISP',
      org: 'Example Organization',
      asn: 'AS12345',
      country: 'India',
      region: 'Karnataka',
      city: 'Bangalore',
      timezone: 'Asia/Kolkata',
      lat: 12.9716,
      lon: 77.5946
    };
  },
  
  // Domain WHOIS
  domainWhois: async (domain) => {
    await delay(1200);
    return {
      domain: domain,
      registrar: 'GoDaddy.com LLC',
      createdDate: '2023-01-15',
      expiryDate: '2026-01-15',
      nameServers: ['ns1.example.com', 'ns2.example.com'],
      status: 'clientTransferProhibited',
      registrant: {
        name: 'Private',
        organization: 'REDACTED'
      }
    };
  },
  
  // DNS Records
  dnsLookup: async (domain, type = 'A') => {
    await delay(800);
    const records = {
      A: ['192.168.1.1', '192.168.1.2'],
      AAAA: ['::1'],
      MX: ['mail.example.com'],
      TXT: ['v=spf1 include:_spf.example.com ~all'],
      NS: ['ns1.example.com', 'ns2.example.com'],
      CNAME: ['example.com']
    };
    return {
      domain: domain,
      type: type,
      records: records[type] || []
    };
  },
  
  // Email Lookup
  emailLookup: async (email) => {
    await delay(1500);
    return {
      email: email,
      found: true,
      records: [{
        name: 'John Doe',
        email: email,
        foundIn: 'LinkedIn, Twitter'
      }]
    };
  },
  
  // MAC Address Lookup
  macLookup: async (mac) => {
    await delay(500);
    const vendors = {
      'Apple': 'Apple Inc.',
      'Intel': 'Intel Corporation',
      'Cisco': 'Cisco Systems',
      'Dell': 'Dell Inc.'
    };
    const prefix = mac.substring(0, 8).toUpperCase();
    return {
      mac: mac,
      vendor: vendors[Object.keys(vendors)[0]] || 'Unknown',
      type: 'Ethernet',
     oui: prefix
    };
  },
  
  // IFSC Lookup
  ifscLookup: async (ifsc) => {
    await delay(800);
    return {
      ifsc: ifsc,
      bank: 'State Bank of India',
      branch: 'Bangalore Main',
      address: 'Bangalore, Karnataka',
      contact: '080-12345678',
      district: 'Bangalore',
      state: 'Karnataka'
    };
  },
  
  // BIN Lookup
  binLookup: async (bin) => {
    await delay(600);
    return {
      bin: bin,
      scheme: 'Visa',
      type: 'Debit',
      level: 'Gold',
      bank: 'HDFC Bank',
      country: 'India',
      countryFlag: '🇮🇳'
    };
  },
  
  // GST Verification
  gstLookup: async (gst) => {
    await delay(1000);
    return {
      gstin: gst,
      legalName: 'Example Private Limited',
      tradeName: 'EXAMPLE PVT LTD',
      status: 'Active',
      state: 'Karnataka',
      constitution: 'Private Limited',
      registrationDate: '2020-01-15'
    };
  },
  
  // UPI Lookup
  upiLookup: async (upi) => {
    await delay(700);
    return {
      upiId: upi,
      status: 'Active',
      vpa: upi,
      verified: true
    };
  },
  
  // Port Scanner
  portScan: async (host, ports = [21, 22, 25, 53, 80, 110, 143, 443, 993, 995, 3306, 3389, 5432, 8080]) => {
    const results = [];
    const commonPorts = {
      21: 'FTP',
      22: 'SSH',
      25: 'SMTP',
      53: 'DNS',
      80: 'HTTP',
      110: 'POP3',
      143: 'IMAP',
      443: 'HTTPS',
      993: 'IMAPS',
      995: 'POP3S',
      3306: 'MySQL',
      3389: 'RDP',
      5432: 'PostgreSQL',
      8080: 'HTTP-Proxy'
    };
    
    for (const port of ports) {
      await delay(50);
      // Simulating scan - random results for demo
      const isOpen = Math.random() > 0.5;
      if (isOpen) {
        results.push({
          port: port,
          service: commonPorts[port] || 'Unknown',
          status: 'open'
        });
      }
    }
    
    return { host, portsScanned: ports.length, results };
  },
  
  // Subdomain Enumeration
  subdomainEnum: async (domain) => {
    await delay(2000);
    const subdomains = ['www', 'mail', 'ftp', 'localhost', 'webmail', 'smtp', 'pop', 'ns1', 'webdisk', 'ns2', 'autodiscover'];
    const found = [];
    
    for (const sub of subdomains) {
      await delay(100);
      // Simulating enumeration
      if (Math.random() > 0.3) {
        found.push(`${sub}.${domain}`);
      }
    }
    
    return { domain, subdomains: found };
  },
  
  // Hash Lookup
  hashLookup: async (hash) => {
    await delay(500);
    return {
      hash: hash,
      type: hash.length === 32 ? 'MD5' : hash.length === 40 ? 'SHA-1' : hash.length === 64 ? 'SHA-256' : 'Unknown',
      possible: ['MD5', 'SHA-1', 'SHA-256'],
      cracked: false
    };
  },
  
  // SSL Certificate
  sslLookup: async (domain) => {
    await delay(1200);
    return {
      domain: domain,
      issuer: 'Let's Encrypt',
      validFrom: '2024-01-01',
      validTo: '2025-01-01',
      daysRemaining: 180,
      algorithm: 'RSA 2048',
      selfSigned: false
    };
  },
  
  // URL Scanner
  urlScan: async (url) => {
    await delay(1500);
    return {
      url: url,
      safe: true,
      checks: {
        phishing: false,
        malware: false,
        suspicious: false,
        adultContent: false
      },
      risk: 'Low'
    };
  },
  
  // Pincode Lookup
  pincodeLookup: async (pincode) => {
    await delay(600);
    return {
      pincode: pincode,
      district: 'Bangalore',
      state: 'Karnataka',
      region: 'South Karnataka',
      delivery: 'Delivery',
      sorting: 'Bangalore GPO'
    };
  },
  
  // Vehicle Info
  vehicleLookup: async (vehicleNumber) => {
    await delay(1000);
    return {
      vehicleNumber: vehicleNumber,
      state: 'Karnataka',
      make: 'Maruti Suzuki',
      model: 'Swift',
      fuel: 'Petrol',
      registrationDate: '2020-01-15',
      expiryDate: '2035-01-15',
      ownerName: 'Private Owner',
      vehicleType: 'LMV'
    };
  },
  
  // Court Records
  courtRecords: async (caseNumber) => {
    await delay(1500);
    return {
      caseNumber: caseNumber,
      court: 'District Court Bangalore',
      caseType: 'Civil',
      status: 'Pending',
      nextHearing: '2024-03-15',
      parties: ['Petitioner', 'Respondent']
    };
  },
  
  // Aadhaar Verification
  aadhaarVerify: async (aadhaar) => {
    await delay(1000);
    return {
      aadhaar: aadhaar,
      status: 'Valid',
      ageBand: '25-30',
      gender: 'Male',
      state: 'Karnataka',
      verified: true
    };
  },
  
  // PAN Verification
  panVerify: async (pan) => {
    await delay(1000);
    return {
      pan: pan,
      name: 'JOHN DOE',
      dob: '01-01-1990',
      status: 'Valid',
      cardType: 'Individual'
    };
  },
  
  // IMEI Check
  imeiCheck: async (imei) => {
    await delay(800);
    return {
      imei: imei,
      valid: true,
      brand: 'Apple',
      model: 'iPhone 14 Pro',
      manufacturer: 'Foxconn',
      region: 'India'
    };
  },
  
  // JSON to CSV
  jsonToCsv: (json) => {
    try {
      const data = typeof json === 'string' ? JSON.parse(json) : json;
      if (Array.isArray(data) && data.length > 0) {
        const headers = Object.keys(data[0]);
        const rows = data.map(row => headers.map(h => row[h]).join(','));
        return [headers.join(','), ...rows].join('\n');
      }
      return '';
    } catch (e) {
      throw new Error('Invalid JSON format');
    }
  },
  
  // Base64 Utility
  base64Utility: {
    encode: (text) => btoa(text),
    decode: (text) => atob(text)
  },
  
  // Shipment Tracker
  shipmentTrack: async (trackingId) => {
    await delay(1000);
    return {
      trackingId: trackingId,
      carrier: 'Bluedart',
      status: 'In Transit',
      currentLocation: 'Bangalore',
      estimatedDelivery: '2024-02-15',
      events: [
        { date: '2024-02-10', location: 'Bangalore', status: 'Out for Delivery' },
        { date: '2024-02-09', location: 'Bangalore', status: 'Arrived at Facility' },
        { date: '2024-02-08', location: 'Mumbai', status: 'Dispatched' }
      ]
    };
  }
};

// Utility: Delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ============================================
// UI FUNCTIONS
// ============================================
const UI = {
  showLoader: (element) => {
    if (element) {
      element.innerHTML = '<span class="loader"></span>';
    }
  },
  
  hideLoader: (element) => {
    if (element) {
      element.innerHTML = '';
    }
  },
  
  showResult: (container, data, template) => {
    const resultContainer = document.querySelector(container);
    if (resultContainer) {
      resultContainer.innerHTML = template(data);
      resultContainer.classList.add('active');
    }
  },
  
  copyToClipboard: async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    } catch (e) {
      console.error('Failed to copy:', e);
    }
  },
  
  showError: (message) => {
    alert(message);
  }
};

// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Check authentication on protected pages
  const protectedPages = ['dashboard.html'];
  const currentPage = window.location.pathname.split('/').pop();
  
  if (protectedPages.includes(currentPage) && !Auth.isLoggedIn()) {
    window.location.href = 'login.html';
    return;
  }
  
  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      if (Auth.login(email, password)) {
        window.location.href = 'dashboard.html';
      } else {
        UI.showError('Invalid email or password');
      }
    });
  }
  
  // Register form
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    const passwordInput = document.getElementById('password');
    const strengthBar = document.querySelector('.password-strength-bar');
    
    if (passwordInput && strengthBar) {
      passwordInput.addEventListener('input', () => {
        const strength = PasswordStrength.check(passwordInput.value);
        strengthBar.className = 'password-strength-bar ' + strength;
      });
    }
    
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const terms = document.getElementById('terms').checked;
      
      if (password !== confirmPassword) {
        UI.showError('Passwords do not match');
        return;
      }
      
      if (!terms) {
        UI.showError('Please accept the Terms & Conditions');
        return;
      }
      
      if (Auth.register(name, email, password)) {
        window.location.href = 'dashboard.html';
      } else {
        UI.showError('Registration failed. Please try again.');
      }
    });
  }
  
  // Logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', Auth.logout);
  }
  
  // Toggle password visibility
  const togglePasswordBtns = document.querySelectorAll('.toggle-password');
  togglePasswordBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      if (input.type === 'password') {
        input.type = 'text';
        btn.textContent = '👁️‍🗨️';
      } else {
        input.type = 'password';
        btn.textContent = '👁️';
      }
    });
  });
  
  // Phone Lookup Module
  const phoneForm = document.getElementById('phoneForm');
  if (phoneForm) {
    const apiKeyInput = document.getElementById('apiKey');
    const phoneInput = document.getElementById('phoneNumber');
    const resultBtn = document.getElementById('lookupBtn');
    const resultContainer = document.getElementById('resultContainer');
    
    // Load saved API key
    if (apiKeyInput && APIConfig.has()) {
      apiKeyInput.value = APIConfig.get();
    }
    
    phoneForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const apiKey = apiKeyInput?.value;
      const phone = phoneInput?.value;
      
      if (!apiKey) {
        UI.showError('Please enter your API key');
        return;
      }
      
      if (!phone) {
        UI.showError('Please enter a phone number');
        return;
      }
      
      APIConfig.save(apiKey);
      
      try {
        UI.showLoader(resultBtn);
        resultBtn.disabled = true;
        
        const result = await Modules.phoneLookup(phone, apiKey);
        
        resultContainer.innerHTML = resultTemplate(result);
        resultContainer.classList.add('active');
      } catch (error) {
        UI.showError(error.message);
      } finally {
        UI.hideLoader(resultBtn);
        resultBtn.disabled = false;
      }
    });
  }
  
  // Generic module form handler
  const moduleForms = document.querySelectorAll('.module-form');
  moduleForms.forEach(form => {
    if (form.id === 'phoneForm') return; // Already handled
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const inputs = form.querySelectorAll('input, select');
      const submitBtn = form.querySelector('button[type="submit"]');
      const resultContainer = form.nextElementSibling?.classList.contains('result-container') 
        ? form.nextElementSibling 
        : document.getElementById('resultContainer');
      
      const data = {};
      inputs.forEach(input => {
        data[input.id] = input.value;
      });
      
      try {
        UI.showLoader(submitBtn);
        submitBtn.disabled = true;
        
        await delay(500);
        
        if (resultContainer) {
          resultContainer.innerHTML = genericResultTemplate({ success: true, data });
          resultContainer.classList.add('active');
        }
      } catch (error) {
        UI.showError(error.message);
      } finally {
        UI.hideLoader(submitBtn);
        submitBtn.disabled = false;
      }
    });
  });
});

// Result Templates
function resultTemplate(result) {
  const r = result.results ? result.results[0] : result;
  return `
    <div class="result-card">
      <div class="result-header">
        <h3>🔍 Search Results</h3>
        <div class="result-actions">
          <button class="btn btn-small btn-secondary" onclick="window.print()">Export</button>
        </div>
      </div>
      <div class="result-body">
        ${Object.entries(r).map(([key, value]) => `
          <div class="result-field">
            <span class="result-label">${key}</span>
            <span class="result-value">${value || '-'}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function genericResultTemplate(data) {
  return `
    <div class="result-card">
      <div class="result-header">
        <h3>✓ Result</h3>
      </div>
      <div class="result-body">
        ${Object.entries(data.data || data).map(([key, value]) => `
          <div class="result-field">
            <span class="result-label">${key}</span>
            <span class="result-value">${typeof value === 'object' ? JSON.stringify(value) : value}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ============================================
// EXPORT FOR TEMPLATES
// ============================================
window.Modules = Modules;
window.UI = UI;
window.Auth = Auth;
window.APIConfig = APIConfig;