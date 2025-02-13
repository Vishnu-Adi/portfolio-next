import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import project2Image from '../public/assets/ui1.png';
import project3Image from '../public/assets/UI2.png';
import project4Image from '../public/assets/UI3.png';
import project5Image from '../public/assets/UI4.png';
import project6Image from '../public/assets/ui5.png';
import project7Image from '../public/assets/ui6.png';
import project8Image from '../public/assets/UI8.png';
import project9Image from '../public/assets/ui11.png';
import project10Image from '../public/assets/ui13.png';
import project11Image from '../public/assets/ui14.png';

export const products = [
  {
    title: "Airbnb",
    link: "",
    thumbnail: project2Image,
  },
  {
    title: "Education Website Design",
    link: "",
    thumbnail: project4Image,
  },
  {
    title: "Drone",
    link: "",
    thumbnail: project3Image,
  },
  {
    title: "Instagram",
    link: "",
    thumbnail: project5Image,
  },
  {
    title: "Desktop UI",
    link: "",
    thumbnail: project6Image,
  },
  {
    title: "Desktop UI",
    link: "",
    thumbnail: project7Image,
  },
  {
    title: "Mobile UI",
    link: "",
    thumbnail: project8Image,
  },
  {
    title: "Mobile UI",
    link: "",
    thumbnail: project9Image,
  },
  {
    title: "Mobile UI",
    link: "",
    thumbnail: project10Image,
  },
  {
    title: "Mobile UI",
    link: "",
    thumbnail: project11Image,
  },
];

export function Uichallenge() {
  return <HeroParallax products={products} />;
}
