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
import './styles/responsive.css';

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

    // Scroll animation: IntersectionObserver
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

    // Smooth scrolling for anchor links
    const anchorElements = Array.from(document.querySelectorAll('a[href^="#"]'));
    const anchorClickHandlers = [];
    anchorElements.forEach(anchor => {
      const handler = function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      };
      anchor.addEventListener('click', handler);
      anchorClickHandlers.push({ anchor, handler });
    });

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (!navbar) return;
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

    // Icons hover effects (and cleanup handlers)
    const icons = Array.from(document.querySelectorAll('.fas, .fab'));
    const iconHandlers = [];
    icons.forEach(icon => {
      // ensure default neon-blue if not present
      if (!icon.classList.contains('neon-blue') &&
        !icon.classList.contains('neon-pink') &&
        !icon.classList.contains('neon-green')) {
        icon.classList.add('neon-blue');
      }

      const enter = function () {
        this.style.filter = 'drop-shadow(0 0 8px currentColor)';
      };
      const leave = function () {
        this.style.filter = 'drop-shadow(0 0 5px currentColor)';
      };

      icon.addEventListener('mouseenter', enter);
      icon.addEventListener('mouseleave', leave);
      iconHandlers.push({ icon, enter, leave });
    });

    // Form inputs focus effects
    const formInputs = Array.from(document.querySelectorAll('.form-control'));
    const inputHandlers = [];
    formInputs.forEach(input => {
      const onFocus = function () {
        this.style.boxShadow = '0 0 15px rgba(0, 245, 255, 0.7)';
      };
      const onBlur = function () {
        this.style.boxShadow = '0 0 10px rgba(0, 245, 255, 0.5)';
      };
      input.addEventListener('focus', onFocus);
      input.addEventListener('blur', onBlur);
      inputHandlers.push({ input, onFocus, onBlur });
    });

    // TOUCH-HOVER SIMULATOR FOR .gradient-hover
    const setupTouchHover = () => {
      const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
      if (!isTouch) return () => {};

      // Use live NodeList snapshot each time in case DOM changes
      const getElements = () => Array.from(document.querySelectorAll('.gradient-hover'));
      let elements = getElements();

      const clearHoverOnAll = () => {
        elements.forEach(el => el.classList.remove('hover'));
      };

      const onTouchStart = (e) => {
        elements = getElements();
        clearHoverOnAll();
        e.currentTarget.classList.add('hover');
      };

      const onTouchEnd = (e) => {
        const el = e.currentTarget;
        setTimeout(() => {
          el.classList.remove('hover');
        }, 700);
      };

      const onTouchCancel = (e) => {
        e.currentTarget.classList.remove('hover');
      };

      const onScrollOrResize = () => {
        elements = getElements();
        clearHoverOnAll();
      };

      // attach listeners
      elements.forEach(el => {
        el.addEventListener('touchstart', onTouchStart, { passive: true });
        el.addEventListener('touchend', onTouchEnd, { passive: true });
        el.addEventListener('touchcancel', onTouchCancel, { passive: true });
      });
      window.addEventListener('scroll', onScrollOrResize, { passive: true });
      window.addEventListener('resize', onScrollOrResize);

      // return cleanup
      return () => {
        elements.forEach(el => {
          el.removeEventListener('touchstart', onTouchStart);
          el.removeEventListener('touchend', onTouchEnd);
          el.removeEventListener('touchcancel', onTouchCancel);
        });
        window.removeEventListener('scroll', onScrollOrResize);
        window.removeEventListener('resize', onScrollOrResize);
      };
    };

    const cleanupTouchHover = setupTouchHover();

    // Clean up on unmount
    return () => {
      // IntersectionObserver disconnect
      try { observer.disconnect(); } catch (e) {}

      // anchor listeners cleanup
      anchorClickHandlers.forEach(({ anchor, handler }) => {
        anchor.removeEventListener('click', handler);
      });

      // icons cleanup
      iconHandlers.forEach(({ icon, enter, leave }) => {
        icon.removeEventListener('mouseenter', enter);
        icon.removeEventListener('mouseleave', leave);
      });

      // form inputs cleanup
      inputHandlers.forEach(({ input, onFocus, onBlur }) => {
        input.removeEventListener('focus', onFocus);
        input.removeEventListener('blur', onBlur);
      });

      // navbar scroll cleanup
      window.removeEventListener('scroll', handleScroll);

      // touch hover cleanup
      if (typeof cleanupTouchHover === 'function') cleanupTouchHover();
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
