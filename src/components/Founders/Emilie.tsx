"use client";
import Button from "../Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Emilie = () => {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".founder-emilie-name",
        { y: 0 },
        {
          y: 150,

          ease: "none",
          scrollTrigger: {
            trigger: ".founders-emilie",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        ".founder-emilie-text",
        { y: 0 },
        {
          y: 170,

          ease: "none",
          scrollTrigger: {
            trigger: ".founders-emilie",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        ".founder-emilie-button",
        { y: 0 },
        {
          y: 210,

          ease: "none",
          scrollTrigger: {
            trigger: ".founders-emilie",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        ".founder-emilie-background",
        { y: 0 },
        {
          y: 170,
          ease: "none",
          scrollTrigger: {
            trigger: ".founders-emilie",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        ".founder-emilie-picture",
        { y: 0 },
        {
          y: 150,
          ease: "none",
          scrollTrigger: {
            trigger: ".founders-emilie",
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
      className="founders-emilie min-h-screen w-full relative bg-founders-green py-20 px-4 md:px-20 flex flex-col justify-center items-center gap-20"
    >
      <div className="grid grid-cols-1 min-h-screen items-center gap-12 md:grid-cols-2 md:gap-24">
        <div className="order-2 md:order-1 relative min-h-[80vh] bg-center bg-cover">
          <div
            className="absolute founder-emilie-background inset-0 z-0 bg-center bg-contain bg-no-repeat mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage: 'url("/images/greeno-paint-background.png")',
            }}
          />

          <img
            src="/images/emilie.png"
            alt="Marie Corneteux founder"
            className="absolute founder-emilie-picture z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[86%]"
          />
        </div>
        <div className="order-1 md:order-2 flex flex-col items-center gap-8 text-center md:items-start md:text-left">
          <h2 className="founder-emilie-name font-bowlby text-4xl uppercase text-white">
            Emilié Aucouturiér
          </h2>
          <p className="founder-emilie-text text-white text-xl">
            Built for big tricks and hard landings, our boards are designed to
            handle every flip, grind, and bail. Perfect balance, every time.
          </p>
          <Button className="founder-emilie-button" color="purple">
            Emilié
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Emilie;
