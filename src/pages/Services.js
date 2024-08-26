import React, { useEffect, useState, useRef } from 'react';
import '../styles/Services.css'; 
import balayage from '../imgs/balayage.jpg';
import highlights from '../imgs/highlights&lowlights2.jpg';
import special from '../imgs/special.jpg';
import coloring from '../imgs/coloringhair.jpg';
import perm from '../imgs/perm3.jpg';
import brazilian from '../imgs/brazilian.jpg';
import updo from '../imgs/updue.jpg';
import ambray from '../imgs/ambray.jpg'

import balayageHover from '../imgs/balayge2.jpg';
import highlightsHover from '../imgs/highlights2.jpg';
import specialHover from '../imgs/special2.jpg';
import coloringHover from '../imgs/coloring2.jpg';
import permHover from '../imgs/actualperm2.jpg';
import brazilianHover from '../imgs/brazilian2.jpg';
import updoHover from '../imgs/updue2.jpg';
import ambrayHover from '../imgs/ambray2.jpg'

function Services() {
  const [, setHeroVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [imageSources, setImageSources] = useState({
    ambray: ambray,
    highlights: highlights,
    balayage: balayage,
    brazilian: brazilian,
    perm: perm,
    special: special,
    coloring: coloring,
    updo: updo
  });

  const heroSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

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
              if (entry.target === heroSectionRef.current) {
                setHeroVisible(true);
              } else if (entry.target === servicesSectionRef.current) {
                setServicesVisible(true);
              } else if (entry.target === contactSectionRef.current) {
                setContactVisible(true);
              }
            }
          });
        },
        { threshold: 0.3 } 
      );

      if (heroSectionRef.current) observer.observe(heroSectionRef.current);
      if (servicesSectionRef.current) observer.observe(servicesSectionRef.current);
      if (contactSectionRef.current) observer.observe(contactSectionRef.current);

      return () => {
        if (heroSectionRef.current) observer.unobserve(heroSectionRef.current);
        if (servicesSectionRef.current) observer.unobserve(servicesSectionRef.current);
        if (contactSectionRef.current) observer.unobserve(contactSectionRef.current);
      };
    };

    handleScrollAnimation();
  }, []);

  const handleMouseEnter = (service) => {
    const hoverImages = {
      ambray: ambrayHover,
      highlights: highlightsHover,
      balayage: balayageHover,
      brazilian: brazilianHover,
      perm: permHover,
      special: specialHover,
      coloring: coloringHover,
      updo: updoHover
    };

    setImageSources(prevState => ({
      ...prevState,
      [service]: hoverImages[service] // Use the corresponding hover image
    }));
  };

  const handleMouseLeave = (service) => {
    const originalImages = {
      ambray: ambray,
      highlights: highlights,
      balayage: balayage,
      brazilian: brazilian,
      perm: perm,
      special: special,
      coloring: coloring,
      updo: updo
    };

    setImageSources(prevState => ({
      ...prevState,
      [service]: originalImages[service] // Revert to the original image
    }));
  };

  return (
    <div className="servicesPage">
      <div className='servicesHero'>
        <div className="servicesHeroText">
          <h1>Our Services</h1>
          <p>Explore the range of services we offer to help you look and feel your best.</p>
        </div>
      </div>

      <div ref={servicesSectionRef} className={`sSection fade-in ${servicesVisible ? 'visible' : ''}`}>
        <div className="serviceP">
          <h3>Ambray</h3>
          <img 
            src={imageSources.ambray} 
            alt="ambray" 
            className="sImage" 
            onMouseEnter={() => handleMouseEnter('ambray')} 
            onMouseLeave={() => handleMouseLeave('ambray')} 
          />
        </div>
        <div className="serviceP">
          <h3>Highlights</h3>
          <img 
            src={imageSources.highlights} 
            alt="Coloring" 
            className="sImage" 
            onMouseEnter={() => handleMouseEnter('highlights')} 
            onMouseLeave={() => handleMouseLeave('highlights')} 
          />
        </div>
        <div className="serviceP">
          <h3>Balayage</h3>
          <img 
            src={imageSources.balayage} 
            alt="Styling" 
            className="sImage" 
            onMouseEnter={() => handleMouseEnter('balayage')} 
            onMouseLeave={() => handleMouseLeave('balayage')} 
          />
        </div>
        <div className="serviceP">
          <h3>Brazilian Blowout</h3>
          <img 
            src={imageSources.brazilian} 
            alt="Treatments" 
            className="sImage" 
            onMouseEnter={() => handleMouseEnter('brazilian')} 
            onMouseLeave={() => handleMouseLeave('brazilian')} 
          />
        </div>
        <div className="serviceP">
          <h3>Perms</h3>
          <img 
            src={imageSources.perm} 
            alt="Haircuts" 
            className="sImage" 
            onMouseEnter={() => handleMouseEnter('perm')} 
            onMouseLeave={() => handleMouseLeave('perm')} 
          />
        </div>
        <div className="serviceP">
          <h3>Special Occasions</h3>
          <img 
            src={imageSources.special} 
            alt="Coloring" 
            className="sImage" 
            onMouseEnter={() => handleMouseEnter('special')} 
            onMouseLeave={() => handleMouseLeave('special')} 
          />
        </div>
        <div className="serviceP">
          <h3>Coloring</h3>
          <img 
            src={imageSources.coloring} 
            alt="Styling" 
            className="sImage" 
            onMouseEnter={() => handleMouseEnter('coloring')} 
            onMouseLeave={() => handleMouseLeave('coloring')} 
          />
        </div>
        <div className="serviceP">
          <h3>Updo</h3>
          <img 
            src={imageSources.updo} 
            alt="Updo" 
            className="sImage" 
            onMouseEnter={() => handleMouseEnter('updo')} 
            onMouseLeave={() => handleMouseLeave('updo')} 
          />
        </div>
      </div>
      
      <div ref={contactSectionRef} className={`contactNote fade-in ${contactVisible ? 'visible' : ''}`}>
        <p>Please contact us for anything not listed</p>
      </div>
    </div>
  );
}

export default Services;




