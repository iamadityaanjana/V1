"use client";
import React from "react";
import {motion} from 'framer-motion'
import { HeroHighlight} from "@/components/ui/hero-highlight";

export function Hero(){
    return (
        <HeroHighlight>
            <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 2,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl  px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Your Memory, Upgraded: Chat, Schedule, and Leave the Details to Us!{" "}
        <br/>
        <div className="text-black text-xl md:text-2xl py-7 dark:text-white">
        We Remember the Details So You Don{"'"}t Have To!
        </div>
        <div className="text-lg">
        <Button/></div>
      </motion.h1>
      
    </HeroHighlight>
    );
}

function Button(){
    return(
        <div className="flex items-center justify-center">
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Sign Up!
        </button>
  </div>
      
    );
  }

