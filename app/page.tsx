import React from 'react';
import HeroSection from '@/components/HeroSection';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';

export default function Page() {
  return (
   
    <div className=" bg-black">
      <div className="mb-40">
      <Navbar />
      </div>
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05]">
        <div className="max-w-7xl min-h-screen mx-auto">
          <HeroSection />
         
        </div>
        
        <div className="max-w-7xl mx-auto my-20 sm:my-20">
          <Skills />
        </div>
        <div className="max-w-7xl mx-auto">
          <Projects />
        </div>
      </div>
     
    </div>
  );
}
