import React from 'react';
import SoftwareCard from '.././Card/SoftwareCard';
import AppCard from '.././Card/AppCard';
import WebCard from '.././Card/WebCard';
import { motion } from "framer-motion"

const SkillCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:gap-8 gap-32">
      <div className="transition duration-500 hover:scale-110">
        <div className="mx-auto flex justify-center items-center scale-75 lg:scale-100">
          <WebCard />
        </div>
      </div>
      <div className="transition duration-500 hover:scale-110">
        <div className="mx-auto flex justify-center items-center scale-75 lg:scale-100">
          <SoftwareCard />
        </div>
      </div>
      <div className="transition duration-500 hover:scale-110">
        <div className="mx-auto flex justify-center items-center scale-75 lg:scale-100">
          <AppCard />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
