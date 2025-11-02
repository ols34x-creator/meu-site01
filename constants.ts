
import { Tire, AutomotiveProduct } from './types';

export const TIRES_DATA: Tire[] = [
  { code: '175/75R13 85T DCO-Max', description: 'PNEU AUTOMOTIVO 175/75R13...', price: 'R$ 264,79', ipi: '9,75', category: 'automotivo' },
  { code: '175/75R14 86T DCO-Max', description: 'PNEU AUTOMOTIVO 175/75R14...', price: 'R$ 279,38', ipi: '9,75', category: 'automotivo' },
  { code: '185/60R15 84H DCO-Max', description: 'PNEU AUTOMOTIVO 185/60R15...', price: 'R$ 291,72', ipi: '9,75', category: 'automotivo' },
  { code: '185/65R15 88H DCO-Max', description: 'PNEU AUTOMOTIVO 185/65R15...', price: 'R$ 299,57', ipi: '9,75', category: 'automotivo' },
  { code: '195/55R15 85V DCO-Max', description: 'PNEU AUTOMOTIVO 195/55R15...', price: 'R$ 301,82', ipi: '9,75', category: 'automotivo' },
  { code: '195/60R15 88H DCO-Max', description: 'PNEU AUTOMOTIVO 195/60R15...', price: 'R$ 305,18', ipi: '9,75', category: 'automotivo' },
  { code: '195/60R16 89H DCO-Max', description: 'PNEU AUTOMOTIVO 195/60R16...', price: 'R$ 320,89', ipi: '9,75', category: 'automotivo' },
  { code: '195/65R15 91V DCO-Max', description: 'PNEU AUTOMOTIVO 195/65R15...', price: 'R$ 311,92', ipi: '9,75', category: 'automotivo' },
  { code: '205/55R16 91V DCO-Max', description: 'PNEU AUTOMOTIVO 205/55R16...', price: 'R$ 343,33', ipi: '9,75', category: 'automotivo' },
  { code: '205/60R16 92V DCO-Max', description: 'PNEU AUTOMOTIVO 205/60R16...', price: 'R$ 354,55', ipi: '9,75', category: 'automotivo' },
  { code: '215/60R16 95V DCO-Max', description: 'PNEU AUTOMOTIVO 215/60R16...', price: 'R$ 369,14', ipi: '9,75', category: 'automotivo' },
  { code: '215/60R17 96H DS66-', description: 'PNEU AUTOMOTIVO 215/60R17...', price: 'R$ 450,89', ipi: '9,75', category: 'automotivo' },
  { code: '225/45ZR17 XL 94W DC-100', description: 'PNEU AUTOMOTIVO 225/45ZR17...', price: 'R$ 456,65', ipi: '9,75', category: 'automotivo' },
  { code: '225/65R17 102H DS-66', description: 'PNEU AUTOMOTIVO 225/65R17...', price: 'R$ 473,48', ipi: '9,75', category: 'automotivo' },
  { code: '235/60ZR18 103W XL DS-66 HP', description: 'PNEU AUTOMOTIVO 235/60ZR18...', price: 'R$ 540,12', ipi: '9,75', category: 'automotivo' },
  { code: '235/60ZR18 107W XL DS-66 HP', description: 'PNEU AUTOMOTIVO 235/60ZR18...', price: 'R$ 497,05', ipi: '9,75', category: 'automotivo' },
  { code: '265/60R18 114T XL DS-AT+', description: 'PNEU AUTOMOTIVO 265/60R18...', price: 'R$ 685,03', ipi: '9,75', category: 'automotivo' },
  { code: '265/60ZR18 110H DS-66 HP', description: 'PNEU AUTOMOTIVO 265/60R18...', price: 'R$ 580,96', ipi: '9,75', category: 'automotivo' },
  { code: '275/80R22.5-18 RLB210', description: 'PNEU PARA CAMINHAO 275/80R22.5...', price: 'R$ 1.480,00', ipi: '1,3', category: 'caminhao' },
  { code: '295/80R22.5-18 RLB451', description: 'PNEU PARA CAMINHAO 295/80R22.5...', price: 'R$ 1.730,00', ipi: '1,3', category: 'caminhao' },
  { code: '295/80R22.5-20 RR208', description: 'PNEU PARA CAMINHAO 295/80R22.5...', price: 'R$ 1.520,00', ipi: '1,3', category: 'caminhao' },
];

