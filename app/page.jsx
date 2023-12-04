import { About, Corsets, Dresses, Hero, New, Note, Terms } from "./components";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <New /> */}
      <Corsets />
      {/* <Dresses /> */}
      <Terms />
      <Note />
    </main>
  );
}

