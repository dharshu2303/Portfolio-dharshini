import React, { useEffect, useState } from 'react';

const Certifications = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 9);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const certifications = [
    {
      image: "certificates/python.png",
      title: "Python For Data Science",
      issuer: "IBM Cognitive Class.ai",
      date: "Issued July 2024"
    },
    {
      image: "certificates/communication.png",
      title: "Communication Skills",
      issuer: "TATA Consultancy Services",
      date: "Issued August 2024"
    },
    {
      image: "certificates/implant training.jpg",
      title: "Full Stack Development",
      issuer: "e-soft technologies,Trichy",
      date: "Issued December 2024"
    },
    {
      image: "certificates/prompt.png",
      title: "Prompt Engineering For Everyone",
      issuer: "IBM Cognitive Class.ai",
      date: "Issued November 2024"
    },
    {
      image: "certificates/intern.jpg",
      title: "Python Development",
      issuer: "Technohacks Edutech",
      date: "Issued August 2024"
    },
    {
      image: "certificates/pp.jpg",
      title: "Paper presentation",
      issuer: "Coimbatore Institute of Technology",
      date: "Issued April 2024"
    },
    {
      image: "certificates/som.jpg",
      title: "Student of the Month Award",
      issuer: "M Kumarasamy college of Engineering,Karur",
      date: "Issued September 2024"
    },
    {
      image: "certificates/uiux.png",
      title: "Intro to Graphic Design,basics of UI/UX",
      issuer: "Simplilearn",
      date: "Issued January 2025"
    },
    {
      image: "certificates/workshop.jpg",
      title: "Crack the Code Workshop",
      issuer: "PSG College of Technology,Coimbatore",
      date: "Issued March 2025"
    },
    {
      image:"certificates/cisco.png",
      title:"Introduction to CyberSecurity",
      issuer:"Cisco Academy",
      date:"Issued February 2025"
    }
  ];

  return (
    <section id="certifications" className="animate-on-scroll">
      <h2 className="section-title neon-text">COURSES & <span className="neon-pink">CERTIFICATIONS</span></h2>
      <div className="certifications-slider">
        <div className="certifications-track" style={{ transform: `translateX(-${currentSlide * 330}px)` }}>
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <img src={cert.image} width="260px" alt={cert.title} />
              <h3 className="certification-title">{cert.title}</h3>
              <div className="certification-issuer">{cert.issuer}</div>
              <div className="certification-date">{cert.date}</div>
            </div>
          ))}
        </div>
        <div className="slider-nav">
          {certifications.map((_, index) => (
            <div 
              key={index} 
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;