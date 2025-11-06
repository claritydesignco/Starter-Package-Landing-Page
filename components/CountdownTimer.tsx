"use client";

import { useState, useEffect } from "react";
import { getEndOfMonth } from "@/lib/dateUtils";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endOfMonth = getEndOfMonth();
      const now = new Date();
      const difference = endOfMonth.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-red-400 min-w-[80px] text-center">
        <div className="font-bold text-red-600">{timeLeft.days}</div>
        <div className="text-gray-600">Days</div>
      </div>
      <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-red-400 min-w-[80px] text-center">
        <div className="font-bold text-red-600">{timeLeft.hours}</div>
        <div className="text-gray-600">Hours</div>
      </div>
      <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-red-400 min-w-[80px] text-center">
        <div className="font-bold text-red-600">{timeLeft.minutes}</div>
        <div className="text-gray-600">Minutes</div>
      </div>
      <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-red-400 min-w-[80px] text-center">
        <div className="font-bold text-red-600">{timeLeft.seconds}</div>
        <div className="text-gray-600">Seconds</div>
      </div>
    </div>
  );
}
