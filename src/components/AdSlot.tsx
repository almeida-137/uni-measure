
import React from 'react';

interface AdSlotProps {
  slotNumber: number;
  className?: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ slotNumber, className = '' }) => {
  return (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center ${className}`}>
      {/* Ad Slot #{slotNumber} */}
      <div className="text-gray-500 text-sm font-medium mb-2">
        Espaço Publicitário
      </div>
      <div className="text-gray-400 text-xs">
        Google AdSense - Slot #{slotNumber}
      </div>
      <div className="mt-4 text-gray-300 text-xs">
        [320x100 mobile / 728x90 desktop]
      </div>
    </div>
  );
};

export default AdSlot;
