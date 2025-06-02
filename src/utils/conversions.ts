
export interface Unit {
  name: string;
  symbol: string;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  units: Unit[];
}

export const conversionCategories: Category[] = [
  {
    id: 'length',
    name: 'Comprimento',
    description: 'Usado em construção, engenharia, medições de distância e projetos técnicos.',
    icon: '📏',
    units: [
      {
        name: 'Metros',
        symbol: 'm',
        toBase: (v) => v,
        fromBase: (v) => v
      },
      {
        name: 'Centímetros',
        symbol: 'cm',
        toBase: (v) => v / 100,
        fromBase: (v) => v * 100
      },
      {
        name: 'Quilômetros',
        symbol: 'km',
        toBase: (v) => v * 1000,
        fromBase: (v) => v / 1000
      },
      {
        name: 'Pés',
        symbol: 'ft',
        toBase: (v) => v * 0.3048,
        fromBase: (v) => v / 0.3048
      },
      {
        name: 'Polegadas',
        symbol: 'in',
        toBase: (v) => v * 0.0254,
        fromBase: (v) => v / 0.0254
      },
      {
        name: 'Milhas',
        symbol: 'mi',
        toBase: (v) => v * 1609.344,
        fromBase: (v) => v / 1609.344
      }
    ]
  },
  {
    id: 'temperature',
    name: 'Temperatura',
    description: 'Essencial em culinária, meteorologia, medicina e processos industriais.',
    icon: '🌡️',
    units: [
      {
        name: 'Celsius',
        symbol: '°C',
        toBase: (v) => v,
        fromBase: (v) => v
      },
      {
        name: 'Fahrenheit',
        symbol: '°F',
        toBase: (v) => (v - 32) * 5/9,
        fromBase: (v) => (v * 9/5) + 32
      },
      {
        name: 'Kelvin',
        symbol: 'K',
        toBase: (v) => v - 273.15,
        fromBase: (v) => v + 273.15
      }
    ]
  },
  {
    id: 'weight',
    name: 'Peso / Massa',
    description: 'Fundamental em nutrição, comércio, logística e dosagens médicas.',
    icon: '⚖️',
    units: [
      {
        name: 'Quilogramas',
        symbol: 'kg',
        toBase: (v) => v,
        fromBase: (v) => v
      },
      {
        name: 'Gramas',
        symbol: 'g',
        toBase: (v) => v / 1000,
        fromBase: (v) => v * 1000
      },
      {
        name: 'Libras',
        symbol: 'lb',
        toBase: (v) => v * 0.453592,
        fromBase: (v) => v / 0.453592
      },
      {
        name: 'Onças',
        symbol: 'oz',
        toBase: (v) => v * 0.0283495,
        fromBase: (v) => v / 0.0283495
      },
      {
        name: 'Toneladas',
        symbol: 't',
        toBase: (v) => v * 1000,
        fromBase: (v) => v / 1000
      }
    ]
  },
  {
    id: 'volume',
    name: 'Volume',
    description: 'Usado em receitas, abastecimento, química e dosagens de líquidos.',
    icon: '🧪',
    units: [
      {
        name: 'Litros',
        symbol: 'L',
        toBase: (v) => v,
        fromBase: (v) => v
      },
      {
        name: 'Mililitros',
        symbol: 'mL',
        toBase: (v) => v / 1000,
        fromBase: (v) => v * 1000
      },
      {
        name: 'Galões (US)',
        symbol: 'gal',
        toBase: (v) => v * 3.78541,
        fromBase: (v) => v / 3.78541
      },
      {
        name: 'Metros cúbicos',
        symbol: 'm³',
        toBase: (v) => v * 1000,
        fromBase: (v) => v / 1000
      },
      {
        name: 'Pés cúbicos',
        symbol: 'ft³',
        toBase: (v) => v * 28.3168,
        fromBase: (v) => v / 28.3168
      }
    ]
  },
  {
    id: 'area',
    name: 'Área',
    description: 'Aplicado em imóveis, agricultura, urbanismo e projetos arquitetônicos.',
    icon: '📐',
    units: [
      {
        name: 'Metros quadrados',
        symbol: 'm²',
        toBase: (v) => v,
        fromBase: (v) => v
      },
      {
        name: 'Hectares',
        symbol: 'ha',
        toBase: (v) => v * 10000,
        fromBase: (v) => v / 10000
      },
      {
        name: 'Acres',
        symbol: 'ac',
        toBase: (v) => v * 4046.86,
        fromBase: (v) => v / 4046.86
      },
      {
        name: 'Pés quadrados',
        symbol: 'ft²',
        toBase: (v) => v * 0.092903,
        fromBase: (v) => v / 0.092903
      },
      {
        name: 'Quilômetros quadrados',
        symbol: 'km²',
        toBase: (v) => v * 1000000,
        fromBase: (v) => v / 1000000
      }
    ]
  },
  {
    id: 'time',
    name: 'Tempo',
    description: 'Essencial para cronogramas, produtividade, esportes e gestão de projetos.',
    icon: '⏰',
    units: [
      {
        name: 'Segundos',
        symbol: 's',
        toBase: (v) => v,
        fromBase: (v) => v
      },
      {
        name: 'Minutos',
        symbol: 'min',
        toBase: (v) => v * 60,
        fromBase: (v) => v / 60
      },
      {
        name: 'Horas',
        symbol: 'h',
        toBase: (v) => v * 3600,
        fromBase: (v) => v / 3600
      },
      {
        name: 'Dias',
        symbol: 'd',
        toBase: (v) => v * 86400,
        fromBase: (v) => v / 86400
      },
      {
        name: 'Semanas',
        symbol: 'sem',
        toBase: (v) => v * 604800,
        fromBase: (v) => v / 604800
      }
    ]
  },
  {
    id: 'storage',
    name: 'Armazenamento Digital',
    description: 'Fundamental em tecnologia, backup de dados e capacidade de dispositivos.',
    icon: '💾',
    units: [
      {
        name: 'Bytes',
        symbol: 'B',
        toBase: (v) => v,
        fromBase: (v) => v
      },
      {
        name: 'Kilobytes',
        symbol: 'KB',
        toBase: (v) => v * 1024,
        fromBase: (v) => v / 1024
      },
      {
        name: 'Megabytes',
        symbol: 'MB',
        toBase: (v) => v * 1048576,
        fromBase: (v) => v / 1048576
      },
      {
        name: 'Gigabytes',
        symbol: 'GB',
        toBase: (v) => v * 1073741824,
        fromBase: (v) => v / 1073741824
      },
      {
        name: 'Terabytes',
        symbol: 'TB',
        toBase: (v) => v * 1099511627776,
        fromBase: (v) => v / 1099511627776
      }
    ]
  },
  {
    id: 'speed',
    name: 'Velocidade',
    description: 'Usado em transportes, esportes, física e regulamentações de trânsito.',
    icon: '🚗',
    units: [
      {
        name: 'Metros por segundo',
        symbol: 'm/s',
        toBase: (v) => v,
        fromBase: (v) => v
      },
      {
        name: 'Quilômetros por hora',
        symbol: 'km/h',
        toBase: (v) => v / 3.6,
        fromBase: (v) => v * 3.6
      },
      {
        name: 'Milhas por hora',
        symbol: 'mph',
        toBase: (v) => v * 0.44704,
        fromBase: (v) => v / 0.44704
      },
      {
        name: 'Nós',
        symbol: 'kn',
        toBase: (v) => v * 0.514444,
        fromBase: (v) => v / 0.514444
      }
    ]
  }
];

export const convertValue = (
  value: number,
  fromUnit: Unit,
  toUnit: Unit
): number => {
  if (isNaN(value)) return 0;
  const baseValue = fromUnit.toBase(value);
  return toUnit.fromBase(baseValue);
};
