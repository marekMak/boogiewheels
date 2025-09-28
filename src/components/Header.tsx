import React from "react";
import Button from "./Button";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full mt-4 px-4 md:px-20 min-h-10 z-40 py-2 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>
      <Button icon="cart" color="purple">
        <span className="md:hidden" aria-hidden>
          0
        </span>
        <span className="hidden md:inline" aria-hidden>
          Cart (0)
        </span>
      </Button>
    </div>
  );
};

export default Header;
