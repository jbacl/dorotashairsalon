import React, { useEffect, useState, useRef } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [mapVisible, setMapVisible] = useState(false);

  const mapSectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const handleScrollAnimation = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (entry.target === mapSectionRef.current) {
                setMapVisible(true);
              }
            }
          });
        },
        { threshold: 0.3 }
      );

      if (mapSectionRef.current) observer.observe(mapSectionRef.current);

      return () => {
        if (mapSectionRef.current) observer.unobserve(mapSectionRef.current);
      };
    };

    handleScrollAnimation();
  }, []);

  return (
    <div className="contactPage">
      <div className="contactHero">
        <div className="contactHeroText">
          <h1>Contact Us</h1>
          <p>We’re here to help and answer any question you might have. We look forward to hearing from you.</p>
        </div>
      </div>

      <div ref={mapSectionRef} className={`mapAndDetailsSection fade-in ${mapVisible ? 'visible' : ''}`}>
        <div className="contactDetails">
          <h2>Call Us</h2>
          <p><strong>Phone:</strong> (860) 846-0438</p>
          <h2>Hours</h2>
          <p><strong>Monday:</strong> Closed</p>
          <p><strong>Tuesday:</strong> 8:30 AM - 5:30 PM</p>
          <p><strong>Wedesday:</strong> 8:30 AM - 5:30 PM</p>
          <p><strong>Thursday:</strong> 8:30 AM - 7:00 PM</p>
          <p><strong>Friday:</strong> 8:30 AM - 5:30 PM</p>
          <p><strong>Saturday:</strong> 8:00 AM - 3:00 PM</p>
          <p><strong>Sunday:</strong> Closed</p>
        </div>
        <div className="mapContainer">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11923.154143081345!2d-72.8653325!3d41.6603107!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7b0c49076399d%3A0x9c3a8e15350aa30e!2sDorota&#39;s%20Hair%20Salon%20LLC!5e0!3m2!1sen!2sus!4v1724427047037!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            title="Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;

