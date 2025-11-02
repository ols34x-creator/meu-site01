
import React, { useState, useMemo } from 'react';
import { AUTOMOTIVE_PRODUCTS_DATA, AUTOMOTIVE_CATEGORIES } from '../constants';
import { AutomotiveProduct } from '../types';

const ProdutosTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'Todos' },
    { key: 'abraçadeiras', label: 'Abraçadeiras' },
    { key: 'amortecedor', label: 'Amortecedor' },
    { key: 'lampadas', label: 'Lâmpadas' },
    { key: 'palhetas', label: 'Palhetas' },
    { key: 'fusíveis', label: 'Fusíveis' },
    { key: 'diversos', label: 'Diversos' },
  ];

  const filteredProducts = useMemo(() => {
    return AUTOMOTIVE_PRODUCTS_DATA.filter(product => {
      const matchesSearch = product.ref.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);
  
  const groupedProducts = useMemo(() => {
    return filteredProducts.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {} as Record<string, AutomotiveProduct[]>);
  }, [filteredProducts]);

  return (
    <section 
      id="automotivo" 
      className="py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "linear-gradient(rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0.9)), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2083&q=80')" }}
    >
      <div className="w-11/12 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Produtos Automotivos
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#00ff88] to-[#6c63ff] rounded-full"></span>
          </h2>
          <p className="text-[#b0b0b0] max-w-2xl mx-auto mt-6">Tabela de Preço Automotivo 10-2025</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-[#333333]">
          <div className="bg-gradient-to-r from-[#00ff88] to-[#6c63ff] text-[#121212] p-6 text-center">
            <h3 className="text-2xl font-bold mb-1">Produtos Automotivos</h3>
            <p className="opacity-90">Tabela de Preço Automotivo 10-2025</p>
          </div>
          
          <div className="p-5 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-[#333333]">
            <div className="relative flex-grow w-full md:w-auto">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-[#b0b0b0]"></i>
              <input 
                type="text" 
                id="search-automotivo" 
                placeholder="Buscar por referência ou descrição..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-[#333333] bg-[#121212] text-white focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {filters.map(filter => (
                <button 
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-5 py-2 rounded-full cursor-pointer transition-all duration-300 text-sm font-semibold ${activeFilter === filter.key ? 'bg-[#00ff88] text-[#121212]' : 'bg-[#121212] text-white border border-[#333333] hover:bg-[#00cc6a] hover:text-[#121212]'}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-black/30">
                  <th className="p-4 text-left font-semibold text-[#00ff88] border-b border-[#333333] w-[12%]">Referência</th>
                  <th className="p-4 text-left font-semibold text-[#00ff88] border-b border-[#333333] w-[10%] text-center">Imagem Ilustrativa</th>
                  <th className="p-4 text-left font-semibold text-[#00ff88] border-b border-[#333333] w-[58%]">Descrição Produtos</th>
                  <th className="p-4 text-left font-semibold text-[#00ff88] border-b border-[#333333] w-[10%]">Caixa Máster</th>
                  <th className="p-4 text-left font-semibold text-[#00ff88] border-b border-[#333333] w-[10%]">Preço Venda</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(groupedProducts).length > 0 ? (
                  Object.entries(groupedProducts).map(([category, products]) => (
                    <React.Fragment key={category}>
                      <tr className="bg-[#07101a] border border-[#333333]">
                        <td colSpan={5} className="p-3 text-center text-[#00ff88] font-bold text-lg">
                          {(AUTOMOTIVE_CATEGORIES as any)[category]}
                        </td>
                      </tr>
                      {products.map((product, index) => (
                        <tr key={index} className="hover:bg-[#00ff88]/5 transition-colors duration-200">
                          <td className="p-4 border-b border-[#333333]">{product.ref}</td>
                          <td className="p-4 border-b border-[#333333]">
                            <div className="w-20 h-20 bg-white/5 border border-dashed border-white/20 text-[#9aa4b2] flex items-center justify-center text-xs text-center rounded-lg mx-auto">
                              Sem Imagem
                            </div>
                          </td>
                          <td className="p-4 border-b border-[#333333]">{product.description}</td>
                          <td className="p-4 border-b border-[#333333]">{product.masterBox}</td>
                          <td className="p-4 border-b border-[#333333] text-[#00ff88] font-bold text-lg">{product.price}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-[#b0b0b0]">Nenhum produto encontrado.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="p-5 text-center border-t border-[#333333] text-[#b0b0b0] text-sm">
            <p>Preços sujeitos a alteração sem aviso prévio. Consulte-nos para condições especiais de pagamento.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProdutosTable;
