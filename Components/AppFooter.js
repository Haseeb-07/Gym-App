import React from 'react';
import fblogo from '../facebook.png';
import iglogo from '../instagram.png';
import twlogo from '../twitter.png';
import ytlogo from '../youtube.png';
import send from '../button.png';
import location from '../location.png';
//import './AppFooter.css'; // Assuming you have a CSS file for styling (AppFooter.css)

export default function AppFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Get in Touch</h3>
          <p className="footer-textGIT">
  <img className="location-image" src={location} alt="location"/>
  <span className="text-container">123 Main Street 123 Main Street 123 Main Street 123 Main Street 123 Main Street</span>
</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="icon-wrapper">
            <a href="https://facebook.com"><img src={fblogo} alt="fb logo"/></a>
            <a href="https://instagram.com"> <img src={iglogo} alt="insta logo"/></a>
            <a href="https://youtube.com"> <img src={ytlogo} alt="youtube logo"/></a>
            <a href="https://twitter.com"> <img src={twlogo} alt="twitter logo"/></a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Newsletter</h3>
          <div>
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <input className="footer-input" type="email" placeholder="Enter your email" />
          <a href="https://instagram.com"> <img className="send" src={send} alt="insta logo"/></a>
        </div>
      </div>
    </footer>
  );
}
