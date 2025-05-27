"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "../button";
import BubbleBackground from "./BubbleBackground";

const Nightmode = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<
    { x: number; y: number; radius: number; speedX: number }[]
  >([]);

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

    for (let star of starsRef.current) {
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
    window.addEventListener("resize", initStars);
    return () => window.removeEventListener("resize", initStars);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center text-black dark:text-white light-bg dark:dark-bg transition-all duration-500">
        <h1 className="text-4xl mb-6">Welcome to my cabin!</h1>
        <Button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-800 text-white rounded dark:bg-white dark:text-black"
        >
          Explore
        </Button>

        <canvas
          ref={canvasRef}
          id="stars"
          className="fixed inset-0 z-[-1] block"
        ></canvas>
      </div>
    </>
  );
};

export default Nightmode;
