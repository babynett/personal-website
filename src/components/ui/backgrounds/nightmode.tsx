"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../reusable/button";

const Nightmode = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<
    { x: number; y: number; radius: number; speedX: number }[]
  >([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize stars
  const initStars = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const stars = [];

    for (let i = 0; i < 300; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        speedX: 0.1 + Math.random() * 0.2,
      });
    }

    starsRef.current = stars;
  };

  // Get star color based on theme
  const getStarColor = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    return isDarkMode ? "white" : "black";
  };

  // Animation loop
  const animateStars = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);
    const starColor = getStarColor();

    for (const star of starsRef.current) {
      star.x += star.speedX;
      if (star.x > width) star.x = 0;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
      ctx.fillStyle = starColor;
      ctx.fill();
    }

    requestAnimationFrame(animateStars);
  };

  useEffect(() => {
    initStars();
    animateStars();

    const root = document.documentElement;
    setIsDarkMode(root.classList.contains("dark"));

    window.addEventListener("resize", initStars);
    return () => window.removeEventListener("resize", initStars);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    setIsDarkMode(root.classList.contains("dark"));
  };

  return (
    <>
      <div className=" text-black dark:text-white light-bg dark:dark-bg transition-all duration-500">
        {" "}
        <Button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-800 text-white rounded dark:bg-white dark:text-black  hover:cursor-pointer"
        >
          <p>{isDarkMode ? "Light" : "Dark"} Mode</p>
        </Button>
        <canvas
          ref={canvasRef}
          id="stars"
          className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
        ></canvas>
      </div>
    </>
  );
};

export default Nightmode;
