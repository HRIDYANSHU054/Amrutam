import Image from "next/image";

function Specializations() {
  return (
    <section className="flex flex-col w-full rounded-[18px] bg-white border overflow-hidden border-[#dcdcdc] ">
      {/* header */}
      <div className="py-4 px-7 justify-between flex bg-gradient-to-r from-[#fbfcfb] to-[#f4f7ec]">
        <p className="font-nunito font-semibold text-[24px] text-[#313131]">
          I Specialize In
        </p>
      </div>

      {/* body */}
      <div className="flex py-8 px-7  w-full gap-[14px] flex-wrap ">
        {/* specialization Cards */}
        <div className="flex gap-[7px] flex-col items-center ">
          {/* card Image container */}
          <div className=" rounded-[9px] bg-[#fffcf2] border size-[100px] border-[#eaeaea]  flex items-center justify-center">
            <div className="relative h-[75px] w-[75px] rounded-full overflow-hidden   bg-primary border-2 border-[#e0e8e2]">
              <Image
                src="/Womenhealth.png"
                alt="Women Health"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <p className=" font-nunito w-full font-medium text-[16px] leading-[19.2px] text-black">
            Women&apos;s health
          </p>
        </div>

        <div className="flex gap-[7px] flex-col">
          {/* card Image container */}
          <div className=" rounded-[9px] bg-[#fffcf2] border size-[100px] border-[#eaeaea]  flex items-center justify-center">
            <div className="relative size-[75px] overflow-hidden rounded-full bg-primary border-2 border-[#e0e8e2]">
              <Image
                src="/Skincare.png"
                alt="Skin Care"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <p className="font-nunito font-medium text-center text-[16px] leading-[19.2px] text-black">
            Skin Care
          </p>
        </div>

        <div className="flex gap-[7px] flex-col">
          {/* card Image container */}
          <div className="rounded-[9px] bg-[#fffcf2] border size-[100px] border-[#eaeaea]  flex items-center justify-center">
            <div className="relative size-[75px] overflow-hidden rounded-full bg-primary border-2 border-[#e0e8e2]">
              <Image
                src="/Immunity.png"
                alt="Immunity"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <p className="font-nunito text-center font-medium text-[16px] leading-[19.2px] text-black">
            Immunity
          </p>
        </div>

        <div className="flex gap-[7px] flex-col">
          {/* card Image container */}
          <div className="rounded-[9px] bg-[#fffcf2] border size-[100px] border-[#eaeaea]  flex items-center justify-center">
            <div className="relative size-[75px] overflow-hidden rounded-full bg-primary border-2 border-[#e0e8e2]">
              <Image
                src="/Hair.png"
                alt="Hair Care"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <p className="font-nunito font-medium text-[16px] text-center leading-[19.2px] text-black">
            Hair Care
          </p>
        </div>
      </div>
    </section>
  );
}

export default Specializations;
