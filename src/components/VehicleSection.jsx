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
  const [activeCategory, setActiveCategory] = useState('commercial'); 
  const [activeVideoIndex, setActiveVideoIndex] = useState(0); 
  const [isPlaying, setIsPlaying] = useState(true); 

  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  
  const touchStartX = useRef(0);
  const SWIPE_THRESHOLD = 50; 

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
              videoRef.current.play().catch(e => console.log("Video playback error:", e));
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
  
  useEffect(() => {
    if (videoRef.current && currentVideoSrc) {
      if (isPlaying) {
        videoRef.current.play().catch(e => console.log("Autoplay error:", e));
      }
    }
  }, [currentVideoSrc, isPlaying]);


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
        videoRef.current.play().catch(e => console.log("Playback error:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - touchStartX.current;

    if (Math.abs(diffX) > SWIPE_THRESHOLD) {
      if (diffX > 0) {
        setActiveVideoIndex(prevIndex => 
          prevIndex > 0 ? prevIndex - 1 : activeSections.length - 1 // Wrap around
        );
      } else {
        setActiveVideoIndex(prevIndex => 
          prevIndex < activeSections.length - 1 ? prevIndex + 1 : 0 // Wrap around
        );
      }
      setIsPlaying(true); 
      touchStartX.current = 0;
    }
  };

  const MobileSectionIndicator = () => (
    <div className="lg:hidden text-center mt-4">
      <span className="text-xl font-bold">{activeSections[activeVideoIndex]?.label}</span>
      <div className="flex justify-center mt-2 space-x-1">
        {activeSections.map((_, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              activeVideoIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
  
  const titleTranslateY = showFullContent ? '-translate-y-40 lg:-translate-y-28' : 'translate-y-0';
  const titleOpacity = showFullContent ? 'opacity-0 lg:opacity-50' : 'opacity-100'; 

  return (
    <section 
      ref={sectionRef}
      className="bg-black text-white min-h-screen pt-16 pb-32 flex flex-col items-center justify-start relative overflow-hidden"
    >
      
      <div 
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${titleTranslateY} ${titleOpacity} w-full`}
      >
        <div className="text-center w-full max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-normal leading-snug">
            Evolving the drive with <span className="font-bold">360-degree</span>
          </h2>
          <p className="text-3xl md:text-5xl font-normal">
            comprehensive solutions
          </p>
        </div>
      </div>

      <div 
        className={`container mx-auto px-6 flex flex-col lg:flex-row justify-between items-start pt-32 lg:pt-64 transition-opacity duration-1000 ease-out ${
          showFullContent ? 'opacity-100' : 'opacity-0'
        } w-full`}
      >
        
        <div className="w-full lg:w-1/3 space-y-12 pr-0 lg:pr-24 order-2 lg:order-1 mt-12 lg:mt-0">
          
          <div 
            className={`relative cursor-pointer transition-colors duration-300 ${activeCategory === 'passenger' ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => handleCategorySwitch('passenger')}
          >
            <div className={`absolute left-[-24px] top-0 h-full w-px transition-all duration-300 ${activeCategory === 'passenger' ? 'bg-white' : 'bg-white/30'}`}></div>
            <h3 className={`text-3xl font-light mb-2`}>Passenger vehicles</h3>
            <div className="w-16 h-px bg-white/50 mb-3"></div>
            <p className="text-lg text-white/70">Rewing up innovation from <br /> interior to exterior.</p>
          </div>

          <div 
            className={`relative cursor-pointer transition-colors duration-300 ${activeCategory === 'commercial' ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => handleCategorySwitch('commercial')}
          >
            <div className={`absolute left-[-24px] top-0 h-full w-px transition-all duration-300 ${activeCategory === 'commercial' ? 'bg-white' : 'bg-white/30'}`}></div>
            <h3 className={`text-3xl font-light mb-2`}>Commercial vehicles</h3>
            <div className="w-16 h-px bg-white/50 mb-3"></div>
            <p className="text-lg text-white/70">Advancing engineering <br /> for heavy-duty vehicles.</p>
          </div>
        </div>

        <div 
          className="w-full lg:w-2/3 flex flex-col justify-center order-1 lg:order-2"
        >
          <div 
            className="w-full flex justify-center max-w-2xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          > 
              <video 
                ref={videoRef} 
                key={currentVideoSrc} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-auto transition-opacity duration-500 cursor-pointer" 
                style={{ filter: 'grayscale(100%) brightness(1.5)' }} 
                onClick={togglePlayPause}
              >
                <source src={currentVideoSrc} type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none lg:hidden">
                {!isPlaying && (
                    <svg className="w-16 h-16 fill-white opacity-70" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8 5v14l11-7z"/>
                    </svg>
                )}
              </div>
          </div>
          
          <MobileSectionIndicator />

        </div>
      </div>
      
      <div className={`w-full absolute bottom-0 left-0 right-0 py-10 transition-opacity duration-1000 ease-out hidden md:flex justify-center lg:justify-end`} 
      >
        <div className="container mx-auto px-6 flex justify-end items-center space-x-16 max-w-screen-xl">
          
          <div className="flex space-x-10">
            {activeSections.map((section, index) => (
              <div 
                key={section.label}
                className={`flex flex-col items-center cursor-pointer transition duration-300 ${
                  activeVideoIndex === index ? 'text-white' : 'text-white/50 hover:text-white/80'
                }`}
                onClick={() => { setActiveVideoIndex(index); setIsPlaying(true); }}
              >
                <div 
                  className={`w-24 h-12 mb-2 transition-opacity flex items-center justify-center ${activeVideoIndex === index ? 'opacity-100' : 'opacity-50'}`}
                >
                  <img 
                    src={section.icon} 
                    alt={section.label} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-light">{section.label}</span>
                <div className={`h-px transition-all duration-300 mt-2 ${activeVideoIndex === index ? 'w-full bg-white' : 'w-0 bg-transparent'}`}></div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={togglePlayPause}
            className="w-12 h-12 rounded-full border border-white flex items-center justify-center transition hover:bg-white/10 lg:ml-24"
          >
            {isPlaying ? (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            ) : (
              <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}