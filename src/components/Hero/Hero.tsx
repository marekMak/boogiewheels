"use client";
import Header from "../Header";
import RollerScene from "./RollerScene";

const Hero = () => {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-disco">
      <Header />

      <section className="relative md:absolute left-0 md:left-20 bottom-10 md:bottom-60 flex flex-col justify-center items-center z-10 mx-auto max-w-7xl pt-10">
        {/* <h1 className="neon-title text-9xl md:text-[10rem]">
          BOOGIE
          <br />
          WHEELS
        </h1> */}

        <div className="mt-10 z-50 relative ">
          <img src="/images/badge.png" className="w-auto h-40" />
        </div>
      </section>

      <div className="relative w-full h-[80vh]  flex justify-center items-center">
        <RollerScene />
      </div>
    </main>
  );
};

export default Hero;
