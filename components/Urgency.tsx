export default function Urgency() {
  const spots = [
    { number: 1, status: "FILLED", filled: true },
    { number: 2, status: "FILLED", filled: true },
    { number: 3, status: "FILLED", filled: true },
    { number: 4, status: "AVAILABLE", filled: false },
    { number: 5, status: "AVAILABLE", filled: false },
  ];

  return (
    <section id="urgency" className="py-20 px-6 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-bold mb-6 animate-pulse">
            ⚠️ LIMITED AVAILABILITY
          </div>
          <h2 className="text-gray-900 mb-6">
            JANUARY 2026 SPOTS FILLING FAST
          </h2>
        </div>

        {/* Capacity Explanation */}
        <div className="bg-white rounded-2xl p-10 border-2 border-red-300 shadow-xl mb-12 max-w-3xl mx-auto">
          <h3 className="text-gray-900 font-bold mb-4 text-center">
            WE ONLY ACCEPT 5 STARTER PACKAGE CLIENTS MONTHLY
          </h3>
          <p className="text-gray-700 text-center">
            <strong>Why we limit capacity:</strong> Quality and personalized attention for each new therapist. We're not a factory pumping out generic templates. Every website receives dedicated attention from our therapy specialists.
          </p>
        </div>

        {/* Availability Tracker */}
        <div className="bg-white rounded-2xl p-10 border-2 border-gray-200 shadow-xl mb-12">
          <h3 className="text-gray-900 font-bold mb-6 text-center">
            CURRENT AVAILABILITY:
          </h3>
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {spots.map((spot) => (
              <div
                key={spot.number}
                className={`w-32 h-32 rounded-2xl flex flex-col items-center justify-center font-bold border-2 transition-all ${
                  spot.filled
                    ? 'bg-gray-200 border-gray-400 text-gray-600'
                    : 'bg-green-100 border-green-500 text-green-700 animate-pulse'
                }`}
              >
                <span className="">Spot {spot.number}</span>
                <span className="">{spot.status}</span>
                <span className="">{spot.filled ? '✓' : '⏰'}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700">
            <strong>Next Availability:</strong> February 2026{' '}
            <span className="text-red-600">(but you'll miss January bonuses worth $273)</span>
          </p>
        </div>

        {/* Why Timing Matters */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
            <h3 className="text-gray-900 font-bold mb-4">
              JANUARY-FEBRUARY = PEAK THERAPY SEASON
            </h3>
            <p className="text-gray-700 mb-4">
              New Year resolutions, insurance deductible resets, seasonal depression - January and February are the highest months for therapy inquiries.
            </p>
            <p className="text-gray-700 font-semibold">
              Be discoverable when demand peaks.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border-2 border-red-200 shadow-lg">
            <h3 className="text-gray-900 font-bold mb-4">
              EVERY WEEK YOU WAIT:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>2-3 potential clients choose competitors</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>$300-450 in lost consultation revenue</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Competitors establish themselves in local search</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>You fall further behind in the race to be found online</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Math */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-10 border-2 border-orange-400 mb-12">
          <h3 className="text-gray-900 font-bold mb-4 text-center">THE MATH:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-red-600 font-bold mb-2">Wait 4 weeks to decide</p>
              <p className="text-gray-700">= 8-12 clients lost</p>
              <p className="text-gray-700">= <strong>$1,200-1,800 missed revenue</strong></p>
            </div>
            <div className="text-center">
              <p className="text-green-600 font-bold mb-2">Investment cost</p>
              <p className="text-gray-700">= <strong>$299</strong></p>
              <p className="text-gray-700 mt-2">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold">
                  Waiting costs 4-6x more than investing
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#investment"
            className="button inline-block bg-red-600 text-white px-12 py-6 rounded-xl font-bold hover:bg-red-700 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform"
          >
            CLAIM YOUR SPOT NOW - ONLY 2 REMAINING FOR JANUARY
          </a>
          <p className="text-gray-600 mt-4">
            Limited to 5 clients monthly • Bonuses expire January 31st
          </p>
        </div>
      </div>
    </section>
  );
}
