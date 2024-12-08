"use client";
import React from "react";
import {Hero} from "@/app/hero"
import {Nav} from "@/app/nav"
import { ScrollIndicator } from "@/components/ui/scroll";
import { Pricing } from "@/components/ui/pricing";
import { Bento } from "./bento";
export default function Home() {
  return (
    <>
    <div className=" w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] ">
    <Nav/>
    <Hero></Hero>
    <ScrollIndicator/>
    <Bento/>
    <h1 className="text-2xl  px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto ">Pricing</h1>
    <Pricing/>
    <div className="h-[200rem]"></div></div>
    </>
  );
}

