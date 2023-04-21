import type { NextPage } from "next";
import { useCallback, useEffect } from "react";

import { HomeScreen } from "#/components/home";
import { DevNotes, Navbar } from "#/components/shared";

const HomePage: NextPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullHeight();
      window.addEventListener("resize", () => setFullHeight());
    }
  });

  const setFullHeight = useCallback(
    () =>
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      ),
    []
  );

  return (
    <section className="relative flex h-full w-full flex-col">
      <Navbar />
      <DevNotes />
      <HomeScreen />
    </section>
  );
};

export default HomePage;
