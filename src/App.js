// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
// Added 'Download' icon to imports
import { ArrowRight, Phone, Mail, Download } from 'lucide-react';
import './App.css';
import { products } from './products';

// --- COMPONENTS ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => (
  <nav className="navbar">
    <div className="container nav-content">
      <Link to="/" className="logo">VIJAYA INDUSTRIES</Link>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Catalog</Link>
        <Link to="/contact">Contact</Link>
        
        {/* NEW: Download Button in Navbar */}
        <a 
          href="/catalog.pdf" 
          download="Vijaya_Industries_Catalog.pdf"
          className="btn-download-nav"
        >
          <Download size={16} /> Download Catalog
        </a>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>VIJAYA INDUSTRIES</h3>
          <p className="footer-sub">Precision Automotive Manufacturing</p>
        </div>
        
        <div className="footer-contact">
          <p><strong>Mr. Prashant Chhatraband</strong></p>
          <p>+91 93260 00050</p>
          {/* NEW: Download Link in Footer */}
          <a href="/catalog.pdf" download className="footer-link">
            Download Catalog PDF
          </a>
        </div>

        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Vijaya Industries. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

// --- PAGES ---

const HomePage = () => (
  <>
    <section className="hero">
      <div className="container hero-content">
        <h1>Precision Clips.<br />Automotive Standard.</h1>
        <p>
          Manufacturing high-quality fender lining, bumper, and trim clips for Maruti, Hyundai, and major automotive brands.
        </p>
        <div className="hero-buttons">
          <Link to="/products" className="btn" style={{ marginRight: '16px', backgroundColor: 'white', color: '#0f172a' }}>
            View Catalog
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Get Quote
          </Link>
        </div>
      </div>
    </section>

    <section className="page container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '40px' }}>
        <h2>Why Choose Us</h2>
        <Link to="/contact" style={{ display: 'flex', alignItems: 'center', color: '#0f172a', fontWeight: '500' }}>
          Partner with us <ArrowRight size={16} style={{ marginLeft: '8px' }}/>
        </Link>
      </div>
      
      <div className="features-grid">
        <div className="card">
          <h3>OEM Quality</h3>
          <p style={{ color: '#64748b', lineHeight: '1.6' }}>
            Our clips are manufactured using high-grade Nylon and POM DELRIN plastic to meet original equipment manufacturer standards.
          </p>
        </div>
        <div className="card">
          <h3>Precision Fit</h3>
          <p style={{ color: '#64748b', lineHeight: '1.6' }}>
            Engineered with exact stem lengths and head diameters to ensure secure fitting for 6mm, 8mm, and 10mm holes.
          </p>
        </div>
        <div className="card">
          <h3>Bulk Manufacturing</h3>
          <p style={{ color: '#64748b', lineHeight: '1.6' }}>
            Capable of high-volume production with consistent quality control for automotive suppliers and distributors.
          </p>
        </div>
      </div>
    </section>
    {/* --- STATS SECTION START --- */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            
            {/* Stat 1 */}
            <div className="stat-item">
              <span className="stat-number">1 Crore+</span>
              <span className="stat-label">Precision Units Delivered</span>
            </div>

            {/* Vertical Divider (Visual only) */}
            <div className="stat-divider"></div>

            {/* Stat 2 */}
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Trusted Clients Across India</span>
            </div>

            {/* Optional Stat 3 (Recommended for balance) */}
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Quality Assurance</span>
            </div>

          </div>
        </div>
      </div>
      {/* --- STATS SECTION END --- */}
  </>
);

const ProductsPage = () => (
  <div className="page container">
    <div style={{ maxWidth: '800px', marginBottom: '60px' }}>
      <h1 className="page-title">Our Catalog</h1>
      <p className="page-subtitle">
        Explore our comprehensive range of automotive clips. Designed for durability and precision fitting.
      </p>
      
      {/* NEW: Download Button on Catalog Page */}
      <a href="/catalog.pdf" download className="btn" style={{ marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
        <Download size={18} /> Download Full PDF Catalog
      </a>
    </div>

    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <div className="product-category">{product.category}</div>
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{product.name}</h3>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>{product.description}</p>
            
            <table className="specs-table">
              <tbody>
                <tr>
                  <td style={{ fontWeight: '500' }}>Material</td>
                  <td>{product.material}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: '500' }}>Specs</td>
                  <td>{product.specs}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ContactPage = () => (
  <div className="page container">
    <div className="contact-grid">
      <div>
        <h1 className="page-title">Let's work<br />together.</h1>
        <p className="page-subtitle" style={{ marginBottom: '40px' }}>
          We are ready to handle your manufacturing needs. Contact us for quotes, samples, or bulk orders.
        </p>
        
        <div className="contact-item">
          <span className="label">Call Us</span>
          <div className="value" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Phone size={20} color="#0f172a" /> +91 93260 00050
          </div>
        </div>

        <div className="contact-item">
          <span className="label">Email Us</span>
          <div className="value" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Mail size={20} color="#0f172a" /> vijayaindustries.inc@gmail.com
          </div>
        </div>

        <div className="contact-item">
          <span className="label">Contact Person</span>
          <div className="value">Mr. Prashant Chhatraband</div>
        </div>
      </div>

      <div className="contact-box">
        <h3 style={{ marginBottom: '24px' }}>Send an Inquiry</h3>
        {/* IMPORTANT: Make sure you put your Formspree link back here if you had it */}
        <form 
          action="https://formspree.io/f/mregpbaj" 
          method="POST"
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required
            style={{ padding: '16px', border: '1px solid #e2e8f0', fontSize: '15px', borderRadius: '4px' }} 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            required
            style={{ padding: '16px', border: '1px solid #e2e8f0', fontSize: '15px', borderRadius: '4px' }} 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            required
            style={{ padding: '16px', border: '1px solid #e2e8f0', fontSize: '15px', borderRadius: '4px' }} 
          />
          <textarea 
            name="message"
            rows="4" 
            placeholder="Tell us about your requirement..." 
            required
            style={{ padding: '16px', border: '1px solid #e2e8f0', fontSize: '15px', fontFamily: 'inherit', borderRadius: '4px' }} 
          ></textarea>
          <button type="submit" className="btn">Send Request</button>
        </form>
      </div>
    </div>
  </div>
);

// --- MAIN APP ---

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;