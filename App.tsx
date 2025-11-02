
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PneusTable from './components/PneusTable';
import ProdutosTable from './components/ProdutosTable';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#121212]">
      <Header />
      <main>
        <Hero />
        <Features />
        <PneusTable />
        <ProdutosTable />
      </main>
      <Footer />
    </div>
  );
};

export default App;
