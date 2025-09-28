"use client";

import Button from "../Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { fetchProducts } from "@/utils/supabase/actions";
import { formatCurrency } from "@/utils/formatters";

gsap.registerPlugin(ScrollTrigger);

type Product = {
  id: string;
  name: string;
  brand: string;
  base_price_cents: number | null;
};

const Products = () => {
  const scope = useRef(null);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetchProducts();
      if (response.success) {
        setProducts(response.data);
      } else {
        console.error(response.message);
      }
    };

    loadProducts();
  }, []);

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       ".card-one",
  //       { y: 0, opacity: 0.89 },
  //       {
  //         y: 150,
  //         opacity: 0.25,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: ".products",
  //           start: "top top",
  //           end: "bottom top",
  //           scrub: 1.2,
  //         },
  //       }
  //     );

  //     gsap.fromTo(
  //       ".card-two",
  //       { y: 0, opacity: 0.89 },
  //       {
  //         y: 220,
  //         opacity: 0.25,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: ".products",
  //           start: "top top",
  //           end: "bottom top",
  //           scrub: 1.2,
  //         },
  //       }
  //     );

  //     gsap.fromTo(
  //       ".card-three",
  //       { y: 0, opacity: 0.89 },
  //       {
  //         y: 270,
  //         opacity: 0.25,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: ".products",
  //           start: "top top",
  //           end: "bottom top",
  //           scrub: 1.2,
  //         },
  //       }
  //     );

  //     gsap.fromTo(
  //       ".card-four",
  //       { y: 0, opacity: 0.89 },
  //       {
  //         y: 340,
  //         opacity: 0.25,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: ".products",
  //           start: "top top",
  //           end: "bottom top",
  //           scrub: 1.2,
  //         },
  //       }
  //     );
  //   },
  //   { scope }
  // );

  return (
    <section
      ref={scope}
      className="min-h-screen w-full relative bg-products py-20 px-4 md:px-20 flex flex-col justify-center items-center gap-20"
    >
      {/* <div className="flex flex-col items-center">
        <h1 className="text-center products-title font-bowlby text-6xl leading-tight">
          BOOGIE
          <br />
          PRODUCTS
        </h1>
        <p>Lace up, roll out. It’s boogie time.</p>
      </div> */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.length > 0 &&
          products.map((product) => (
            <div
              id={product.id}
              className="card-one group relative mx-auto w-[90%] md:max-w-72 box-shadow px-8 py-4 bg-white/5 backdrop-blur overflow-hidden"
            >
              <h2 className="text-xl">
                {formatCurrency(product.base_price_cents)}
              </h2>

              <div className="relative h-96 py-8 flex items-center flex-col justify-center">
                <img
                  src="/images/roller.png"
                  alt={product.name}
                  className="group-hover:scale-105 duration-150"
                />
                <Button className="opacity-0 translate-y-2 pointer-events-none transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                  Buy!
                </Button>
              </div>

              <h2 className="text-xl uppercase font-bold font-bowlby text-center duration-150 group-hover:bottom-20">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <h2 className="opacity-0 duration-100 group-hover:opacity-100 text-center">
                  Size
                </h2>
                <ul className="opacity-0 duration-150 group-hover:opacity-100 text-center flex items-center justify-center gap-2">
                  <li className="w-8 h-8 rounded bg-white/40 backdrop-blur text-black place-content-center">
                    7
                  </li>
                  <li className="w-8 h-8 rounded bg-white/40 backdrop-blur text-black place-content-center">
                    8
                  </li>
                  <li className="w-8 h-8 rounded bg-white/40 backdrop-blur text-black place-content-center">
                    9
                  </li>
                  <li className="w-8 h-8 rounded bg-white/40 backdrop-blur text-black place-content-center">
                    10
                  </li>
                </ul>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Products;
