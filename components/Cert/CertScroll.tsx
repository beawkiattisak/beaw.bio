"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

const CertScroll = () => {
  const [certificates, setCertificates] = useState<string[]>([]);

  useEffect(() => {
    const importCertificates = async () => {
      const certificatesToImport = [];

      for (let i = 1; i <= 20; i++) {
        try {
          const cert = await import(`../../public/certificate/${i}.png`);
          certificatesToImport.push(cert.default);
        } catch (error) {
          console.error(`Error importing certificate ${i}:`, error);
        }
      }

      setCertificates(certificatesToImport);
    };

    importCertificates();
  }, []);

  return (
    <Marquee
      direction="right"
      speed={175}
      pauseOnHover={true}
      gradient={false}
      className="flex items-center"
    >
      {certificates.map((certificate, index) => (
        <Image
          key={index}
          src={certificate}
          alt={`Certificate ${index + 1}`}
          height={300} // You may need to adjust the width and height as per your image dimensions
          className="shadow-gold transition hover:scale-125 hover:shadow-none hover:duration-500 mx-16 my-10"
          />
      ))}
    </Marquee>
  );
};

export default CertScroll;