import { FaCartShopping } from "react-icons/fa6";
import clsx from "clsx";
import { forwardRef } from "react";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> & {
  color?: "orange" | "purple" | "lime";
  size?: "sm" | "md" | "lg";
  icon?: "cart" | "skateboard" | "plus";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = "orange",
      size = "md",
      icon,
      className,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          "button-cutout group mx-4 py-2 inline-flex items-center bg-gradient-to-b from-25% to-75% bg-[length:100%_400%] font-bold transition-[filter,background-position] duration-300 hover:bg-bottom",
          size === "sm" && "gap-2.5 py-2 text-base",
          size === "md" && "gap-3 px-1 text-lg ~py-2.5/3",
          size === "lg" && "~text-lg/2xl ~gap-3/4 ~px-1/2 ~py-3/4",
          color === "orange" &&
            "from-brandOrange to-brandLime text-black hover:text-black",
          color === "purple" &&
            "from-brandPurple to-brandLime text-white hover:text-black",
          color === "lime" && "from-brandLime to-brandOrange text-black",
          className
        )}
        {...props}
      >
        {icon ? (
          <>
            <div
              className={clsx(
                "flex size-6 items-center justify-center transition-transform group-hover:-rotate-[25deg] [&>svg]:h-full [&>svg]:w-full",
                size === "sm" && "size-5",
                size === "md" && "size-6",
                size === "lg" && "~size-6/8"
              )}
            >
              {icon === "cart" && <FaCartShopping />}
            </div>
            <div className="w-px self-stretch bg-black/25" />
          </>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
