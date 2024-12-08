"use client";
import React from "react";
import {Hero} from "@/app/hero"
import {Nav} from "@/app/nav"
import { ScrollIndicator } from "@/components/ui/scroll";
import { Pricing } from "@/components/ui/pricing";
import { Bento } from "@/app/bento";
import { Accord } from "@/app/accord";



export default function Landing() {
  return (
    <>
    <div className=" w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] ">
    <Nav/>
    <Hero/>
    <ScrollIndicator/>
    <Bento/>
    <Pricing/>
    <Accord/>
    </div>
    </>
  );
}

