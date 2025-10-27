"use client";

import { useState, useEffect, useRef } from 'react';

const passengerSections = [
  { 
    label: 'Complete body', 
    icon: '/assets/passenger_complete_body.png', 
    videoSrc: '/assets/Passenger Alpha.bc06b347f5b526ad9a60.mp4' 
  },
  { 
    label: 'Front', 
    icon: '/assets/passenger_front.png', 
    videoSrc: '/assets/Front.8f5fda304d3095ab6b02.mp4' 
  },
  { 
    label: 'Cabin', 
    icon: '/assets/passenger_cabin.png', 
    videoSrc: '/assets/Cabin.3260d3e4f52b3804dae5.mp4' 
  },
  { 
    label: 'Trunk', 
    icon: '/assets/passenger_trunk.png', 
    videoSrc: '/assets/Trunk.54bfaa734c0395172c08.mp4' 
  },
  { 
    label: 'Exterior', 
    icon: '/assets/passenger_exterior.png', 
    videoSrc: '/assets/Exterior.a127ebb308e655c7e32c.mp4' 
  },
];

const commercialSections = [
  { 
    label: 'Complete Body', 
    icon: '/assets/commercial-body.497c72f2daf47ca41c4fd25f86191b69.svg', 
    videoSrc: '/assets/Commercial Alpha.92c92d40f9116c837d1d.mp4' 
  },
  { 
    label: 'Engine', 
    icon: '/assets/commercial-engine.474985507c936157fc7a6daa457d4f04.svg', 
    videoSrc: '/assets/Commercial-Engine.d8957f7c027ca396858e.mp4' 
  },
  { 
    label: 'Cabin', 
    icon: '/assets/commercial-cabin.7981ee5cadcf17dbe57012daa413c584.svg', 
    videoSrc: '/assets/Commercial-Cabin.69adf15a8021267cbe8c.mp4' 
  },
];

export default function VehicleSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  
  const [activeCategory, setActiveCategory] = useState('passenger'); 
  
  const [activeVideoIndex, setActiveVideoIndex] = useState(0); 
  const [isPlaying, setIsPlaying] = useState(true); 
  
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const activeSections = activeCategory === 'passenger' ? passengerSections : commercialSections;

  const currentVideoSrc = activeSections[activeVideoIndex]?.videoSrc;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          const timer = setTimeout(() => {
            setShowFullContent(true);
            if (videoRef.current) {
                videoRef.current.play();
            }
          }, 2000); 
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const handleCategorySwitch = (category) => {
    setActiveCategory(category);
    setActiveVideoIndex(0); 
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const titleTranslateY = showFullContent ? '-translate-y-40' : 'translate-y-0';
  const titleOpacity = showFullContent ? 'opacity-50' : 'opacity-100';

  return (
    <section 
      ref={sectionRef}
      className="bg-black text-white min-h-screen pt-20 pb-10 flex flex-col items-center justify-start relative"
    >
      
      <div 
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${titleTranslateY} ${titleOpacity} w-full`}
      >
        <div className="text-center w-full max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-normal leading-snug">
            Evolving the drive with <span className="font-bold">360-degree</span>
          </h2>
          <p className="text-4xl md:text-5xl font-normal">
            comprehensive solutions
          </p>
        </div>
      </div>

      <div 
        className={`container mx-auto px-6 flex flex-col md:flex-row justify-between items-start pt-64 transition-opacity duration-1000 ease-out ${
          showFullContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        
        <div className="w-full md:w-1/3 space-y-12 pr-12">
          
          <div 
            className={`relative cursor-pointer transition-colors duration-300`}
            onClick={() => handleCategorySwitch('passenger')}
          >
            <div className={`absolute left-[-24px] top-0 bottom-0 w-px ${activeCategory === 'passenger' ? 'bg-white h-full' : 'bg-white/50 h-1/2'}`}></div>
            
            <h3 className={`text-3xl font-light mb-2 transition-opacity ${activeCategory === 'passenger' ? 'text-white' : 'text-white/50'}`}>
              Passenger vehicles
            </h3>
            <div className="w-16 h-px bg-white/50 mb-3"></div>
            <p className="text-lg text-white/70">
              Rewing up innovation from <br /> interior to exterior.
            </p>
          </div>

          <div 
            className={`relative cursor-pointer transition-colors duration-300`}
            onClick={() => handleCategorySwitch('commercial')}
          >
            <h3 className={`text-3xl font-light mb-2 transition-opacity ${activeCategory === 'commercial' ? 'text-white' : 'text-white/50'}`}>
              Commercial vehicles
            </h3>
            <div className="w-16 h-px bg-white/50 mb-3"></div>
            <p className="text-lg text-white/70">
              Advancing engineering <br /> for heavy-duty vehicles.
            </p>
            {activeCategory === 'commercial' && (
                <div className="absolute left-[-24px] top-0 bottom-0 w-px bg-white h-1/2"></div>
            )}
          </div>
        </div>

        <div className="w-full md:w-2/3 flex justify-center mt-16 md:mt-0">
          <div className="w-full flex justify-center">
              <video ref={videoRef} key={currentVideoSrc} autoPlay loop  muted playsInline className="max-w-full h-auto" style={{maxWidth: '600px'}} >
                <source src={currentVideoSrc} type="video/mp4" />
              </video>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-10 left-0 right-0 flex justify-center items-center transition-opacity duration-1000 ease-out ${
          showFullContent ? 'opacity-100' : 'opacity-0'
        }`}>
        
        <div className="flex space-x-8 mr-16">
          {activeSections.map((section, index) => (
            <div 
              key={section.label}
              className={`flex flex-col items-center cursor-pointer transition duration-300 ${
                activeVideoIndex === index ? 'text-white' : 'text-white/50 hover:text-white/80'
              }`}
              onClick={() => {
                setActiveVideoIndex(index);
                setIsPlaying(true); 
              }}
            >
              <div 
                className={`w-10 h-10 mb-1 rounded-full flex items-center justify-center border-2 ${
                  activeVideoIndex === index ? 'border-white' : 'border-white/50'
                }`}
              >
                <img 
                    src={section.icon} 
                    alt={section.label} 
                    className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-xs">{section.label}</span>
            </div>
          ))}
        </div>
        
        <button 
          onClick={togglePlayPause}
          className="w-12 h-12 rounded-full border border-white flex items-center justify-center ml-16"
        >
          {isPlaying ? (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
          ) : (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          )}
        </button>
      </div>
    </section>
  );
}