"use client";
import React from "react";
import {Hero} from "@/app/hero"
import {Nav} from "@/app/nav"
import { ScrollIndicator } from "@/components/ui/scroll";
export default function Home() {
  return (
    <>
    <Nav/>
    <Hero></Hero>
    <ScrollIndicator/>
    </>
  );
}

