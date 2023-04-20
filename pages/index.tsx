import type { NextPage } from "next";

import { HomeScreen } from "#/components/home";
import { Navbar } from "#/components/shared";

const HomePage: NextPage = () => {
  return (
    <section className="relative flex h-full w-full flex-col">
      <Navbar />
      <HomeScreen />
    </section>
  );
};

export default HomePage;
