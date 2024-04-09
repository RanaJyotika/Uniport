"use client";
import React from "react";
import { TextRevealCard } from "../ui/text-reveal-card";
import { AceternityAnimatedTooltip } from "./animated-tooltip";

export function AceternityTextRevealCard() {
  return (
    <div className="flex max-xl:flex-col items-center justify-center bg-zinc-900 w-full">
      <TextRevealCard
        text="Uniport, made with ❤️"
        revealText="By students of PTU "
      ></TextRevealCard>
      <AceternityAnimatedTooltip />
    </div>
  );
}
