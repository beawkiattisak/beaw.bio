"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EducationAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scale = 1 + scrollY / 1000; // Adjust the divisor to control the speed of scaling

  // Define responsive font size for mobile phones
  const getFontSize = () => {
    // Define the initial and final font size values
    const fontSizeIn = 1; // Initial font size (1rem)
    const fontSizeOut = 7; // Final font size (7rem) for larger screens
  
    // Calculate the font size based on the scale with a transition from 1rem to 7rem
    const scaledFontSize = fontSizeIn + (fontSizeOut - fontSizeIn) * (scale / 2); // Adjust the divisor as needed for the transition duration
  
    // Ensure that the font size does not exceed 7rem for larger screens
    const clampedFontSize = Math.min(fontSizeOut, scaledFontSize);
  
    // Define a breakpoint for mobile screens (adjust as needed)
    const mobileBreakpoint = 768;
  
    if (typeof window !== 'undefined' && window.innerWidth < mobileBreakpoint) {
      // For screens less than 768px (typical mobile phone size)
      return `${Math.min(4, clampedFontSize)}rem`; // Limit font size to 4rem for mobile
    }
  
    return `${clampedFontSize}rem`;
  };
  
  return (
    <div className="flex justify-center items-center">
      <div className="text-center">
        <motion.div
          className="font-mono text-stone-800 font-bold pt-20"
          style={{
            fontSize: getFontSize(), // Apply responsive font size
          }}
        >
          Education
        </motion.div>
      </div>
    </div>
  );
};

export default EducationAnimation;
