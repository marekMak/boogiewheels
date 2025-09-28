"use client";
import Button from "../Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Marie = () => {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".founder-name",
        { y: 0 },
        {
          y: 150,

          ease: "none",
          scrollTrigger: {
            trigger: ".founders",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        ".founder-text",
        { y: 0 },
        {
          y: 170,

          ease: "none",
          scrollTrigger: {
            trigger: ".founders",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        ".founder-button",
        { y: 0 },
        {
          y: 210,

          ease: "none",
          scrollTrigger: {
            trigger: "founders",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        ".founder-background",
        { y: 0 },
        {
          y: 170,
          ease: "none",
          scrollTrigger: {
            trigger: ".founders",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        ".founder-picture",
        { y: 0 },
        {
          y: 150,
          ease: "none",
          scrollTrigger: {
            trigger: ".founders",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      className="founders min-h-screen w-full relative bg-founders py-20 px-4 md:px-20 flex flex-col justify-center items-center gap-20"
    >
      <div className="grid grid-cols-1 min-h-screen items-center gap-12 md:grid-cols-2 md:gap-24">
        <div className="flex flex-col items-center gap-8 text-center md:items-start md:text-left">
          <h2 className="founder-name font-bowlby text-4xl uppercase text-white">
            Marie Corneteux
          </h2>
          <p className="founder-text text-white text-xl">
            Built for big tricks and hard landings, our boards are designed to
            handle every flip, grind, and bail. Perfect balance, every time.
          </p>
          <Button className="founder-button" color="purple">
            Marie
          </Button>
        </div>
        <div className="relative min-h-[80vh] bg-center bg-cover">
          <div
            className="absolute founder-background inset-0 z-0 bg-center bg-contain bg-no-repeat mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage: 'url("/images/blue-paint-background.png")',
            }}
          />

          <img
            src="/images/marie.png"
            alt="Marie Corneteux founder"
            className="absolute founder-picture z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Marie;
