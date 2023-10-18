import Image from 'next/image';
import React from 'react';
import Facebook from '../../public/facebook.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full h-12 bg-blue-700 text-white flex flex-col items-center justify-center">
      <span className="text-xl font-mono text-center">
        Made by <Link href="https://www.facebook.com/kiattisakbeawsanburee/">Kiattisak Sanburee</Link>
      </span>
      <div className="flex items-center space-x-4">
        {/* Add your other content here */}
      </div>
    </div>
  );
};

export default Footer;
