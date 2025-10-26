export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/assets/automotive.224e7418884105595114.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black opacity-50"></div> 

      <div className="relative z-10 text-center max-w-4xl px-4">
        <span className="font-light pt-2 pb-3 text-lg xl:text-xl 2xl:text-2xl text-white/80 block leading-snug tracking-widest">
          Driven by performance
        </span>

        <h2 className="text-white font-normal leading-tight text-4xl md:text-5xl">
          <span className="font-semibold">
            Soft trims and <span className="text-blue-400">NVH solutions</span>
          </span>
          
          <br className="hidden md:block" />
          <span className="font-normal">
             for seamless rides
          </span> 
        </h2>    
      </div>
    </section>
  );
}