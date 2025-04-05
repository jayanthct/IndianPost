import React, { useState, useEffect } from "react";
import clock from "./time.svg"


const Timer = () => {
  const [time, setTime] = useState(5 * 60); // 5 minutes in seconds

  useEffect(() => {
    if (time === 0) return; // Stop when time reaches 0

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <p className="text-[16px] flex justify-center items-center gap-2 absolute top-0 right-[8%] w-fit font-mono mt-4 text-[#e20a0a] bg-[#e20a0a25] px-2 py-1 rounded-[4px]">
     <img src={clock} alt="" className="clock w-4" /> {formatTime(time)}
    </p>
  );
};

export default Timer;
