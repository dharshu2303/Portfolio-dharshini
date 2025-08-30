import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize particles.js
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ["#00F5FF", "#FF00F5", "#00FF57", "#9D00FF"]
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00F5FF",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      });
    }

    // Scroll animation
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, {
      threshold: 0.1
    });

    animateElements.forEach(element => {
      observer.observe(element);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 245, 255, 0.2)';
        navbar.style.backdropFilter = 'blur(10px)';
      } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
        navbar.style.boxShadow = 'none';
        navbar.style.backdropFilter = 'blur(5px)';
      }
    };

    window.addEventListener('scroll', handleScroll);


    // Icons effects
    const icons = document.querySelectorAll('.fas, .fab');
    icons.forEach(icon => {
      if (!icon.classList.contains('neon-blue') &&
        !icon.classList.contains('neon-pink') &&
        !icon.classList.contains('neon-green')) {
        icon.classList.add('neon-blue');
      }

      icon.addEventListener('mouseenter', function () {
        this.style.filter = 'drop-shadow(0 0 8px currentColor)';
      });

      icon.addEventListener('mouseleave', function () {
        this.style.filter = 'drop-shadow(0 0 5px currentColor)';
      });
    });

    // Form inputs effects
    const formInputs = document.querySelectorAll('.form-control');
    formInputs.forEach(input => {
      input.addEventListener('focus', function () {
        this.style.boxShadow = '0 0 15px rgba(0, 245, 255, 0.7)';
      });

      input.addEventListener('blur', function () {
        this.style.boxShadow = '0 0 10px rgba(0, 245, 255, 0.5)';
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div id="particles-js"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
      <div className="glow"></div>
    </div>
  );
}

export default App;