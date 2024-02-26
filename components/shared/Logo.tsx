"use client";

import Link from "next/link";
import React, { useRef } from "react";
import Mainlogo from "./Mainlogo";
import { gsap } from "gsap";

export default function Logo() {
  const logoRef = useRef<HTMLDivElement>(null);

  function onLogoEnter() {
    const logoSvg = logoRef.current?.firstChild?.firstChild;

    gsap.to(logoSvg!, { fill: "#a86485", duration: 0.2, ease: "power1.out" });
  }

  function onLogoLeave() {
    const logoSvg = logoRef.current?.firstChild?.firstChild;

    gsap.to(logoSvg!, {
      fill: "#3a4454",
      duration: 0.2,
      ease: "power1.out",
    });
  }

  return (
    <div>
      <Link href="/" className="sidebar-logo">
        <div
          className="pointer-events-auto leading-none m-auto [&>svg]:h-28 [&>svg]:w-auto  [&>svg]:duration-500 [&>svg]:ease-out"
          data-color="#3a4454"
          ref={logoRef}
          onMouseEnter={onLogoEnter}
          onMouseLeave={onLogoLeave}
        >
          <Mainlogo />
        </div>
      </Link>
    </div>
  );
}
