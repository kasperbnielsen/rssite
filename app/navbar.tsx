"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Home from "./page";

export default function Navbar() {
  const [hover, sethover] = useState<"Skills" | "Raids" | "Minigames">();

  function dropDownItem(items: asd) {
    return (
      <li>
        <Link className={"navitem dropdownitem"} href={items.href}>
          {items.name}
        </Link>
      </li>
    );
  }

  type asd = { name: string; href: string };

  function dropDown(items: asd[]) {
    return (
      <div
        onMouseOver={() => sethover(hover)}
        onMouseLeave={() => sethover(undefined)}
        className={"dropdown"}
      >
        <ul>{items.map(dropDownItem)}</ul>
      </div>
    );
  }

  return (
    <div className={"navbar"}>
      <Link href={"/"}>
        <Image
          src="/../public/image1.png"
          width={50}
          height={50}
          alt="Picture of React"
        />
      </Link>
      <div className={"dropdowndiv"}>
        <Link
          onMouseOver={() => sethover("Skills")}
          onMouseLeave={() => sethover(undefined)}
          className={"nav navitem"}
          href="/Skills"
        >
          Skill guides
        </Link>
        {hover == "Skills" && (
          <div className="dropdownitemdiv">
            {dropDown([
              { name: "Gatherer Skills", href: "/Skills/Gatherer" },
              { name: "Combat Skills", href: "/Skills/Combat" },
              { name: "Crafting Skills", href: "/Skills/Crafting" },
              { name: "Utility Skills", href: "/Skills/Utility" },
            ])}
          </div>
        )}
      </div>
      <div className="dropdowndiv">
        <Link
          onMouseOver={() => sethover("Raids")}
          onMouseLeave={() => sethover(undefined)}
          className={"nav navitem"}
          href="/About"
        >
          Raids
        </Link>
        {hover == "Raids" && (
          <div className="dropdownitemdiv">
            {dropDown([{ name: "Heyyyy", href: "/About" }])}
          </div>
        )}
      </div>
      <div className="dropdowndiv">
        <Link
          onMouseOver={() => sethover("Minigames")}
          onMouseLeave={() => sethover(undefined)}
          className={"nav navitem"}
          href="/About"
        >
          Minigames
        </Link>
        {hover == "Minigames" && (
          <div className="dropdownitemdiv">
            {dropDown([{ name: "column1", href: "/About" }])}
          </div>
        )}
      </div>
      <Link className={"nav navitem"} href="/About">
        press here
      </Link>
      <Link className={"nav navitem"} href="/About">
        press here
      </Link>
      <Link className={"nav navitem"} href="/About">
        press here
      </Link>
      <Link className={"nav navitem"} href="/About">
        press here
      </Link>
      <input className={"nav searchbar"} placeholder="search..."></input>
    </div>
  );
}
