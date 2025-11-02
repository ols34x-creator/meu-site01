
export interface Tire {
  code: string;
  description: string;
  price: string;
  ipi: string;
  category: 'automotivo' | 'caminhao';
}

export interface AutomotiveProduct {
  ref: string;
  description: string;
  masterBox: string;
  price: string;
  category: 'abraçadeiras' | 'amortecedor' | 'lampadas' | 'palhetas' | 'fusíveis' | 'diversos';
}
