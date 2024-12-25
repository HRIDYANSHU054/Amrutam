import Image from "next/image";
import Link from "next/link";

function DoctorCard() {
  return (
    <div className="w-[356px] h-[561px] flex flex-col items-center justify-center rounded-[30px] bg-[#FFF7E2]  border border-[#E3E3E3] shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.07)]">
      {/* Image Container */}
      <div className="relative flex items-center justify-center size-[150px]">
        <Image
          src="/doctorCardProfile.png"
          fill
          alt="doctor"
          className="object-contain object-center"
        />
        {/* Rating */}
        <div className=" absolute z-10 -bottom-1 flex rounded-[17px] gap-2 items-center text-white justify-center px-[12px] py-[4px] bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B] to-[rgba(11,11,11,0.79)]">
          <span className="font-dinProBold font-bold text-[16px] leading-[18px] tracking-[-1%]">
            4.5
          </span>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.85547 16.3333L5.20964 10.4792L0.667969 6.54167L6.66797 6.02083L9.0013 0.5L11.3346 6.02083L17.3346 6.54167L12.793 10.4792L14.1471 16.3333L9.0013 13.2292L3.85547 16.3333Z"
              fill="#EFDA3B"
            />
          </svg>
        </div>
      </div>

      {/* info box */}
      <div className="flex flex-col items-center w-[291px] mt-[21px] gap-4">
        <p className="font-nunito font-[700] text-[32px] text-[#2E2F2E] leading-[28px] tracking-[-1%] ">
          Dr. Prerna Narang
        </p>

        {/* description */}
        <ul className="flex flex-col gap-[7px] items-start justify-start font-nunito text-[16px] text-[#646665] leading-[20px] tracking-[-1%]">
          <li className="flex gap-[15px] items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2003_2063)">
                <path
                  d="M7.00065 13.6673L13.6673 7.00065C13.9788 6.69537 14.2267 6.33136 14.3967 5.92967C14.5667 5.52798 14.6553 5.09658 14.6575 4.66042C14.6597 4.22426 14.5754 3.79198 14.4095 3.3886C14.2436 2.98521 13.9994 2.61871 13.691 2.3103C13.3826 2.00188 13.0161 1.75766 12.6127 1.59177C12.2093 1.42587 11.7771 1.34159 11.3409 1.34379C10.9047 1.34599 10.4733 1.43464 10.0716 1.6046C9.66995 1.77456 9.30594 2.02247 9.00065 2.33399L2.33399 9.00065C2.02247 9.30594 1.77456 9.66995 1.6046 10.0716C1.43464 10.4733 1.34599 10.9047 1.34379 11.3409C1.34159 11.7771 1.42587 12.2093 1.59177 12.6127C1.75766 13.0161 2.00188 13.3826 2.3103 13.691C2.61871 13.9994 2.98521 14.2436 3.3886 14.4095C3.79198 14.5754 4.22426 14.6597 4.66042 14.6575C5.09658 14.6553 5.52798 14.5667 5.92967 14.3967C6.33136 14.2267 6.69537 13.9788 7.00065 13.6673Z"
                  stroke="#3A643B"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.66797 5.6665L10.3346 10.3332"
                  stroke="#3A643B"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2003_2063">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span>Male-Female Infertility</span>
          </li>

          <li className="flex gap-[15px] items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 10V16M21 10L11 5L1 10L11 15L21 10Z"
                stroke="#3A643B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 11.9985V16.9985C8 19.9985 14 19.9985 17 16.9985V11.9985"
                stroke="#3A643B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>7 years of Experience</span>
          </li>

          <li className="flex gap-[15px] items-center">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="18" height="16" fill="url(#pattern0_2003_2073)" />
              <defs>
                <pattern
                  id="pattern0_2003_2073"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_2003_2073"
                    transform="matrix(0.00390625 0 0 0.00439453 0 -0.0625)"
                  />
                </pattern>
                <image
                  id="image0_2003_2073"
                  width="256"
                  height="256"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>

            <span>Speaks: English, Hindi, Marathi</span>
          </li>
        </ul>

        {/* pricing */}
        <div className="flex gap-[8px] items-center justify-center">
          {/* video consultation */}
          <div className="flex flex-col items-center gap-[4px] p-2 rounded-[10px] border border-[rgba(58,100,59,0.39)] font-nunito text-[14px] leading-[20px] tracking-[-1%]">
            <p className="font-semibold text-[#3c3c3c]">Video Consultation</p>
            <p className="text-primary font-[700]">₹800</p>
          </div>

          {/* Chat Consultation */}
          <div className="flex flex-col items-center gap-[4px] p-2  rounded-[10px] border border-[rgba(58,100,59,0.39)] font-nunito text-[14px] leading-[20px] tracking-[-1%]">
            <p className="font-semibold text-[#3c3c3c]">Chat Consultation</p>
            <p className="text-primary font-bold">Free</p>
          </div>
        </div>
      </div>

      {/* ctactions box */}
      <div className="flex flex-col mt-[32px] w-[291px] gap-[9px]">
        {/* px-78 py-15*/}
        <Link
          href="/doctors/AB73BN21K"
          className="bg-white btn--shining-dark flex items-center justify-center  py-[12px] text-primary text-center rounded-[8px] border border-primary"
        >
          <span>View Profile</span>
        </Link>
        <button className="text-white flex items-center justify-center btn--shining-light py-[12px] bg-primary text-center rounded-[8px]">
          <span>Book a Consultation</span>
        </button>
      </div>
    </div>
  );
}

export default DoctorCard;
