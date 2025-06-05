
import React from 'react';

const ProfessionalImage = () => {
  return (
    <div className="relative reveal">
      <div className="w-full h-80 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl">
        <img 
          src="/lovable-uploads/f877cc32-5952-4aba-b351-8fda5893dce7.png" 
          alt="Ritesh Jaiswal - Software Developer"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
      </div>
    </div>
  );
};

export default ProfessionalImage;
