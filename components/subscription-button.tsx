"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Zap } from "lucide-react";
import { useState } from "react";

interface subscriptionButtonProps {
    isPro: boolean;
};

export const subscriptionButton = ({isPro = false} : subscriptionButtonProps) => {
    const [loading, setLoading] = useState(false);
    const onclick = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/stripe");
            window.location.href = response.data.url;
        } catch (error) {
            console.log("BILLING_ERROR" ,error);
            
        }finally {
            setLoading(false);
        }
    }
  return (
    <Button disabled={loading} variant={isPro? "default" : "premium"} onClick={onclick} >
        {isPro ? "Manage Subscription" : "Upgrade"}
        {!isPro && <Zap className="w-4 h-4 ml-2 fill-white"/>}
    </Button>
  )

}  

export default subscriptionButton