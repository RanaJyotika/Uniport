"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("74523999-f970-44e5-ae40-c4fe9e355fe0");
  }, []);

  return null;
};
