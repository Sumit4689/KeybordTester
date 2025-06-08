import NavBar from "./NavBar";

function Keyboard() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--background)]">
      <NavBar />

      {/* Hero Section */}
      <section className="py-6 px-4 md:px-8 lg:px-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Keyboard <span className="text-[var(--primary)]">Tester</span></h1>
        <p className="text-lg md:text-xl max-w-3xl mt-4 text-[var(--text-secondary)]">Make every keystroke count — check your keys, defeat ghosting, and boost your typing speed.</p>
      </section>

      {/* Display section */}
      <section className="lg:px-42 md:px-32 py-4">
        <div className="w-full h-24 bg-black rounded-lg shadow-lg flex items-center justify-center">
        </div>
      </section>

      {/* Keyboard Section */}
      <section className="lg:px-42 md:px-32 py-4">
        <div className="w-full h-142 bg-[var(--card-background)] rounded-lg shadow-(0 0 10px rgba(0,0,0,0.2), inset 0 0 3px rgba(0,0,0,0.3))"></div>
      </section>
    </main>
  );
}

export default Keyboard;