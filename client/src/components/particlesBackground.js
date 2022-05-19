import React from "react"
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App" style={{position: 'absolute', zIndex: 0}}>
   
     <Particles 
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
	    	  options={{

                
                    particles: {
                      number: {
                        value: 492,
                        density: {
                          enable: true,
                          value_area: 800
                        }
                      },
                      color: {
                        value: "#ffffff"
                      },
                      shape: {
                        type: "circle",
                        stroke: {
                          width: 0,
                          color: "#000000"
                        },
                        polygon: {
                          nb_sides: 5
                        },
                        image: {
                          src: "img/github.svg",
                          width: 100,
                          height: 100
                        }
                      },
                      opacity: {
                        value: 1,
                        random: true,
                        anim: {
                          enable: true,
                          speed: 1,
                          opacity_min: 0,
                          sync: false
                        }
                      },
                      size: {
                        value: 3,
                        random: true,
                        anim: {
                          enable: false,
                          speed: 4,
                          size_min: 0.3,
                          sync: false
                        }
                      },
                      line_linked: {
                        enable: false,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1
                      },
                      move: {
                        enable: true,
                        speed: 25.252724532232723,
                        direction: "top",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                          enable: false,
                          rotateX: 600,
                          rotateY: 600
                        }
                      }
                    },
                    interactivity: {
                      detect_on: "canvas",
                      events: {
                        onhover: {
                          enable: true,
                          mode: "bubble"
                        },
                        onclick: {
                          enable: true,
                          mode: "repulse"
                        },
                        resize: true
                      },
                      modes: {
                        grab: {
                          distance: 400,
                          line_linked: {
                            opacity: 1
                          }
                        },
                        bubble: {
                          distance: 250,
                          size: 0,
                          duration: 2,
                          opacity: 0,
                          speed: 3
                        },
                        repulse: {
                          distance: 400,
                          duration: 0.4
                        },
                        push: {
                          particles_nb: 4
                        },
                        remove: {
                          particles_nb: 2
                        }
                      }
                    },
                    retina_detect: true
                  
           
          }}
	  />  
  </div>
  );
}

export default ParticlesBackground;
