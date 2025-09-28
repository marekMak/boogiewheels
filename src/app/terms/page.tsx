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
            Terms
            <span className="block neon-title">&</span>
            Conditions
          </h2>
        </div>
        <div className="space-y-10 flex flex-col justify-center w-full max-w-[70%]">
          <div className=" text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              1. Introduction
            </h2>
            <p className="text-justify">
              Welcome to Boogie Wheels. By accessing our website, browsing our
              catalog, or purchasing our roller skates, you agree to the
              following terms and conditions. Please read them carefully before
              rolling with us.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              2. Company Information
            </h2>
            <p className="text-justify">
              Boogie Wheels is a Montreal-based company founded by Marie
              Corneteux & Emilié Aucouturiér. We specialize in roller skates
              designed for disco skating, inspired by vibrant colors, neon
              nights, and endless rhythm.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              3. Eligibility
            </h2>
            <p className="text-justify">
              You must be at least 18 years old, or have parental/guardian
              permission, to purchase products from our online store.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">4. Products</h2>
            <p className="text-justify">
              We aim to provide accurate descriptions, sizing information, and
              photos of our skates. Colors may vary slightly due to screen
              settings. Availability is subject to change; items in your cart
              are not reserved until checkout is completed.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              5. Pricing & Payment
            </h2>
            <p className="text-justify">
              All prices are displayed in CAD (Canadian Dollars) unless
              otherwise stated. We accept major credit cards and secure online
              payments through trusted providers. Prices may change without
              prior notice.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              6. Shipping & Delivery
            </h2>
            <p className="text-justify">
              Orders are processed within 2–5 business days. Delivery times
              depend on your location and selected shipping method. We are not
              responsible for delays caused by carriers or customs.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              7. Returns & Exchanges
            </h2>
            <p className="text-justify">
              You may return or exchange unworn products within 30 days of
              delivery. Items must be in original condition with packaging
              intact. Return shipping costs are the customer’s responsibility
              unless the product is defective. Refunds are issued once returned
              items are inspected.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              8. Warranties
            </h2>
            <p className="text-justify">
              Our skates come with a 6-month warranty against manufacturing
              defects. This does not cover normal wear and tear, misuse, or
              modifications.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              9. Liability
            </h2>
            <p className="text-justify">
              Boogie Wheels is not liable for injuries, accidents, or damages
              resulting from the use of our skates. Please skate responsibly,
              wear protective gear, and boogie safely.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              10. Privacy & Cookies
            </h2>
            <p className="text-justify">
              We use cookies and collect limited personal data to improve your
              shopping experience. See our Privacy Policy for details.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              11. Governing Law
            </h2>
            <p className="text-justify">
              These terms are governed by the laws of Quebec, Canada. Any
              disputes will be handled in Montreal courts.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">12. Contact</h2>
            <p className="text-justify">
              For questions about these Terms & Conditions,{" "}
              <span className="block">
                {" "}
                reach us at: 📧 support@boogiewheels.ca
              </span>{" "}
              📍 Montreal, QC, Canada
            </p>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default page;
