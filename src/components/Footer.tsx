const Footer = () => {
  return (
    <section className="w-full min-h-80 py-10 flex items-center bg-footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3">
              <img
                src="/icons/logo.png"
                alt="Boogie Wheels"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-sm text-white/70">
              Style on your feet. Rhythm in your veins.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="YouTube"
                className="p-2 rounded-md bg-brandPurple transition"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M23.5 6.2a4 4 0 0 0-2.8-2.8C18.9 3 12 3 12 3s-6.9 0-8.7.4A4 4 0 0 0 .5 6.2 41.7 41.7 0 0 0 0 12a41.7 41.7 0 0 0 .5 5.8 4 4 0 0 0 2.8 2.8C5.1 21 12 21 12 21s6.9 0 8.7-.4a4 4 0 0 0 2.8-2.8A41.7 41.7 0 0 0 24 12a41.7 41.7 0 0 0-.5-5.8ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter/X"
                className="p-2 rounded-md bg-brandPurple transition"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M20.4 3H23l-7.9 9.1L23.7 21H17l-5.4-6.7L5.3 21H1l8.6-9.9L.6 3h6.8l4.7 5.9L20.4 3Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-md bg-brandPurple transition"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-2.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">
              Navigate
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-brand text-white/70">
                  Explore
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand text-white/70">
                  Trending
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand text-white/70">
                  Channels
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand text-white/70">
                  Upload
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col items-center">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms" className="hover:text-brand text-white/70">
                  Terms
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-brand text-white/70">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-brand text-white/70">
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Stay in the loop
            </h3>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md bg-white/5 px-3 py-2 text-sm placeholder-white/40 ring-1 ring-white/10 focus:ring-2 focus:ring-white/30 outline-none"
              />
              <button
                type="submit"
                className="rounded-md bg-white/90 px-3 py-2 text-sm font-medium text-[#1f1d2b] hover:bg-white"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-white/60">
              By subscribing you agree to our
              <a href="#" className="underline hover:text-brand">
                Terms
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/60">
            © 2025 Boogie Wheels. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <a href="/about" className="hover:text-brand">
              About
            </a>
            <a href="#" className="hover:text-brand">
              Contact
            </a>
            <a href="#" className="hover:text-brand">
              Help
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
