import Image from 'next/image';
import React from 'react';
import SwiftIcon from "../../public/swift.svg";
import KotlinIcon from "../../public/kotlin.svg";
import JavaIcon from "../../public/java.svg";

const AppCard = () => {
  return (
    <>
<div style={{ height: 650, width: 430 }} className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl px-8 py-8 flex flex-col justify-between">
      <div>
        <div>
          <div className="pb-8 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900">
              <div>
                Application
              </div>
              <div>
                Development
                </div>
          </div>
        </div>

        <div className="px-8">
          <div className="text-light text-stone-400 text-2xl font-normal pb-8">
          <span>&quot;I specialize in application development using Swift and Kotlin, capable of crafting efficient and user-friendly iOS and Android apps.&quot;</span></div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-stone-500 text-2xl font-bold font-sans">
          Programming Language
        </div>

        <div className="flex items-center pt-5 justify-center pb-12">
          <div className="px-4 group">
            <Image
              className="rounded-sm filter grayscale transition duration-500 group-hover:filter-none mx-auto" // Center the image
              src={SwiftIcon}
              alt="GoLang Icon"
              width={56}
            />
          </div>
          <div className="px-4 group">
            <Image
              className="rounded-sm filter grayscale transition duration-500 group-hover:filter-none mx-auto" // Center the image
              src={KotlinIcon}
              alt="C++ Icon"
              width={40}
            />
          </div>
          <div className="px-4 group">
            <Image
              className="rounded-sm filter grayscale transition duration-500 group-hover:filter-none mx-auto" // Center the image
              src={JavaIcon}
              alt="Java Icon"
              width={40}
            />
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default AppCard;
