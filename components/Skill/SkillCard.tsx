import React from 'react';
import SoftwareCard from '.././Card/SoftwareCard';
import AppCard from '.././Card/AppCard';
import WebCard from '.././Card/WebCard';
import { motion } from "framer-motion"


const SkillCard = () => {
  return (
  
<div className="grid grid-cols-1 md:grid-cols-3 md:gap-8  lg:gap-10 gap-32">
      <div className="transition duration-500	 hover:scale-110">
        <WebCard />
      </div>
      <div className="transition duration-500	 hover:scale-110">
        <SoftwareCard />
      </div>
      <div className="transition duration-500	 hover:scale-110">
        <AppCard />
      </div>  
      {/* Add more Card components as needed */}
    </div>
  );
};

export default SkillCard;
