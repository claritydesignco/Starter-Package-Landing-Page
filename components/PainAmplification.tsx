export default function PainAmplification() {
  const statistics = [
    {
      icon: "⏰",
      amount: "$600+",
      title: "IN LOST CLIENT TIME",
      description: "40+ hours fumbling with DIY builders = 20 potential client sessions at $150 each that you could've been earning."
    },
    {
      icon: "👥",
      amount: "4-6",
      title: "CLIENTS LOST MONTHLY",
      description: "Without professional online presence, you're invisible to 87% of potential clients who research therapists online before booking."
    },
    {
      icon: "💸",
      amount: "$150-300",
      title: "WASTED ON TOOLS",
      description: "DIY website subscriptions, domain registration, hosting, plugins you don't understand, SSL certificates you can't configure properly."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Decorative Shape */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-red-100/40 rounded-full blur-2xl translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6">
            WE KNOW THE STRUGGLE YOU'RE FACING RIGHT NOW...
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Emotional Copy */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 border border-gray-200 shadow-lg">
            <p className="text-gray-700 mb-4">
              The <strong>3 AM anxiety:</strong> "I should have a website by now."
            </p>
            <p className="text-gray-700 mb-4">
              The <strong>comparison trap:</strong> seeing other therapists with professional sites while you're still using a Gmail address.
            </p>
            <p className="text-gray-700">
              The <strong>overwhelming confusion:</strong> Squarespace vs. WordPress vs. Wix vs. just hiring someone.
            </p>
          </div>

          {/* Right: Quick Preview */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border border-blue-200 shadow-lg">
            <h3 className="text-gray-900 mb-4 font-bold">
              YOU'RE NOT ALONE - AND IT'S COSTING YOU MORE THAN YOU THINK:
            </h3>
            <p className="text-gray-700">
              Every week you delay means losing potential clients, wasting money on tools that don't work, and watching competitors capture the clients you should be serving.
            </p>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-red-400 hover:shadow-xl transition-all text-center"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="mb-3">
                <span className="text-gray-900 font-bold">{stat.amount}</span>
              </div>
              <h3 className="text-gray-900 font-bold mb-3">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-10 border-l-4 border-red-500">
          <p className="text-gray-900 font-bold mb-3">
            The Hidden Reality:
          </p>
          <p className="text-gray-700">
            While you're "saving money" doing it yourself, you're actually losing <strong>$2,000-3,000</strong> in opportunity costs and missed client revenue every month.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#investment"
            className="button inline-block bg-black text-white px-10 py-5 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl"
          >
            Stop the Revenue Loss - Get Professional Help
          </a>
        </div>
      </div>
    </section>
  );
}
