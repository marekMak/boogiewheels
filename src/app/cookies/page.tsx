import BasicLayout from "@/components/layouts/BasicLayout";
import Logo from "@/components/Logo";
import Link from "next/link";

const page = () => {
  return (
    <BasicLayout>
      <div className="flex flex-col justify-center items-center gap-10">
        <Link href="/">
          <Logo />
        </Link>
        <div className="space-y-4 text-center">
          <h2 className="text-8xl font-poppins neon-pinko-title">
            Stay Groovy.
            <span className="block neon-title">Accept Cookies.</span>
          </h2>
        </div>
        <p className="w-full max-w-[70%]  text-white text-center">
          We use cookies to keep the groove smooth and the vibes rolling.
          <span className="block">
            From saving your preferences to giving you the best disco skate
            experience,
          </span>
          these cookies are all about keeping the rhythm alive.
        </p>
      </div>
    </BasicLayout>
  );
};

export default page;
