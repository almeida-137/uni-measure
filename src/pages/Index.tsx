
import React, { useState } from 'react';
import { conversionCategories } from '@/utils/conversions';
import CategoryCard from '@/components/CategoryCard';
import UnitConverter from '@/components/UnitConverter';
import AdSlot from '@/components/AdSlot';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(conversionCategories[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              🔄 Conversor Universal de Unidades
            </h1>
            <p className="text-gray-600 text-lg">
              Converta unidades de medida de forma rápida e precisa - 100% gratuito
            </p>
          </div>
        </div>
      </header>

      {/* Ad Slot #1 - After Header */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <AdSlot slotNumber={1} className="w-full" />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Category Selection */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Escolha uma categoria de medida:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {conversionCategories.slice(0, 4).map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isActive={selectedCategory.id === category.id}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>
        </section>

        {/* Ad Slot #2 - After 4 categories */}
        <div className="mb-8">
          <AdSlot slotNumber={2} className="w-full" />
        </div>

        {/* More Categories */}
        <section className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {conversionCategories.slice(4).map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isActive={selectedCategory.id === category.id}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>
        </section>

        {/* Converter */}
        <section className="mb-8">
          <UnitConverter category={selectedCategory} />
        </section>

        {/* SEO Content */}
        <section className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Por que usar nosso conversor de unidades?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">✅ Conversão em tempo real</h4>
              <p className="text-sm">
                Resultados instantâneos conforme você digita, sem necessidade de clicar em botões.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🎯 Precisão garantida</h4>
              <p className="text-sm">
                Algoritmos de conversão testados e validados para máxima precisão em todos os cálculos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📱 Totalmente responsivo</h4>
              <p className="text-sm">
                Funciona perfeitamente em celulares, tablets e computadores com interface adaptativa.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🚀 Carregamento rápido</h4>
              <p className="text-sm">
                Interface otimizada para velocidade, funcionando mesmo com conexões lentas.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Conversions */}
        <section className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Conversões mais populares
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="space-y-2">
              <h5 className="font-semibold text-blue-600">Comprimento</h5>
              <ul className="space-y-1">
                <li>• Metros para Pés</li>
                <li>• Centímetros para Polegadas</li>
                <li>• Quilômetros para Milhas</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold text-blue-600">Peso</h5>
              <ul className="space-y-1">
                <li>• Quilos para Libras</li>
                <li>• Gramas para Onças</li>
                <li>• Toneladas para Quilos</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold text-blue-600">Temperatura</h5>
              <ul className="space-y-1">
                <li>• Celsius para Fahrenheit</li>
                <li>• Fahrenheit para Celsius</li>
                <li>• Celsius para Kelvin</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Ad Slot #3 */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <AdSlot slotNumber={3} className="w-full mb-6" />
          
          <div className="text-center text-gray-600">
            <p className="text-sm mb-2">
              © 2024 Conversor Universal de Unidades - Ferramenta gratuita de conversão
            </p>
            <p className="text-xs">
              Conversões precisas para estudantes, engenheiros, profissionais e uso pessoal
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
