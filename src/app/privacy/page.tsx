import BasicLayout from "@/components/layouts/BasicLayout";
import Logo from "@/components/Logo";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  return (
    <BasicLayout>
      <div className="flex flex-col justify-center items-center gap-10">
        <Link href="/">
          <Logo />
        </Link>
        <div className="space-y-4 text-center">
          <h2 className="text-8xl font-poppins neon-pinko-title">
            Privacy policy
          </h2>
        </div>
        <div className="space-y-10 flex flex-col justify-center w-full max-w-[70%]">
          <div className=" text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              1. Introduction
            </h2>
            <p className="text-justify">
              At Boogie Wheels, your privacy is as important as the groove. This
              Privacy Policy explains how we collect, use, and protect your
              personal information when you visit our website or purchase our
              products.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              2. Information We Collect
            </h2>
            <p className="text-justify">
              We may collect the following types of data: Contact information:
              name, email address, phone number, shipping/billing address.
              Account data: if you create an account, we store login credentials
              securely. Payment details: processed securely by trusted
              third-party providers (we never store your full card information).
              Usage data: cookies, browser type, device info, and how you
              interact with our website.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              3. How We Use Your Data
            </h2>
            <p className="text-justify">
              We use collected information to: Process and deliver your orders.
              Provide customer support. Send order confirmations and updates.
              Improve our website, products, and services. Share disco vibes
              through newsletters and promotions (only if you opt-in).
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              4. Cookies & Tracking
            </h2>
            <p className="text-justify">
              We use cookies to keep your shopping experience smooth: Remember
              your cart and preferences. Provide secure login sessions. Analyze
              site traffic and improve performance. You can manage or disable
              cookies in your browser settings at any time.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              5. Sharing of Information
            </h2>
            <p className="text-justify">
              We only share data with: Service providers (shipping companies,
              payment processors) to fulfill your order. Analytics tools to help
              us understand website usage. We never sell your personal
              information to third parties.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              6. Data Security
            </h2>
            <p className="text-justify">
              We take reasonable measures to protect your data from unauthorized
              access, loss, or misuse. However, no method of transmission over
              the internet is 100% secure.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              7. Your Rights
            </h2>
            <p className="text-justify">
              Depending on your location, you may have the right to: Access,
              correct, or delete your personal data. Opt out of marketing
              emails. Restrict or object to data processing. Request data
              portability. To exercise your rights, contact us at:
              privacy@boogiewheels.ca
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              8. Children’s Privacy
            </h2>
            <p className="text-justify">
              Our website is not intended for children under 13. We do not
              knowingly collect data from minors.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">
              9. Changes to This Policy
            </h2>
            <p className="text-justify">
              We may update this Privacy Policy from time to time. Updates will
              be posted here with a new “Last updated” date.
            </p>
          </div>

          <div className="  text-white text-left">
            <h2 className="font-bold text-4xl text-yellow mb-2">10. Contact</h2>
            <p className="text-justify">
              For questions about these Terms & Conditions,
              <span className="block">
                reach us at: 📧 support@boogiewheels.ca
              </span>
              📍 Montreal, QC, Canada
            </p>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default page;
