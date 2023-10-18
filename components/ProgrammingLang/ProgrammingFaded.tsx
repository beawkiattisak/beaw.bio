"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import LanguageSlider from './LanguageSlider';

const ProgrammingFaded = () => {
  const textControls = useAnimation();
  const languageControls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const isMobile = window.innerWidth <= 768; // Define your mobile breakpoint

        if (isMobile) {
          // Mobile logic: Trigger animation when element is at half of the screen
          if (elementTop < windowHeight / 2) {
            textControls.start({ opacity: 0, transition: { duration: 0.3 } });
            languageControls.start({ opacity: 1, transition: { duration: 0.3 } });
          } else {
            textControls.start({ opacity: 1, transition: { duration: 0.3 } });
            languageControls.start({ opacity: 0, transition: { duration: 0.3 } });
          }
        } else {
          // PC logic: Trigger animation when element is at one-fourth of the screen
          if (elementTop < windowHeight / 4) {
            textControls.start({ opacity: 0, transition: { duration: 0.3 } });
            languageControls.start({ opacity: 1, transition: { duration: 0.3 } });
          } else {
            textControls.start({ opacity: 1, transition: { duration: 0.3 } });
            languageControls.start({ opacity: 0, transition: { duration: 0.3 } });
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [textControls, languageControls]);

  return (
    <div className="w-full relative min-h-screen flex justify-center items-center">
      <motion.div
        ref={ref}
        className="text-center py-8 sm:py-16 md:py-32 lg:py-40 xl:py-48 text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-stone-800 font-mono font-bold"
        initial={{ opacity: 1 }}
        animate={textControls}
      >
        Programming Language
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={languageControls}
      >
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
        initial={{ opacity: 1 }}
        animate={languageControls}
      >
        <LanguageSlider />
      </motion.div>
    </div>
  );
};

export default ProgrammingFaded;
