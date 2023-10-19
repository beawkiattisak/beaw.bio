import React from 'react';
import EducationAnimation from './EducationTextAnimation';
import EducationFade from './EducationFade';

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-100 bg-cover bg-center flex flex-col justify-center items-center">
      <EducationAnimation />
      <div className="px-32">
        <EducationFade />
      </div>
    </div>
  );
};

export default Education;
