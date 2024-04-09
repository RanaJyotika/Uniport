"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Code from "@/public/screenshots/code_generation.png";
import Music from "@/public/screenshots/music_generation.png";
import Video from "@/public/screenshots/video_generation.png";
import Conversation from "@/public/screenshots/conversation.png";
import Image from "@/public/screenshots/image_generation.png";
import Gemini from "@/public/screenshots/gemini.png";

export function AceternityInfiniteMovingCards() {
  return (
    <div className="h-fit pb-28 rounded-md flex flex-col antialiased bg-zinc-900 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Engage users in natural language conversations and provide intelligent responses for various applications. Ask any question and get answered.",
    name: "Conversation AI",
    title: "powered by ChatGPT",
    image: Conversation,
  },
  {
    quote:
      "Utilize AI to generate stunning and unique images based on text prompts or user inputs. Decide the count and resolution of Images required.",
    name: "Image Generation AI",
    title: "powered by ChatGPT",
    image: Image,
  },
  {
    quote:
      "Automatically generate code snippets, scripts, and algorithms based on user-defined requirements or descriptions, with explanation.",
    name: "Code Generation AI",
    title: "powered by ChatGPT",
    image: Code,
  },
  {
    quote:
      "Harness the power of Google's advanced machine learning models to create diverse and creative content, including text, images, and more.",
    name: "Gemini",
    title: "powered by Google Gemini",
    image: Gemini,
  },
  {
    quote:
      "Experience AI-driven music generation that produces original compositions tailored to user preferences and inputs.",
    name: "Music Generation AI",
    title: "powered by Replicate AI",
    image: Music,
  },
  {
    quote:
      "Create professional-quality videos using AI-powered tools, from editing and effects to scene generation and storytelling.",
    name: "Video Generation AI",
    title: "powered by Replicate AI",
    image: Video,
  },
];
