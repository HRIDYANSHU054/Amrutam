import Image from "next/image";

interface WorkExpriencesProps {
  workExperiencesData: {
    organization: string;
    role: string;
    from: number | string;
    till: number | string;
  }[];
}

function WorkExperiences({
  workExperiencesData: workExperience,
}: WorkExpriencesProps) {
  return (
    <section className="flex flex-col w-full rounded-[18px] bg-white border overflow-hidden border-[#dcdcdc] ">
      {/* header */}
      <div className="py-4 px-7 justify-between flex bg-gradient-to-r from-[#fbfcfb] to-[#f4f7ec]">
        <p className="font-nunito font-semibold text-[24px] text-[#313131]">
          My Work Experience
        </p>
      </div>

      {/* body */}
      <div className="flex py-8 px-7 flex-col gap-[24px] w-full flex-wrap ">
        <p className="font-poppins uppercase font-semibold text-[18px] leading-[19.2px] tracking-[0.5px] text-primary">
          I have been in practice for : 7+ Years
        </p>
        {/* divide */}
        <div className="flex-1 border-[0.5px]  border-[#d1d5d1] w-[66%]"></div>

        {workExperience.map((exp, ind) => {
          return (
            <div key={ind + 1} className="flex gap-[10px] items-center mr-20">
              {/* icon container */}
              <div className="self-start relative size-[48px] p-[12px] rounded-[6px] bg-[#f7f7fc] overflow-hidden flex justify-center items-center">
                <Image
                  src="/icons/Workplace.svg"
                  alt="Workplace"
                  width={24}
                  height={24}
                  quality={78}
                  className="object-contain object-center"
                />
              </div>

              {/* name and position */}
              <div className="flex flex-col items-start justify-between gap-[9px] w-[240px] font-poppins font-medium text-[16px] leading-[21px]">
                <p className=" text-[#333548]">{exp.organization}</p>
                <p className="text-[rgba(51,53,72,0.5)]">{exp.role}</p>
              </div>

              {/* Year of work */}
              <p className="ml-auto self-start uppercase w-[127px] font-poppins text-[16px] leading-[21px] text-[rgba(51,53,72,0.71)]">
                {exp.from}-{exp.till}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WorkExperiences;
