
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';
import { Category, Unit, convertValue } from '@/utils/conversions';

interface UnitConverterProps {
  category: Category;
}

const UnitConverter: React.FC<UnitConverterProps> = ({ category }) => {
  const [fromUnit, setFromUnit] = useState<Unit>(category.units[0]);
  const [toUnit, setToUnit] = useState<Unit>(category.units[1] || category.units[0]);
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');

  useEffect(() => {
    const numericValue = parseFloat(fromValue) || 0;
    const converted = convertValue(numericValue, fromUnit, toUnit);
    setToValue(converted.toFixed(6).replace(/\.?0+$/, ''));
  }, [fromValue, fromUnit, toUnit]);

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
  };

  const handleToValueChange = (value: string) => {
    const numericValue = parseFloat(value) || 0;
    const converted = convertValue(numericValue, toUnit, fromUnit);
    setFromValue(converted.toFixed(6).replace(/\.?0+$/, ''));
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setFromValue(toValue);
  };

  const handleFromUnitChange = (unitName: string) => {
    const unit = category.units.find(u => u.name === unitName);
    if (unit) setFromUnit(unit);
  };

  const handleToUnitChange = (unitName: string) => {
    const unit = category.units.find(u => u.name === unitName);
    if (unit) setToUnit(unit);
  };

  return (
    <Card className="p-6 bg-white shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {category.icon} Converter {category.name}
        </h2>
        <p className="text-gray-600 text-sm">
          {category.description}
        </p>
      </div>

      <div className="space-y-4">
        {/* From Unit */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">De:</label>
          <div className="flex gap-3">
            <Input
              type="number"
              value={fromValue}
              onChange={(e) => handleFromValueChange(e.target.value)}
              placeholder="Digite o valor"
              className="flex-1 text-lg h-12"
            />
            <Select value={fromUnit.name} onValueChange={handleFromUnitChange}>
              <SelectTrigger className="w-48 h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg max-h-60 overflow-y-auto z-50">
                {category.units.map((unit) => (
                  <SelectItem 
                    key={unit.name} 
                    value={unit.name}
                    className="hover:bg-blue-50 cursor-pointer"
                  >
                    {unit.name} ({unit.symbol})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={swapUnits}
            className="px-4 py-2 border-2 hover:bg-blue-50"
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>

        {/* To Unit */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Para:</label>
          <div className="flex gap-3">
            <Input
              type="number"
              value={toValue}
              onChange={(e) => handleToValueChange(e.target.value)}
              placeholder="Resultado"
              className="flex-1 text-lg h-12 bg-blue-50"
            />
            <Select value={toUnit.name} onValueChange={handleToUnitChange}>
              <SelectTrigger className="w-48 h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg max-h-60 overflow-y-auto z-50">
                {category.units.map((unit) => (
                  <SelectItem 
                    key={unit.name} 
                    value={unit.name}
                    className="hover:bg-blue-50 cursor-pointer"
                  >
                    {unit.name} ({unit.symbol})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Quick conversion examples */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Conversões rápidas:</h4>
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
            <div>1 {fromUnit.symbol} = {convertValue(1, fromUnit, toUnit).toFixed(4)} {toUnit.symbol}</div>
            <div>1 {toUnit.symbol} = {convertValue(1, toUnit, fromUnit).toFixed(4)} {fromUnit.symbol}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UnitConverter;
