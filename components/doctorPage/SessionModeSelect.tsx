"use client";

import { useState } from "react";

// interface SessionModeSelectProps {}

const availableModes = [
  {
    label: "In-Clinic",
    value: "In-Clinic",
    time: "45 Mins",
  },
  {
    label: "Video",
    value: "Video",
    time: "45 Mins",
  },
  {
    label: "Chat",
    value: "Chat",
    time: "10 Mins",
  },
];

function SessionModeSelect() {
  const [mode, setMode] = useState<string>("");

  function handleSelectMode(mode: string) {
    setMode(mode);
  }

  return (
    <div className="w-full">
      <div className="flex gap-3 items-center mt-8 mb-8">
        <p className="text-black font-nunito font-bold text-[20px] tracking-[0.5px]">
          Select your mode of session
        </p>
        <div className="flex-1 border border-[#d4d4d4]"></div>
      </div>

      <div className="flex items-center justify-evenly gap-[34px]">
        {availableModes.map(({ value, label, time }) => {
          const isActiveMode = value === mode;

          return (
            <button
              key={value}
              onClick={() => handleSelectMode(value)}
              className={`flex flex-col items-center justify-center rounded-[10px] border  gap-[4px] w-[158px] h-[78px] transition group hover:border-[rgba(58,99,59,0.52)] hover:bg-[#f2fbf2]  ${
                isActiveMode
                  ? "border-[rgba(58,99,59,0.52)] bg-[#f2fbf2]"
                  : "border-[#e5e5e5] "
              }`}
            >
              <p
                className={`font-nunito font-bold text-[16px] tracking-[0.5px] text-[#1f1f1f] transition group-hover:text-primary ${
                  isActiveMode ? "text-primary" : "text-[#1f1f1f]"
                }`}
              >
                {label}
              </p>
              <p className="font-nunito text-[16px] tracking-[0.5px] text-[#606060] transition">
                {time}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SessionModeSelect;
