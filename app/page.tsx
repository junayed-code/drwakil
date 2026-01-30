import { Hero } from "@components/hero";
import { About } from "@features/sections/about";
import { Expertise } from "@features/sections/expertise";
import { Interview } from "@features/sections/interview";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Expertise />
      <Interview />
    </main>
  );
}
