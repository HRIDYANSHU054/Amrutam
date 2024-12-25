import { ReactNode } from "react";
import Image from "next/image";

import NavLinks from "@/components/header/NavLinks";

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="flex items-center justify-center bg-[#FFF7E2] px-[80px] py-[20px]">
        {/* logo */}
        {/* <div className="flex items-center bg-[yellow]">
          <Image src="/navlogo.png" alt="logo" width={259} height={49} />
        </div> */}
        <div className="relative w-[259px] h-[49px] ">
          <Image
            src="/navlogo.png"
            alt="logo"
            fill
            className="object-center object-contain"
          />
        </div>

        {/* links */}
        <NavLinks />

        {/* auth buttons */}
        <div className="flex items-center gap-4 ml-auto">
          <button className="btn--shining-dark rounded-[11px] border px-[37px] pt-[11px] pb-[16px] border-[#3A643B] text-[24px] font-dinProMedium text-[#3A643B]">
            <span>Login</span>
          </button>
          <button className="btn--shining-light  rounded-[11px] border px-[37px] pt-[11px] pb-[16px] bg-[#3A643B] text-[24px] font-dinProMedium text-white">
            <span>Sign-up</span>
          </button>
        </div>
      </header>
      <main className="flex flex-col flex-1  overflow-hidden">
        <div className="h-full overflow-y-auto  scroll-smooth ">{children}</div>
      </main>
    </>
  );
}

export default layout;
