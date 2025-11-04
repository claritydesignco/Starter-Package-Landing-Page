export default function ComparisonDestruction() {
  const comparisons = [
    {
      title: "DIY WEBSITE BUILDERS",
      subtitle: "(Squarespace, Wix, WordPress)",
      cost: "$150-300 for tools",
      time: "40+ hours learning",
      items: [
        "Connecting domains, SSL configuration",
        "HIPAA compliance guesswork",
        "Amateur-looking result",
        "Zero therapy expertise",
        "No professional copywriting"
      ],
      trueCost: "$750+ (tools + lost revenue)"
    },
    {
      title: "FIVERR/UPWORK",
      subtitle: "$500-800+",
      cost: "$500-800+",
      time: "4-8 weeks",
      items: [
        "Generic templates",
        "No therapy industry knowledge",
        "Language/timezone barriers",
        "Revision limitations",
        "No HIPAA understanding"
      ],
      trueCost: "Pretty design, zero conversions"
    },
    {
      title: "LOCAL WEB AGENCY",
      subtitle: "$2,000-4,000+",
      cost: "$2,000-4,000+",
      time: "6-12 weeks",
      items: [
        "High cost for new practices",
        "Generic business approach",
        "No therapy specialization",
        "Monthly retainers required",
        "Longer timeline"
      ],
      trueCost: "Professional but expensive"
    },
    {
      title: "CLARITY STARTER",
      subtitle: "$299 ONE-TIME",
      cost: "$299 one-time",
      time: "2-3 weeks",
      items: [
        "✅ Therapy industry specialists",
        "✅ HIPAA-compliant built-in",
        "✅ Psychology-based copywriting",
        "✅ No monthly fees",
        "✅ Complete ownership"
      ],
      trueCost: "Professional + Affordable",
      highlight: true
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6">
            WHY EVERY "CHEAPER" ALTERNATIVE<br />ACTUALLY COSTS YOU MORE
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {comparisons.map((option, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border-2 transition-all ${
                option.highlight
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-blue-800 text-white shadow-2xl scale-105 relative'
                  : 'bg-white border-gray-200 hover:shadow-lg'
              }`}
            >
              {option.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full font-bold">
                  BEST VALUE
                </div>
              )}

              <h3 className={`font-bold mb-2 ${option.highlight ? 'text-white' : 'text-gray-900'}`}>
                {option.title}
              </h3>
              <p className={`mb-4 ${option.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                {option.subtitle}
              </p>

              <div className="mb-4">
                <p className={`font-bold ${option.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {option.cost}
                </p>
                <p className={`${option.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                  {option.time}
                </p>
              </div>

              <ul className="space-y-2 mb-6">
                {option.items.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start ${
                      option.highlight ? 'text-white' : 'text-gray-700'
                    }`}
                  >
                    <span className="mr-2">{item.startsWith('✅') ? '' : '•'}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={`pt-4 border-t ${option.highlight ? 'border-blue-400' : 'border-gray-200'}`}>
                <p className={`font-semibold ${option.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {option.trueCost}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#investment"
            className="button inline-block bg-black text-white px-10 py-5 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl"
          >
            Skip the Struggle - Choose Professional Results
          </a>
        </div>
      </div>
    </section>
  );
}
