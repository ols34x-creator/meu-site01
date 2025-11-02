
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { href: '#inicio', text: 'Início' },
    { href: '#pneus', text: 'Pneus Double Coin' },
    { href: '#automotivo', text: 'Produtos Automotivos' },
    { href: '#vantagens', text: 'Vantagens' },
    { href: '#contato', text: 'Contato' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };


  return (
    <header id="header" className={`fixed w-full z-50 transition-all duration-300 ease-in-out py-6 ${isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-lg shadow-2xl' : 'bg-gradient-to-b from-[#0a0a0a] to-transparent'}`}>
      <div className="w-11/12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#6c63ff] rounded-xl flex items-center justify-center font-bold text-2xl text-[#121212]">E</div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00ff88] to-[#6c63ff] text-transparent bg-clip-text mb-1">ECO.SHOP</h1>
              <p className="text-sm text-[#b0b0b0]">Peças e Acessórios Automotivos</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
               <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-white font-medium py-2 px-3 rounded-md transition-colors duration-300 relative hover:text-[#00ff88] group">
                {link.text}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#00ff88] transition-all duration-300 group-hover:w-4/5"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
