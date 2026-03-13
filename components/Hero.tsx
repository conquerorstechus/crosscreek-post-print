export default function Hero() {
  return (
    <section className="bg-[#003d6b] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-[#66bb6a] mb-3">
            Locally Owned &amp; Operated
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Dependable Printing and Shipping Solutions
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            Bring us your big idea and let us do the rest. Design. Print. Inspire.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/quote"
              className="bg-[#66bb6a] text-[#003d6b] font-semibold px-6 py-3 rounded hover:bg-[#20b2aa] hover:text-white transition-colors"
            >
              Get a Print Quote
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=10861+Cross+Creek+Blvd,+Tampa,+FL+33647"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#66bb6a] text-white font-semibold px-6 py-3 rounded hover:bg-[#66bb6a] hover:text-[#003d6b] transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
