export default function Investment() {
  const included = [
    "Custom one-page therapy website (professional, not template)",
    "Conversion-focused copywriting by mental health specialists",
    "Local SEO optimization for \"therapist near me\" searches",
    "Professional logo design with brand color palette",
    "HIPAA-compliant contact forms and appointment system",
    "Professional email setup (yourname@yourpractice.com)",
    "Domain registration (1 year included)",
    "Fast, secure hosting (6 months included)",
    "Privacy compliance setup",
    "10-day priority launch support",
    "3 LIMITED-TIME BONUSES ($273 value)"
  ];

  return (
    <section id="investment" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Main Pricing Box */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-12 mb-12 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              INVESTMENT: $299
            </h2>
            <p className="text-2xl font-semibold opacity-90">
              (ONE-TIME)
            </p>
            <p className="text-xl mt-2 opacity-90">
              Everything Included - No Monthly Fees - Complete Ownership
            </p>
          </div>

          {/* What's Included */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              WHAT $299 GETS YOU:
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {included.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green-300 mr-3 text-xl">✓</span>
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee Badge */}
          <div className="text-center mt-8">
            <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-bold text-lg">
              PLUS: TRIPLE SATISFACTION GUARANTEE
            </div>
            <p className="mt-2 text-white/90">
              Unlimited revisions + 2 extra pages free if unsatisfied + extended support
            </p>
          </div>
        </div>

        {/* ROI Calculation */}
        <div className="bg-white rounded-2xl p-10 shadow-xl border-2 border-blue-200 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            HONEST ROI CALCULATION:
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                <p className="text-sm text-gray-600 mb-1">Your Investment:</p>
                <p className="text-3xl font-bold text-gray-900">$299</p>
                <p className="text-sm text-gray-600 mt-1">(equivalent to 2 therapy sessions at $150)</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <p className="text-sm text-gray-600 mb-1">Typical Result:</p>
                <p className="text-3xl font-bold text-gray-900">4-6 new clients</p>
                <p className="text-sm text-gray-600 mt-1">within first 60 days</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <p className="text-sm text-gray-600 mb-1">Revenue Generated:</p>
                <p className="text-3xl font-bold text-gray-900">$600-900</p>
                <p className="text-sm text-gray-600 mt-1">from just initial consultations</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                <p className="text-sm text-gray-600 mb-1">ROI:</p>
                <p className="text-3xl font-bold text-green-600">200-300%</p>
                <p className="text-sm text-gray-600 mt-1">within 2 months</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mt-6 border border-blue-200">
            <p className="text-gray-900 font-semibold text-center text-lg">
              <strong>Reality Check:</strong> If your website helps you book even 2 clients, it's paid for itself.
              Most new therapists see 4-6 consultation requests in first 60 days.
            </p>
          </div>
        </div>

        {/* Limited Availability */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-10 border-2 border-red-400 mb-12">
          <div className="text-center mb-6">
            <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-4">
              ⚠️ LIMITED AVAILABILITY - ACT NOW
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ONLY 5 STARTER PACKAGE CLIENTS<br />ACCEPTED MONTHLY
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              We limit capacity to ensure quality and personalized attention for each new therapist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Current Status:</p>
              <p className="text-2xl font-bold text-red-600">3 spots filled for January 2026</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Next Availability:</p>
              <p className="text-2xl font-bold text-gray-900">February 2026</p>
              <p className="text-sm text-red-600 mt-1">(but you'll lose January bonuses worth $273)</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
            <h4 className="font-bold text-xl text-gray-900 mb-4">TIMING MATTERS:</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="text-orange-500 mr-2 font-bold">•</span>
                <span>January-February is <strong>peak therapy demand season</strong></span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-orange-500 mr-2 font-bold">•</span>
                <span>Potential clients are <strong>actively searching for therapists NOW</strong></span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-orange-500 mr-2 font-bold">•</span>
                <span>Every week without professional website = <strong>2-3 clients lost to competitors</strong></span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-orange-500 mr-2 font-bold">•</span>
                <span>Your competitors are launching professional sites <strong>while you wait</strong></span>
              </li>
            </ul>
          </div>

          <p className="text-center text-lg font-semibold text-gray-900 mt-6">
            Don't start your practice invisible to 87% of potential clients who research online first.
          </p>
        </div>

        {/* Payment Options */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            PAYMENT OPTIONS:
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">Pay in Full</p>
              <p className="text-4xl font-bold text-blue-600">$299</p>
              <p className="text-sm text-gray-600 mt-1">one-time</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">Split Payment</p>
              <p className="text-2xl font-bold text-green-600">$150 + $149</p>
              <p className="text-sm text-gray-600 mt-1">to start, then at launch</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-black text-white px-12 py-6 rounded-xl text-2xl font-bold hover:bg-gray-800 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform"
          >
            CLAIM YOUR JANUARY SPOT - ONLY 2 REMAINING
          </a>
          <p className="text-gray-600 mt-4 text-sm">
            No credit card required to reserve your spot
          </p>
        </div>
      </div>
    </section>
  );
}
