import { useEffect, useState } from "react";

export default function useMediaQuery(query, serverFallback = false) {
  const [matches, setMatches] = useState(serverFallback);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);

    setMatches(mql.matches);

    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addEventListener(onChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeEventListener(onChange);
    };
  }, [query]);

  return matches;
}
