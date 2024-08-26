import React, { useState, useEffect, useRef } from 'react';
import '../styles/Home.css';
import blackphoto from '../imgs/blackphoto.jpg';
import paulinaphoto from '../imgs/paulinaphoto.jpg';
import paulinasitting from '../imgs/paulinasitting.jpg';
import coloringImage from '../imgs/coloring.jpg';
import stylingImage from '../imgs/styling.jpg';
import treatmentImage from '../imgs/treatment.jpg';
import haircutImage from '../imgs/haircuts.jpg';
import { Link } from 'react-router-dom';
import FeedbackForm from '../components/FeedbackForm';

const photos = [blackphoto, paulinaphoto, paulinasitting];

function Home() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  const aboutSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const testimonialsSectionRef = useRef(null);

  const [aboutVisible, setAboutVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photos.length);
        setFade(false);
      }, 700);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch('http://localhost:5001/api/feedback')
        .then(response => response.json())
        .then(data => setFeedbacks(data))
        .catch(error => console.error('Error fetching feedback:', error));
  }, []);

  useEffect(() => {
    const handleScrollAnimation = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (entry.target === aboutSectionRef.current) {
                setAboutVisible(true);
              } else if (entry.target === servicesSectionRef.current) {
                setServicesVisible(true);
              } else if (entry.target === testimonialsSectionRef.current) {
                setTestimonialsVisible(true);
              }
            }
          });
        },
        { threshold: 0.3 }
      );

      if (aboutSectionRef.current) observer.observe(aboutSectionRef.current);
      if (servicesSectionRef.current) observer.observe(servicesSectionRef.current);
      if (testimonialsSectionRef.current) observer.observe(testimonialsSectionRef.current);

      return () => {
        if (aboutSectionRef.current) observer.unobserve(aboutSectionRef.current);
        if (servicesSectionRef.current) observer.unobserve(servicesSectionRef.current);
        if (testimonialsSectionRef.current) observer.unobserve(testimonialsSectionRef.current);
      };
    };

    handleScrollAnimation();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className='homePage'>
      <img 
        src={photos[currentPhotoIndex]} 
        alt='Slideshow' 
        className={`homepagePhoto ${fade ? 'fade' : ''}`} 
      />
      <div className='heroText'>
          <h1>Welcome to Dorota's Hair Salon</h1>
          <p>Experience the best in hair care and styling in a luxurious and comfortable environment.</p>
      </div>
      <div ref={aboutSectionRef} className={`aboutSection fade-in ${aboutVisible ? 'visible' : ''}`}>
        <div className="aboutContent">
            <h2>About Us</h2>
            <p>Welcome to 260 East Street, the proud home of Dorota's Hair Salon. Since opening our doors in [Year], we've been dedicated to providing exceptional hair care services in a warm and inviting atmosphere. Our team of skilled stylists is passionate about helping you look and feel your best, offering personalized consultations to ensure that every service is tailored to your unique style and needs.</p>
            <p>Here, we believe in the power of transformation, whether it's through a fresh cut, a bold new color, or a complete makeover. We use only the highest quality products and stay up-to-date with the latest trends and techniques to deliver results that exceed your expectations.</p>
            <p>Come experience the difference at Dorota's Hair Salon, where every visit is more than just an appointment – it's an experience. We look forward to welcoming you and making your hair dreams come true.</p>
        </div>
        <Link to="/about">
          <button className='meetTeamButton'>Meet the Team</button>
        </Link>
      </div>

      <div ref={servicesSectionRef} className={`servicesSection fade-in ${servicesVisible ? 'visible' : ''}`}>
        <h2>Our Services</h2>
        <div className='serviceCategories'>
          <div className='service'>
            <h3>Haircuts</h3>
            <p>Precision cuts tailored to your style.</p>
            <img src={haircutImage} alt="Haircuts" className="serviceImage" />
          </div>
          <div className='service'>
            <h3>Coloring</h3>
            <p>Rich, lasting color that enhances your look.</p>
            <img src={coloringImage} alt="Coloring" className="serviceImage" />
          </div>
          <div className='service'>
            <h3>Styling</h3>
            <p>Elegant styles for every occasion.</p>
            <img src={stylingImage} alt="Styling" className="serviceImage" />
          </div>
          <div className='service'>
            <h3>Treatments</h3>
            <p>Luxurious treatments to nourish your hair.</p>
            <img src={treatmentImage} alt="Styling" className="serviceImage" />
          </div>
        </div>
        <Link to="/services">
          <button className='meetTeamButton'>Explore All Services</button>
        </Link>
      </div>

      <div ref={testimonialsSectionRef} className={`testimonialsSection fade-in ${testimonialsVisible ? 'visible' : ''}`}>
        <h2>Hear What Our Clients Have To Say</h2>
        <div className='starRating'>
          <span>★★★★★</span> 4.9/5 (based on 40+ reviews)
        </div>
        <div className='testimonials'>
          {feedbacks.map((feedback, index) => (
            <blockquote key={index}>
                {feedback.feedbackText}
                <footer>- {feedback.customerName}</footer>
            </blockquote>
          ))}
        </div>
        <FeedbackForm />
      </div>
    </div>
  );
}

export default Home;

