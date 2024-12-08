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
    <Hero/>
    <ScrollIndicator/>
    <Bento/>
    <Pricing/>
    <div className="h-[200rem]"></div></div>
    </>
  );
}

