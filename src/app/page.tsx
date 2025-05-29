"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/reusable/navigation-menu";
import Nightmode from "@/components/ui/backgrounds/NightMode";
import { useState, useEffect } from "react";
import BubbleBackground from "@/components/ui/backgrounds/BubbleBackground";
import Projects from "./pages/Projects";
import { Button } from "@/components/ui/reusable/button";

// import { cn } from "@/lib/utils";

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
            <NavigationMenuItem>
              <NavigationMenuLink>
                {" "}
                {/* Toggle Button */}
                <Nightmode />
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Center of the Homepage */}
      <div className="flex flex-col justify-center items-center w-full min-h-screen">
        {/* <h1 className="text-5xl font-bold mb-6">Welcome to my Cabin!</h1> */}

        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="text-center text-4xl font-bold md:text-7xl bg-gradient-to-r from-purple-600 via-pink-800 to-indigo-800 bg-clip-text text-transparent dark:from-indigo-200 dark:via-pink-200 dark:to-purple-500">
            Welcome to Faye's Cabin!
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-center text-lg font-normal text-gray-800 dark:text-white">
            Come and Explore my world!
          </p>
        </div>

        <Button className="px-4 py-2 bg-gray-800 text-white rounded dark:bg-white dark:text-black hover:cursor-pointer">
          Explore
        </Button>
      </div>

      {/* Projects section */}
      <div className="p-5">
        <Projects />
      </div>
    </>
  );
}
