import { Hero } from "@components/hero";
import { About } from "@features/sections/about";
import { Expertise } from "@features/sections/expertise";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Expertise />
    </main>
  );
}
