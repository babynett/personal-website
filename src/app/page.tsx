"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Nightmode from "@/components/ui/backgrounds/nightmode";
import { useState, useEffect } from "react";
import BubbleBackground from "@/components/ui/backgrounds/BubbleBackground";

export default function Home() {
  const [scrolled, setScrolled] = useState(false); //false siya kasi initial value niya

  // if true ? this : that
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <BubbleBackground />
      </div>

      {/* Navigation/ Top bar */}
      <div
        className={`flex justify-center lg:pr-15 md:pr-15 sm:justify-end sticky top-0 ${
          scrolled ? "bg-black/10" : ""
        }`}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink>Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>Projects</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Toggle Button */}
      <Nightmode />
    </>
  );
}
