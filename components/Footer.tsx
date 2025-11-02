
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer 
      id="contato"
      className="pt-20 pb-8 bg-cover bg-center"
      style={{ backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.95), rgba(10, 10, 10, 0.95)), url('https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
    >
      <div className="w-11/12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold text-[#00ff88] mb-5">ECO.SHOP</h3>
            <p className="text-[#b0b0b0] mb-5">A melhor opção em peças e acessórios automotivos com qualidade e preço justo.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#00ff88] hover:text-[#121212] hover:-translate-y-1"><i className="fab fa-whatsapp"></i></a>
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#00ff88] hover:text-[#121212] hover:-translate-y-1"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#00ff88] hover:text-[#121212] hover:-translate-y-1"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#00ff88] hover:text-[#121212] hover:-translate-y-1"><i className="fab fa-mercadolibre"></i></a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#00ff88] mb-5">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-[#b0b0b0] hover:text-[#00ff88] transition-colors">Início</a></li>
              <li><a href="#pneus" className="text-[#b0b0b0] hover:text-[#00ff88] transition-colors">Pneus Double Coin</a></li>
              <li><a href="#automotivo" className="text-[#b0b0b0] hover:text-[#00ff88] transition-colors">Produtos Automotivos</a></li>
              <li><a href="#vantagens" className="text-[#b0b0b0] hover:text-[#00ff88] transition-colors">Vantagens</a></li>
              <li><a href="#contato" className="text-[#b0b0b0] hover:text-[#00ff88] transition-colors">Contato</a></li>
            </ul>
          </div>
          
          {/* Column 3: Categories */}
          <div>
            <h3 className="text-xl font-bold text-[#00ff88] mb-5">Categorias</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#b0b0b0] hover:text-[#00ff88] transition-colors">Sistema de Freio</a></li>
              <li><a href="#" className="text-[#b0b0b0] hover:text-[#00ff88] transition-colors">Suspensão</a></li>
              <li><a href="#" className="text-[#b0b0b0] hover:text-[#00ff88] transition-colors">Motor</a></li>
              <li><a href="#" className="text-[#b0b0b0] hover:text-[#00ff88] transition-colors">Elétrica</a></li>
              <li><a href="#" className="text-[#b0b0b0] hover:text-[#00ff88] transition-colors">Pneus</a></li>
              <li><a href="#" className="text-[#b0b0b0] hover:text-[#00ff88] transition-colors">Acessórios</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold text-[#00ff88] mb-5">Contato</h3>
            <ul className="space-y-3 text-[#b0b0b0]">
              <li className="flex items-center gap-3"><i className="fas fa-map-marker-alt text-[#00ff88]"></i> São Paulo, SP</li>
              <li className="flex items-center gap-3"><i className="fas fa-phone text-[#00ff88]"></i> (11) 9999-9999</li>
              <li className="flex items-center gap-3"><i className="fas fa-envelope text-[#00ff88]"></i> contato@ecoshop.com.br</li>
              <li className="flex items-center gap-3"><i className="fab fa-mercadolibre text-[#00ff88]"></i> <a href="#" className="hover:text-[#00ff88] transition-colors">Nossa Loja no ML</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-[#333333] text-[#b0b0b0] text-sm">
          <p>&copy; {new Date().getFullYear()} ECO.SHOP - Peças e Acessórios Automotivos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
