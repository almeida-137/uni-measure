
import React from 'react';
import { Card } from '@/components/ui/card';
import { Category } from '@/utils/conversions';

interface CategoryCardProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, isActive, onClick }) => {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-200 hover:shadow-lg border-2 ${
        isActive 
          ? 'border-blue-500 bg-blue-50 shadow-md' 
          : 'border-gray-200 hover:border-blue-300'
      }`}
      onClick={onClick}
    >
      <div className="p-4 text-center">
        <div className="text-3xl mb-2">{category.icon}</div>
        <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
        <p className="text-xs text-gray-600 leading-relaxed">
          {category.description}
        </p>
      </div>
    </Card>
  );
};

export default CategoryCard;
