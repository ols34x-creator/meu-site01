
import React from 'react';

const Hero: React.FC = () => {

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
    <section 
      id="inicio" 
      className="pt-48 pb-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.9)), url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
    >
      <div className="w-11/12 max-w-6xl mx-auto text-center">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5 bg-gradient-to-r from-white to-[#00ff88] text-transparent bg-clip-text text-shadow-lg">
            ECO.SHOP - Tabelas de Preços
          </h1>
          <p className="text-lg text-[#b0b0b0] mb-8 max-w-2xl mx-auto">
            Encontre as melhores peças e acessórios automotivos com preços competitivos e entrega rápida
          </p>
          <div className="flex gap-4 flex-wrap justify-center mt-8">
            <a 
              href="#pneus" 
              onClick={(e) => scrollToSection(e, '#pneus')}
              className="inline-block px-8 py-3 rounded-full text-[#121212] font-semibold bg-gradient-to-r from-[#00ff88] to-[#00cc6a] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00ff88]/30 cursor-pointer"
            >
              Ver Pneus
            </a>
            <a 
              href="#automotivo"
              onClick={(e) => scrollToSection(e, '#automotivo')}
              className="inline-block px-8 py-3 rounded-full text-white font-semibold bg-transparent border-2 border-[#00ff88] transition-all duration-300 hover:bg-[#00ff88] hover:text-[#121212] cursor-pointer"
            >
              Ver Produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
