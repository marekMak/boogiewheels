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
          <h2 className="neon-title text-8xl font-poppins">
            Lace Up. Roll Out. <span className="block">Disco Awaits.</span>
          </h2>
          <p className="text-yellow text-2xl">
            From Montreal with groove — skating the neon nights since day one.
          </p>
        </div>
        <p className="w-full max-w-[70%]  text-white text-center">
          Founded in Montreal by best friends Marie Corneteux & Emilié
          Aucouturiér.
          <span className="block">
            Boogie Wheels celebrates friendship, freedom, and the disco spirit.
          </span>
          Bright colors, neon nights, and endless rhythm
          <span className="block">our skates are made to dance.</span>
        </p>
      </div>
    </BasicLayout>
  );
};

export default page;
