import GeneratorForm from "./components/GeneratorForm.jsx";

export default function App() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8 font-bricolage xl:px-0">
      <header>
        <a href="" className="block w-20 md:w-24">
          <img src="logo.svg" alt="Website logo" />
        </a>
      </header>

      <main className="pt-8 md:pt-10">
        <h1 className="text-balance pb-2 text-4xl font-bold md:text-6xl">
          Secure Password Generator
        </h1>
        <p className="max-w-sm text-xl md:max-w-2xl md:text-2xl">
          Generate robust, unique passwords to fortify your online presence.
          Stay one step ahead of cyber threats.
        </p>

        <GeneratorForm />
      </main>
    </section>
  );
}
