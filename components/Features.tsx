
import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-[#1a1a1a] p-8 rounded-2xl text-center border border-[#333333] transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff88] hover:shadow-2xl hover:shadow-black/50">
    <div className="text-4xl text-[#00ff88] mb-5">
      <i className={icon}></i>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-[#b0b0b0]">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    { icon: 'fas fa-shipping-fast', title: 'Entrega Rápida', description: 'Entregamos para todo o Brasil com prazos curtos e fretes competitivos.' },
    { icon: 'fas fa-shield-alt', title: 'Garantia de Qualidade', description: 'Todos os nossos produtos possuem garantia e são testados antes do envio.' },
    { icon: 'fas fa-lock', title: 'Compra Segura', description: 'Processo de compra 100% seguro através do Mercado Livre.' },
    { icon: 'fas fa-headset', title: 'Suporte Especializado', description: 'Nossa equipe está pronta para tirar todas as suas dúvidas.' },
  ];

  return (
    <section id="vantagens" className="py-20 bg-[#1e1e1e]">
      <div className="w-11/12 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Por que Escolher a ECO.SHOP?
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#00ff88] to-[#6c63ff] rounded-full"></span>
          </h2>
          <p className="text-[#b0b0b0] max-w-2xl mx-auto mt-6">Conheça as vantagens de comprar conosco</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
