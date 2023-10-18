"use client";
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import logoSchool from '../../public/Logo.png';
import Link from 'next/link';

const schoolLogo = 'https://cdn.discordapp.com/attachments/1164170305158258728/1164170598478520382/Logo.png?ex=65423d5b&is=652fc85b&hm=2dcb0bbcdc849de083fd2bcaa86f8a3e3f8378a420a8e008297f7545055e5cf6&';

const EducationFade = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Calculate opacity based on the scroll position
    const opacity = Math.min(1, scrollY / 400); // Adjust the divisor for sensitivity
    controls.start({ opacity }); // Animate the opacity
  }, [scrollY, controls]);

  return (
    <div className="text-center">
      <motion.div
        className="text-black font-mono font-bold"
        initial={{ opacity: 0 }} // Set initial opacity to 0
        animate={controls}
      >
        <div className="p-4 md:p-8 lg:p-12">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Link
            href="https://acr.ac.th"
          >
            <Image
              width={300}
              height={300}
              className="mb-4 md:mb-6 lg:mb-8 hover:scale-110 transform duration-500 ease-in-out "
              src={schoolLogo}
              alt="School Logo"
            />
            </Link>
            <p className="font-sans text-4xl md:text-5xl font-normal text-stone-700">Assumption College Rayong</p>
          </div>
          <div>
          <p className="font-sans text-2xl md:text-3xl font-normal text-gray-500 py-2">Enrollment: 2014 - Present</p>
        <p className="font-sans text-2xl md:text-3xl font-normal text-gray-500">
        Educational Program: Studied Smart Science Program from 7th grade to 9th grade.
        </p>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationFade;
