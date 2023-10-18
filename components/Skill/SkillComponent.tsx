import React from 'react';
import SkillPage from './SkillPage';

const SkillComponent = () => {
  return (
    <div className="bg-white">
      <div className="w-full h-1/5 sm:h-2/5 flex items-center overflow-visible">
        <div className="-skew-y-6 min-h-screen relative w-full top-0 left-0 overflow-hidden bg-blue-700">
          <div className="flex items-center justify-center h-full">
            <div className="py-64 sm:py-12 lg:py-48 xl:py-36">
              <div className="relative">
                <div className="skew-y-6">
                  <SkillPage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillComponent;
