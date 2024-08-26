import React from 'react';
import '../styles/Footer.css';
import SocialMedia from '../components/SocialMedia';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footerContent'>
        <div className='contactInfo'>
          <h3>Contact Us</h3>
          <p>Phone: (860) 846-0438</p>
          <p>Address: 260 East St, Plainville, CT, United States, Connecticut</p>
        </div>
        <div className='hours'>
          <h3>Hours of Operation</h3>
          <p>Sun - Mon: Closed</p>
          <p>Tues - Wed & Fri: 8:30 AM - 5:30 PM</p>
          <p>Thurs: 8:30 AM - 7:00 PM</p>
          <p>Sat: 8:00 AM - 3:00 PM</p>
        </div>
        <div className='socialLinks'>
          <h3>Follow Us On Facebook</h3>
            <SocialMedia />
        </div>
      </div>
      <p className='footerNote'>&copy; 2024 Dorota's Hair Salon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;


