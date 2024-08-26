import React, { useEffect, useState, useRef } from 'react';
import '../styles/About.css';
import salonPhoto from '../imgs/salon.png';
import salonists from '../imgs/salonists.jpg'

function About() {
  const [storyVisible, setStoryVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);

  const storySectionRef = useRef(null);
  const teamSectionRef = useRef(null);

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
              if (entry.target === storySectionRef.current) {
                setStoryVisible(true);
              } else if (entry.target === teamSectionRef.current) {
                setTeamVisible(true);
              }
            }
          });
        },
        { threshold: 0.3 } 
      );

      if (storySectionRef.current) observer.observe(storySectionRef.current);
      if (teamSectionRef.current) observer.observe(teamSectionRef.current);

      return () => {
        if (storySectionRef.current) observer.unobserve(storySectionRef.current);
        if (teamSectionRef.current) observer.unobserve(teamSectionRef.current);
      };
    };

    handleScrollAnimation();
  }, []);

  return (
    <div className="aboutPage">
      <img className="aboutPagePhoto" src={salonPhoto} alt="Salon" />
      <div ref={storySectionRef} className={`abSection fade-in ${storyVisible ? 'visible' : ''}`}>
        <div className="abContent">
          <h2>Our Story</h2>
          <p>
            At Dorota's Hair Salon, we have been committed to providing exceptional hair care services
            since 2012. Our experienced stylists are passionate about bringing out the best in you, 
            offering personalized consultations to ensure that each service meets your unique needs and 
            style preferences.
          </p>
          <p>
            We believe in the power of transformation. Whether it's a fresh cut, vibrant color, or a 
            complete makeover, our team is here to help you look and feel your best. We use only the 
            highest quality products and stay up-to-date with the latest trends and techniques to deliver 
            results that exceed your expectations.
          </p>
        </div>
      </div>
      <div ref={teamSectionRef} className={`teamSection fade-in ${teamVisible ? 'visible' : ''}`}>

    <h2>Meet The Stylists</h2>

    <div className="teamPhotoSection">
        <img src={salonists} alt="Salonists" className="teamPhoto"/>
    </div>
    
    <div className="teamGrid">
        <div className="teamMember">
            <h3>Dorota Baclawska</h3>
            <p>Lead Stylist</p>
            <p className="direction">On the right</p>
            <p>
              With over 24 years of experience, Dorota specializes in cutting-edge styles 
              and color treatments. Her passion for creativity and attention to detail ensures 
              that every client leaves the salon feeling fabulous.
            </p>
        </div>
        <div className="teamMember">
            <h3>Marta Sleszynska</h3>
            <p>Senior Stylist</p>
            <p className="direction">On the left</p>
            <p>
              Marta brings in over 14 years of knowledge and expertise to the team, with a 
              focus on personalized service and a keen eye for the latest trends. Her dedication 
              to her craft has earned her a loyal clientele.
            </p>
        </div>
    </div>
</div>

    </div>
  );
}

export default About;