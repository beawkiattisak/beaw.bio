import Image from 'next/image';
import React from 'react';
import TypeScriptIcon from "../../public/typescript.svg";
import GoLangIcon from "../../public/golang.svg";
import RubyIcon from "../../public/ruby.svg";

const WebCard = () => {
  return (
    <div style={{ height: 650, width: 430 }} className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl px-8 py-8 flex flex-col justify-between">
      <div>
        <div>
          <div className="pb-8 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900">
            <div>
                Web
            </div>
            <div>
            Development
            </div>
          </div>
        </div>

        <div className="px-8">
          <div className="text-light text-stone-400 text-2xl font-normal pb-16">
          <span>&ldquo;I have experience with web development using TypeScript and Next.js, as well as backend development with NestJS and GoLang.&rdquo;</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center"> {/* Adjust the padding here */}
        <div className="text-stone-500 text-2xl font-bold font-sans ">
          Programming Language
        </div>

        <div className="flex items-center pt-8 justify-center pb-12">
          <div className="px-4 group ">
            <Image
              className="rounded-sm filter grayscale transition duration-500 group-hover:filter-none mx-auto" // Center the image
              src={TypeScriptIcon}
              alt="TypeScript Icon"
              width={43}
            />
          </div>
          <div className="px-4 group">
            <Image
              className="rounded-sm filter grayscale transition duration-500 group-hover:filter-none mx-auto" // Center the image
              src={GoLangIcon}
              alt="GoLang Icon"
              width={90}
            />
          </div>
          <div className="px-4 group">
            <Image
              className="rounded-sm filter grayscale transition duration-500 group-hover:filter-none mx-auto" // Center the image
              src={RubyIcon}
              alt="Ruby Icon"
              width={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebCard;
