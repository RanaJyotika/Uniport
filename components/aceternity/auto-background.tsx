"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { MoveRight } from "lucide-react";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export function AceternityAuroraBackground() {
  const { isSignedIn } = useAuth();

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 max-w-screen-xl"
      >
        <div className="text-3xl md:text-7xl font-bold text-white text-center">
          The Best AI park for
        </div>
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Conversation.",
                "Photo Generation.",
                "Music Generation.",
                "Code Generation.",
                "Video Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
          Create content using AI 10X faster.
        </div>

        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <button className="bg-white rounded-full w-fit flex items-center text-black px-4 py-2">
            Start Generating for Free
            <MoveRight className="ml-2 animate-pulse" />
          </button>
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}
