export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 px-6 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Headline */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 mb-6 font-bold max-w-4xl mx-auto">
            STOP LOSING $1,600+ MONTHLY WHILE YOU "FIGURE OUT" YOUR WEBSITE
          </h1>

          <p className="font-accent text-gray-700 mb-8 max-w-3xl mx-auto">
            Professional One-Page Therapy Website for New Practitioners
          </p>

          <p className="text-gray-600 max-w-3xl mx-auto mb-4">
            You spent years mastering therapy, not web design. Yet here you are, 3 months later, still "working on" your website while competitors with professional online presence capture 4-6 monthly clients who can't find you.
          </p>

          <p className="text-gray-700 max-w-3xl mx-auto font-medium">
            What if launching your therapy website was as systematic as your treatment approach: <strong>guided, professional, and completely handled for you?</strong>
          </p>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-10">
          <p className="text-gray-600 mb-3">
            Trusted by 127+ New Therapists Who Launched Fast
          </p>
          <div className="flex justify-center items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 border-white flex items-center justify-center text-white font-semibold"
                >
                  {['T', 'M', 'S', 'J', 'K'][i - 1]}
                </div>
              ))}
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#investment"
            className="button inline-block bg-black text-white px-10 py-5 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
          >
            Launch My Professional Website
          </a>
        </div>
      </div>
    </section>
  );
}
