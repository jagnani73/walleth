import type { NextPage } from "next";

import { HomeScreen } from "#/components/home";
import { DevNotes, Navbar } from "#/components/shared";

const HomePage: NextPage = () => {
  return (
    <section className="relative flex h-full w-full flex-col">
      <Navbar />
      <DevNotes />
      <HomeScreen />
    </section>
  );
};

export default HomePage;
