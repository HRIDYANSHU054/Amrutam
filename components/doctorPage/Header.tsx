import { DoctorData } from "@/types/Doctor";
import Image from "next/image";

interface HeaderProps {
  doctorData: DoctorData;
}

function Header({ doctorData: doctor }: HeaderProps) {
  return (
    <section className="relative overflow-hidden flex flex-col rounded-t-[12px] bg-green-500 mt-12 h-[240px] mx-24">
      {/* bg */}
      <div className="relative overflow-hidden h-[197px] w-full">
        <Image
          src="/doctorIdBg.png"
          alt="background image"
          fill
          className="object-cover object-bottom"
        />
      </div>

      {/* doctor's info */}
      <div className="h-[130px] absolute  bottom-0 z-10 border border-[#d8d8d8] bg-peach w-full flex justify-between items-center  px-10">
        {/* doctor profile Image */}
        <div className="absolute -top-[50%] size-[159px] border-4 border-white rounded-full ">
          <Image
            src={doctor.img}
            alt={doctor.name}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* doctor's name , speciality and rating */}
        <div className="flex flex-col font-poppins font-medium ml-[185px]">
          <h1 className="flex items-center gap-2 text-[20px] leading-[21.6px] text-[#212529] font-semibold">
            <span>{doctor.name}</span>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0L17.0711 2.92893L20 10L17.0711 17.0711L10 20L2.92893 17.0711L0 10L2.92893 2.92893L10 0Z"
                fill="#2E37A4"
              />
              <path
                d="M14.6654 7.25L8.2487 13.2083L5.33203 10.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h1>
          <p className="mt-[8px] mb-[16px] text-[15px] leading-[16.8px] text-primary">
            {doctor.speciality}
          </p>
          {/* rating box */}
          <div className="flex gap-2 items-center font-nunito font-semibold text-[15px] leading-[180%] tracking-[-1%] text-[#626262]">
            {/* rating */}
            <span>{doctor.rating}</span>
            <ul className="flex gap-1 mb-1">
              {Array.from({ length: Math.floor(doctor.rating) }).map(
                (_, ind) => (
                  <li key={ind}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.24768 1.23357C7.55389 0.60547 8.44895 0.60547 8.75516 1.23357L10.3828 4.57212C10.504 4.82079 10.7401 4.99366 11.0137 5.03416L14.6719 5.57554C15.3561 5.6768 15.6304 6.51637 15.1379 7.00209L12.479 9.62418C12.2842 9.81633 12.1954 10.0915 12.2411 10.3613L12.8666 14.0539C12.9829 14.7403 12.2603 15.2613 11.6457 14.9341L8.39552 13.2035C8.14916 13.0723 7.85368 13.0723 7.60732 13.2035L4.35713 14.9341C3.74257 15.2613 3.01998 14.7403 3.13626 14.0539L3.76177 10.3613C3.80747 10.0915 3.71865 9.81633 3.5238 9.62418L0.864954 7.00209C0.372428 6.51637 0.646702 5.6768 1.33099 5.57554L4.98911 5.03416C5.26278 4.99366 5.49886 4.82079 5.62009 4.57212L7.24768 1.23357Z"
                        fill="#F79624"
                      />
                    </svg>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* basic stats */}
        <div className="flex gap-[74px] items-center justify-between">
          {/* followers */}
          <div className="flex flex-col gap-[5px]  items-center justify-between">
            <p className="font-poppins font-medium text-[14px] text-primary leading-[16.8px]">
              Followers
            </p>
            <p className="font-poppins font-semibold  text-[20px] leading-[24px] text-[#212529]">
              {doctor.followers}
            </p>
          </div>

          {/* following */}
          <div className="flex flex-col gap-[5px]  items-center justify-between">
            <p className="font-poppins font-medium text-[14px] text-primary leading-[16.8px]">
              Following
            </p>
            <p className="font-poppins font-semibold  text-[20px] leading-[24px] text-[#212529]">
              {doctor.following}
            </p>
          </div>

          {/* posts */}
          <div className="flex flex-col gap-[5px]  items-center justify-between">
            <p className="font-poppins font-medium text-[14px] text-primary leading-[16.8px]">
              Posts
            </p>
            <p className="font-poppins font-semibold  text-[20px] leading-[24px] text-[#212529]">
              {doctor.posts}
            </p>
          </div>
        </div>

        {/* ctaction */}
        <button className="bg-primary flex justify-center items-center btn--shining-light text-white py-[12px] rounded-[8px] font-inter font-medium text-[20px] px-[42px]">
          <span>Book an Appointemnt</span>
        </button>
      </div>
    </section>
  );
}

export default Header;
