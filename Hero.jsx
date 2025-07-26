import TechSphere from './TechSphere';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900 opacity-90"></div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Pushkar Jain</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-300 animate-float" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer & ML Engineer
          </h2>
          <p className="text-lg mb-8 max-w-lg text-gray-300 animate-float" style={{ animationDelay: '0.4s' }}>
            I build intelligent web applications that combine modern UI with powerful AI capabilities.
          </p>
          <div className="flex gap-4 animate-float" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-blue-400 rounded-lg hover:bg-blue-900/30 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <TechSphere />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;