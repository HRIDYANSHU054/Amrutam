"use client";

import { useState } from "react";

// interface TimeSlotSelectProps {}

const availableTimeSlots = [
  {
    label: "Mon, 10 Oct",
    value: "Mon 10 Oct",
    slots: 10,
    morning: [
      "9:00 AM",
      "9:30 AM",
      "10:00 AM",
      "10:15 AM",
      "10:45 AM",
      "11:00 AM",
    ],
    evening: ["4:00 PM", "4:15 PM", "4:30 PM", "4:45 PM", "5:15 PM"],
  },
  {
    label: "Tue, 11 Oct",
    value: "Tue, 11 Oct",
    slots: 2,
    morning: [
      "9:00 AM",
      "9:30 AM",
      "10:00 AM",
      "10:15 AM",
      "10:45 AM",
      "11:00 AM",
    ],
    evening: ["4:00 PM", "4:15 PM", "4:30 PM", "4:45 PM", "5:30 PM"],
  },
  {
    label: "Wed, 12 Oct",
    value: "Wed, 12 Oct",
    slots: 5,
    morning: [
      "9:00 AM",
      "9:30 AM",
      "10:00 AM",
      "10:15 AM",
      "10:45 AM",
      "11:00 AM",
    ],
    evening: ["4:00 PM", "4:15 PM", "4:30 PM", "4:45 PM", "5:00 PM", "5:45 PM"],
  },
];

function TimeSlotSelect() {
  const [timeSlotDay, setTimeSlotDay] = useState<string>(
    availableTimeSlots[0].value ?? ""
  );
  const [timeSlotTime, setTimeSlotTime] = useState<string>("");

  function handleSelectTimeSlotDay(day: string) {
    setTimeSlotDay(day);
  }

  function handleSelectTimeSlotTime(time: string) {
    setTimeSlotTime(time);
  }

  return (
    <div className="w-full">
      <div className="flex gap-3 items-center mt-8 mb-8">
        <p className="text-black font-nunito font-bold text-[20px] tracking-[0.5px]">
          Pick a time slot
        </p>
        <div className="flex-1 border border-[#d4d4d4]"></div>
        <div className="flex justify-center items-center rounded-full size-[45px] border border-[#d4d4d4]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 2V6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 2V6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 10H21"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-evenly gap-[34px]">
        {availableTimeSlots.map(({ value, label, slots }) => {
          const isActiveMode = value === timeSlotDay;
          const slotString = slots < 10 ? `0${slots} slots` : `${slots} slots`;
          const slotTextColor =
            slots >= 10
              ? "text-[#606060]"
              : slots >= 5
              ? "text-[#D5512E]"
              : "text-[#F1B93A]";

          return (
            <button
              key={value}
              onClick={() => handleSelectTimeSlotDay(value)}
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
              <p
                className={` font-nunito font-bold text-[16px] tracking-[0.5px] group-hover:text-[#606060]  transition duration-75 ${
                  isActiveMode ? "text-[#606060]" : slotTextColor
                }`}
              >
                {slotString}
              </p>
            </button>
          );
        })}
      </div>

      {/* Morning Slots */}
      <div className="flex flex-col px-5 gap-[13px] mt-8">
        <p className="font-nunito font-bold text-[18px] tracking-[0.2px] text-black">
          Morning
        </p>
        <div className="flex gap-[12px] flex-wrap">
          {availableTimeSlots
            .filter((slot) => slot.value === timeSlotDay)[0]
            .morning.map((morningTime) => {
              const isSelectedTime = morningTime === timeSlotTime;

              return (
                <button
                  key={morningTime}
                  onClick={() => handleSelectTimeSlotTime(morningTime)}
                  className={` rounded-[22px] border flex justify-center items-center border-[#ebebeb] transition p-4 font-inter text-[15px] tracking-[0.2px] hover:bg-primary  hover:text-white ${
                    isSelectedTime
                      ? "bg-primary  text-white"
                      : "bg-white text-[#131313]"
                  }`}
                >
                  {morningTime}
                </button>
              );
            })}
        </div>
      </div>

      {/* Evening Slots */}
      <div className="flex flex-col px-5 gap-[13px] mt-8 mb-10">
        <p className="font-nunito font-bold text-[18px] tracking-[0.2px] text-black">
          Evening
        </p>
        <div className="flex gap-[12px] flex-wrap">
          {availableTimeSlots
            .filter((slot) => slot.value === timeSlotDay)[0]
            .evening.map((eveningTime) => {
              const isSelectedTime = eveningTime === timeSlotTime;

              return (
                <button
                  key={eveningTime}
                  onClick={() => handleSelectTimeSlotTime(eveningTime)}
                  className={` rounded-[22px] border flex justify-center items-center border-[#ebebeb] transition p-4 font-inter text-[15px] tracking-[0.2px] hover:bg-primary  hover:text-white ${
                    isSelectedTime
                      ? "bg-primary  text-white"
                      : "bg-white text-[#131313]"
                  }`}
                >
                  {eveningTime}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TimeSlotSelect;
