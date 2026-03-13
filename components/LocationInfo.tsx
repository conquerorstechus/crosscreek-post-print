const hours = [
  { day: "Monday", time: "9:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
  { day: "Thursday", time: "9:00 AM – 6:00 PM" },
  { day: "Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "10:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

function getTodayIndex() {
  return new Date().getDay(); // 0=Sun, 1=Mon ... 6=Sat
}

export default function LocationInfo() {
  const todayIndex = getTodayIndex();
  // hours array is Mon-Sun (index 0-6), map Sunday=0 → index 6, Mon=1 → 0, etc.
  const hoursIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="location" className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
        {/* Address */}
        <div id="contact">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#003d6b] mb-3">
            Address
          </h2>
          <p className="text-gray-800 font-semibold text-lg leading-snug">
            10861 Cross Creek Blvd
            <br />
            Tampa, FL 33647
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=10861+Cross+Creek+Blvd,+Tampa,+FL+33647"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm text-[#003d6b] font-semibold hover:text-[#66bb6a] transition-colors"
          >
            Get Directions →
          </a>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#003d6b] mb-3">
            Contact
          </h2>
          <p className="text-gray-800 text-lg font-semibold">
            <a href="tel:8134019820" className="hover:text-[#003d6b] transition-colors">
              (813) 401-9820
            </a>
          </p>
          <p className="text-gray-600 text-sm mt-1">
            <a
              href="mailto:info@postandprint.com"
              className="hover:text-[#003d6b] transition-colors"
            >
              info@postandprint.com
            </a>
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="mailto:info@postandprint.com"
              className="text-sm bg-[#003d6b] text-white px-4 py-2 rounded font-semibold hover:bg-[#66bb6a] hover:text-[#003d6b] transition-colors"
            >
              Send a Print File
            </a>
          </div>
        </div>

        {/* Hours */}
        <div id="hours">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#003d6b] mb-3">
            Hours
          </h2>
          <ul className="space-y-1 text-sm text-gray-700">
            {hours.map((h, i) => (
              <li
                key={h.day}
                className={`flex justify-between gap-4 ${
                  i === hoursIndex ? "font-bold text-[#003d6b]" : ""
                }`}
              >
                <span>{h.day}</span>
                <span className={h.time === "Closed" ? "text-gray-400" : ""}>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
