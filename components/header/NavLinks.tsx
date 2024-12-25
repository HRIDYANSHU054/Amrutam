"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/doctors",
    label: "Find Doctors",
  },
  {
    href: "/about",
    label: "About Us",
  },
];

function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center text-xl gap-[40px] ml-[80px]">
      {links.map(({ href, label }, ind) => {
        const isActive =
          href === "/" ? pathname === href : pathname.startsWith(href);

        return (
          <Link
            key={ind}
            href={href}
            className={`transition   ${
              isActive
                ? "text-[#3A643B] font-dinProBold font-[700]"
                : "font-dinProMedium text-[#474747]"
            } `}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export default NavLinks;
