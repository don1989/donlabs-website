const audiences = [
  "Solo operators",
  "Founders",
  "Agencies",
  "Property investors",
  "Consultancies",
  "E-commerce teams",
  "Professional services",
  "Family offices",
  "Small ops teams",
  "Anyone drowning in spreadsheets",
];

export default function LogoMarquee() {
  const row = [...audiences, ...audiences];
  return (
    <section className="relative py-16 md:py-20">
      <div className="container-page mb-8 flex flex-col items-center text-center">
        <span className="eyebrow">Built for businesses that don&apos;t have an AI team</span>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent"
          aria-hidden
        />
        <div className="flex w-max animate-marquee gap-12 px-6">
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-10 items-center whitespace-nowrap text-lg font-medium text-white/40"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
