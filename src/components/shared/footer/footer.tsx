"use client";
import React from "react";
import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <S.Container>
      {/* Newsletter Section */}
      <div className="newsletter">
        <div className="newsletter-content">
          <h2>Sign Up For Newsletters</h2>
          <p>get e-mail updates about out latest shop and <span>special offers</span></p>
          <div className="signup">
            <input type="email" placeholder="Your email address" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        {/* Contact Section */}
        <div className="contact-section">
          <img src="/logo.png" alt="Cara" className="logo" />
          <div className="contact-info">
            <h3>Contact</h3>
            <p><strong>Address:</strong> Wellington Road, Street 32, San Francisco</p>
            <p><strong>Phone:</strong> Wellington Road, Street 32, San Francisco</p>
            <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
          </div>
          <div className="follow-us">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="YouTube">YT</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Pinterest">PT</a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="about-section">
          <h3>About</h3>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>

        {/* My Account Section */}
        <div className="account-section">
          <h3>My account</h3>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>

        {/* Install App Section */}
        <div className="install-section">
          <h3>Install App</h3>
          <p>From App Store or Google Play</p>
          <div className="app-buttons">
            <a href="#" className="app-store">App Store</a>
            <a href="#" className="google-play">Google Play</a>
          </div>
          <p>Secured Payment Gateways</p>
          <div className="payment-methods">
            <span className="payment-icon">Visa</span>
            <span className="payment-icon">Mastercard</span>
            <span className="payment-icon">Maestro</span>
            <span className="payment-icon">AmEx</span>
          </div>
        </div>
      </div>
    </S.Container>
  );
};

export default Footer;

