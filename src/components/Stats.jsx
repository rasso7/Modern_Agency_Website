import TextRevealSection from './TextReveal';

export default function StatsSection() {
  // Stats data
  const stats = [
    { number: "3", text: "Featured work" },
    { number: "15+", text: "Projected Completed" },
    { number: "2X", text: "Awwwards Featured" }
  ];

  return (
    <section className="py-4 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-around items-start gap-2">
          {stats.map((stat, index) => (
            <div key={index} className="text-center w-full md:w-auto">
              <div className="overflow-hidden relative">
                <TextRevealSection
                  content={
                    <>
                      <div className="text-8xl md:text-9xl font-bold leading-none">{stat.number}</div>
                      <div className="text-lg font-medium">{stat.text}</div>
                    </>
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}