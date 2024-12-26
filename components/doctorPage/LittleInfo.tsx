import Link from "next/link";

interface LittleInfoProps {
  infoData: {
    languages: string[];
    description: string;
  };
}

function LittleInfo({ infoData: { description, languages } }: LittleInfoProps) {
  return (
    <section className="flex flex-col w-full rounded-[18px] bg-white border overflow-hidden border-[#dcdcdc] ">
      {/* header */}
      <div className="py-4 px-7 justify-between flex bg-gradient-to-r from-[#fbfcfb] to-[#f4f7ec]">
        <p className="font-nunito font-semibold text-[24px] text-[#313131]">
          A Little About me
        </p>

        <button className="flex items-center justify-center bg-white border border-primary rounded-[10px] px-[21px] py-[6px] gap-[10px] ">
          <span className="font-poppins font-medium text-[16px] leading-[24px] text-[#585858] ">
            Follow me
          </span>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66406 1V15"
              stroke="#5A5A5A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1.66406 8L15.6641 8"
              stroke="#5A5A5A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* body */}
      <div className="flex py-8 px-7 flex-col w-full gap-7 ">
        {/* description */}
        <div className="flex flex-col items-center w-full">
          <p className="font-poppins font-medium text-[16px] leading-[27px] text-left text-[rgba(51,53,72,0.5)]">
            {description}
          </p>
          <div className="flex items-center gap-2 w-full">
            <div className="flex-1 border-[0.5px] border-[#dbd9d9]"></div>
            <button className=" hover:underline font-poppins font-medium text-[16px] leading-[27px] text-[#2b2b2b]">
              Read More
            </button>
          </div>
        </div>

        {/* Language Spoken */}
        <div className="flex items-center gap-2">
          <p className="font-nunito font-medium text-[20px] leading-[20px] tracking-[-1%] text-black">
            Language Spoken
          </p>
          <ul className="flex gap-2 flex-wrap">
            {languages.map((lang) => {
              return (
                <button
                  key={lang}
                  className="rounded-[16px] px-[15px] py-[7px] bg-[rgba(46,55,164,0.04)] font-nunito font-medium text-[20px] leading-[20px] text-[#505050]"
                >
                  {lang}
                </button>
              );
            })}
          </ul>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-[15px] justify-start">
          {/* facebook */}
          <Link
            href="#"
            className="flex items-center justify-center size-[40px] rounded-full bg-[rgba(46,55,164,0.04)]"
          >
            <svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z"
                stroke="#3A643B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          {/* Instagram */}
          <Link
            href="#"
            className="flex items-center justify-center size-[40px] rounded-full bg-[rgba(46,55,164,0.04)]"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z"
                stroke="#3A643B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.9997 10.3703C15.1231 11.2025 14.981 12.0525 14.5935 12.7993C14.206 13.5461 13.5929 14.1517 12.8413 14.53C12.0898 14.9082 11.2382 15.0399 10.4075 14.9062C9.57683 14.7726 8.80947 14.3804 8.21455 13.7855C7.61962 13.1905 7.22744 12.4232 7.09377 11.5925C6.96011 10.7619 7.09177 9.9102 7.47003 9.15868C7.84829 8.40716 8.45389 7.79404 9.20069 7.40654C9.94749 7.01904 10.7975 6.87689 11.6297 7.0003C12.4786 7.12619 13.2646 7.52176 13.8714 8.12861C14.4782 8.73545 14.8738 9.52138 14.9997 10.3703Z"
                stroke="#3A643B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 5.5H16.51"
                stroke="#3A643B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          {/* YouTube */}
          <Link
            href="#"
            className="flex items-center justify-center size-[40px] rounded-full bg-[rgba(46,55,164,0.04)]"
          >
            <svg
              width="24"
              height="17"
              viewBox="0 0 24 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5406 3.42C22.4218 2.94541 22.1799 2.51057 21.8392 2.15941C21.4986 1.80824 21.0713 1.55318 20.6006 1.42C18.8806 1 12.0006 1 12.0006 1C12.0006 1 5.12057 1 3.40057 1.46C2.92982 1.59318 2.50255 1.84824 2.16192 2.19941C1.82129 2.55057 1.57936 2.98541 1.46057 3.46C1.14579 5.20556 0.991808 6.97631 1.00057 8.75C0.989351 10.537 1.14334 12.3213 1.46057 14.08C1.59153 14.5398 1.83888 14.9581 2.17872 15.2945C2.51855 15.6308 2.93939 15.8738 3.40057 16C5.12057 16.46 12.0006 16.46 12.0006 16.46C12.0006 16.46 18.8806 16.46 20.6006 16C21.0713 15.8668 21.4986 15.6118 21.8392 15.2606C22.1799 14.9094 22.4218 14.4746 22.5406 14C22.8529 12.2676 23.0069 10.5103 23.0006 8.75C23.0118 6.96295 22.8578 5.1787 22.5406 3.42Z"
                stroke="#3A643B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.75 12.0205L15.5 8.75047L9.75 5.48047V12.0205Z"
                stroke="#3A643B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          {/* Twiiter */}
          <Link
            href="#"
            className="flex items-center justify-center size-[40px] rounded-full bg-[rgba(46,55,164,0.04)]"
          >
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 1.01006C22.0424 1.68553 20.9821 2.20217 19.86 2.54006C19.2577 1.84757 18.4573 1.35675 17.567 1.13398C16.6767 0.911216 15.7395 0.967251 14.8821 1.29451C14.0247 1.62177 13.2884 2.20446 12.773 2.96377C12.2575 3.72309 11.9877 4.62239 12 5.54006V6.54006C10.2426 6.58562 8.50127 6.19587 6.93101 5.4055C5.36074 4.61513 4.01032 3.44869 3 2.01006C3 2.01006 -1 11.0101 8 15.0101C5.94053 16.408 3.48716 17.109 1 17.0101C10 22.0101 21 17.0101 21 5.51006C20.9991 5.23151 20.9723 4.95365 20.92 4.68006C21.9406 3.67355 22.6608 2.40277 23 1.01006Z"
                stroke="#3A643B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LittleInfo;