export const AUTOMOTIVE_PRODUCTS_DATA: AutomotiveProduct[] = [
  { ref: 'LY25100/B', description: 'Abraçadeira Branco 2.5X100 com 100 unidades. (Pacote)', masterBox: '250 pacotes', price: 'R$ 5,22', category: 'abraçadeiras' },
  { ref: 'LY23016', description: 'Abraçadeira Branca 3.6X200 com 100 unidades. (Pacote)', masterBox: '150 pacotes', price: 'R$ 7,92', category: 'abraçadeiras' },
  { ref: 'LY23023', description: 'Abraçadeira Branca 5.0X250 com 100 unidades. (Pacote)', masterBox: '100 pacotes', price: 'R$ 17,28', category: 'abraçadeiras' },
  { ref: 'LY23047Bra', description: 'Abraçadeira Branca 5.0X400 com 100 unidades. (Pacote)', masterBox: '50 pacotes', price: 'R$ 27,72', category: 'abraçadeiras' },
  { ref: 'LY23030Bra', description: 'Abraçadeira Branca 5.0X300 com 100 unidades. (Pacote)', masterBox: '75 pacotes', price: 'R$ 21,60', category: 'abraçadeiras' },
  { ref: 'BRX3012', description: 'Amortecedor IPANEMA 89/98', masterBox: '', price: 'Consulte', category: 'amortecedor' },
  { ref: 'LYX3014', description: 'AMORTECEDOR P/VEÍCULOS STILO 01', masterBox: '', price: 'Consulte', category: 'amortecedor' },
  { ref: 'LY26475', description: 'Lampada Automotiva Led pinguinho T5 Painel carro', masterBox: 'Pacotes', price: 'R$ 14,40', category: 'lampadas' },
  { ref: 'BRH58615', description: 'Lâmpada Led 1Polo Chuveirinho 5Led', masterBox: '208 Pares', price: 'R$ 3,60', category: 'lampadas' },
  { ref: 'LY18814', description: 'Palheta Universal carenada Universal 14"', masterBox: '50 unidades', price: 'R$ 14,40', category: 'palhetas' },
  { ref: 'LY18816', description: 'Palheta Universal carenada Universal 16"', masterBox: '50unidades', price: 'R$ 14,40', category: 'palhetas' },
  { ref: 'LY18818', description: 'Palheta Universal carenada Universal 18"', masterBox: '50 unidades', price: 'R$ 14,40', category: 'palhetas' },
  { ref: '26604', description: 'Fusivel laminado médio 05/A com 100 unidades.', masterBox: '100 Unidades', price: 'R$ 21,60', category: 'fusíveis' },
  { ref: 'LY22989/10A', description: 'Fusivel laminado médio 10A com 100 unidades.', masterBox: '100 Unidades', price: 'R$ 21,60', category: 'fusíveis' },
  { ref: 'LY-25720', description: 'Mini Compressor Automotivo Portátil corpo em alumínio 10 amp/100pcs', masterBox: '16 Unidades', price: 'R$ 144,00', category: 'diversos' },
  { ref: 'LY-25713', description: 'Aspirador Portátil 60w', masterBox: '20 Unidades', price: 'R$ 54,00', category: 'diversos' },
];

export const AUTOMOTIVE_CATEGORIES = {
    'abraçadeiras': 'ABRAÇADEIRAS',
    'amortecedor': 'AMORTECEDOR',
    'lampadas': 'LÂMPADAS',
    'palhetas': 'PALHETAS',
    'fusíveis': 'FUSÍVEIS',
    'diversos': 'DIVERSOS'
};
