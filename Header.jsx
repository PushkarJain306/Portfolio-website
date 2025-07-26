import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center">
          <Link to="hero" smooth={true} className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 cursor-pointer">
            Pushkar Jain
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="projects" smooth={true} className="text-gray-300 hover:text-white transition cursor-pointer">Projects</Link>
            <Link to="skills" smooth={true} className="text-gray-300 hover:text-white transition cursor-pointer">Skills</Link>
            <Link to="education" smooth={true} className="text-gray-300 hover:text-white transition cursor-pointer">Education</Link>
            <Link to="contact" smooth={true} className="text-gray-300 hover:text-white transition cursor-pointer">Contact</Link>
          </div>

          <button 
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 mt-4 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link to="projects" smooth={true} onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white transition cursor-pointer">Projects</Link>
              <Link to="skills" smooth={true} onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white transition cursor-pointer">Skills</Link>
              <Link to="education" smooth={true} onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white transition cursor-pointer">Education</Link>
              <Link to="contact" smooth={true} onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white transition cursor-pointer">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;