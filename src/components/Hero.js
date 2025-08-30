import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 fw-bold mb-4 neon-text">Hi, I'm <span className="neon-pink">DHARSHINI PRIYA A</span></h1>
            <p className="lead mb-4 neon-purple">Full Stack Developer & UI/UX Designer</p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="#contact" className="btn btn-neon">Contact Me</a>
              <a href="#projects" className="btn btn-neon">View Work</a>
            </div>
          </div>
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img src="photo.jpg" alt="Profile" className="profile-img" />
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <i className="fas fa-chevron-down fa-2x"></i>
      </div>
    </section>
  );
};

export default Hero;