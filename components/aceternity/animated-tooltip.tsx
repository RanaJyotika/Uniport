"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import BoyImg from "@/public/boy.png";
import GirlImg from "@/public/girl.png";

const people = [
  {
    id: 1,
    name: "Er. Aditya Sharma",
    designation: "Project Mentor",
    image: BoyImg,
  },
  {
    id: 2,
    name: "Bina Pal",
    designation: "UI/UX Designer",
    image: GirlImg,
  },
  {
    id: 3,
    name: "Jyotika Rana",
    designation: "Front End Developer",
    image: GirlImg,
  },
  {
    id: 4,
    name: "Aryan",
    designation: "Full Stack Developer",
    image: BoyImg,
  },
];

export function AceternityAnimatedTooltip() {
  return (
    <div className="flex flex-row items-center justify-center w-full bg-zinc-900 p-4">
      <AnimatedTooltip items={people} />
    </div>
  );
}
