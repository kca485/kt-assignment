import { About } from "./About";
import { Contact } from "./Contact";
import { CurveBottom } from "./CurveBottom";
import { Hero } from "./Hero";
import { Pricing } from "./Pricing";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Pricing />
      <Contact />
      <CurveBottom />
    </>
  );
}
