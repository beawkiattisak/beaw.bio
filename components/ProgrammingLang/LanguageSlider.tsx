import React from "react";
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import TypeScriptIcon from '../../public/typescript.svg';
import GoLangIcon from '../../public/golang2.svg';
import SwiftIcon from '../../public/swift.svg';
import KotlinIcon from '../../public/kotlin.svg';
import cppIcon from '../../public/c.svg';
import pythonIcon from '../../public/python.svg';
import rustIcon from '../../public/rust.svg';
import rubyIcon from '../../public/ruby.svg';
import javaIcon from '../../public/java.svg';

const skillIcons = [
  { icon: TypeScriptIcon, alt: "TypeScript Icon", width: 200 },
  { icon: GoLangIcon, alt: "GoLang Icon", width: 270 },
  { icon: SwiftIcon, alt: "Swift Icon", width: 480 },
  { icon: KotlinIcon, alt: "Kotlin Icon", width: 210 },
  { icon: cppIcon, alt: "C++ Icon", width: 200 },
  { icon: pythonIcon, alt: "Python Icon", width: 340 },
  { icon: rustIcon, alt: "Rust Icon", width: 250 },
  { icon: rubyIcon, alt: "Ruby Icon", width: 327.5 },
  { icon: javaIcon, alt: "Java Icon", width: 200 },
];

const LanguageSlider = () => {
  return (
    <Marquee direction="left" loop={0}>
      <div className="flex items-center">
        {skillIcons.map((skill, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-8">
            <Image src={skill.icon} alt={skill.alt} width={skill.width} />
          </div>
        ))}
      </div>
    </Marquee>
  );
}

export default LanguageSlider;
