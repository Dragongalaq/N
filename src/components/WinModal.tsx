import React from 'react';
import { X } from 'lucide-react';

interface WinModalProps {
  winAmount: string;
  onClose: () => void;
}

const WinModal: React.FC<WinModalProps> = ({ winAmount, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg text-center relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
        <p className="text-xl mb-4">You won:</p>
        <p className="text-4xl font-bold text-yellow-400 mb-6">{winAmount}</p>
        <div className="animate-bounce text-6xl mb-6">🎉</div>
        <button
          onClick={onClose}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Claim Prize
        </button>
      </div>
    </div>
  );
};

export default WinModal;