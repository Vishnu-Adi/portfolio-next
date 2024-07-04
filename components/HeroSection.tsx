"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from 'next/image';
import { SiLinkedin, SiTwitter, SiGithub } from 'react-icons/si';

import img from '../public/assets/profile.jpg';

export default function HeroSection() {
  const words = `AI/ML Engineer and Full Stack Developer with a passion for creating beautiful and intuitive digital experiences.`;

  const handleContactMe = () => {
    window.location.href = 'mailto:vishnuadithya7@gmail.com';
  };

  const handleDownloadCV = () => {
    const downloadUrl = '/main_resume.pdf';
    fetch(downloadUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.setAttribute('download', 'main_resume.pdf');
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  };

  return (
    <div className="min-h-[70vh] flex flex-col lg:flex-row items-center relative animate-move-up px-6 lg:px-12">
      <div className="w-full lg:w-1/2 lg:pr-8 pr-20">
        <div className="space-y-6 lg:space-y-10 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Hi! Nice to meet you <br />
            <span className="underline underline-offset-8 decoration-amber-900">
              {"I'm Vishnu Adithya"}
            </span>
          </h1>
          <TextGenerateEffect words={words} />
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-4 lg:mt-6">
            <SiLinkedin size={32} className="text-blue-800 cursor-pointer hover:text-blue-900" onClick={() => window.open('https://linkedin.com/in/dheeraj-jha451/', '_blank')} />
            <SiTwitter size={32} className="text-blue-400 cursor-pointer hover:text-blue-600" onClick={() => window.open('https://twitter.com/dheerajjha451', '_blank')} />
            <SiGithub size={32} className="text-gray-700 cursor-pointer hover:text-gray-900" onClick={() => window.open('https://github.com/Dheerajjha451', '_blank')} />
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mt-8">
            <Button
              className="inline-flex h-12 w-full lg:w-auto items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-6 transition-all duration-300 hover:shadow-lg hover:from-blue-900 hover:to-indigo-900"
              onClick={handleContactMe}
            >
              Contact Me
            </Button>
            <Button
              className="inline-flex h-12 w-full lg:w-auto items-center justify-center rounded-md border border-gray-400 bg-white text-gray-700 font-medium px-6 transition-all duration-300 hover:bg-gray-800 hover:text-white mt-4 lg:mt-0"
              onClick={handleDownloadCV}
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <div className="w-full  lg:max-w-md mx-auto">
          <Image
            className="rounded-full shadow-lg"
            src={img}
            alt="Profile"
            width={400}
            height={400}
          />
        </div>
      </div>
      <a className="absolute bottom-8 left-1/2 transform -translate-x-1/2" href="#Skills">
        <img src="./down-arrow.png" alt="Scroll down" className="w-4 h-4 md:h-5 md:w-5 object-cover" />
      </a>
    </div>
  );
}
