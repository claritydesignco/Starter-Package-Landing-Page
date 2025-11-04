export default function SocialProof() {
  const testimonials = [
    {
      name: "Dr. Sarah Martinez, LCSW",
      location: "Portland, OR",
      quote: "I was drowning in DIY website attempts for 4 months. Clarity Co had me professionally online in 3 weeks. I booked my first 3 clients within the first month - the website literally paid for itself in 30 days.",
      initial: "SM"
    },
    {
      name: "James Thompson, LPC",
      location: "Austin, TX",
      quote: "As a brand new therapist, I couldn't afford $3,000 for a website but knew Gmail wasn't cutting it. The Starter Package gave me everything I needed to look established and professional. My consultation requests tripled after launch.",
      initial: "JT"
    },
    {
      name: "Dr. Rachel Kim, Psy.D.",
      location: "Seattle, WA",
      quote: "The therapy-specific copywriting made all the difference. They understood how to speak to anxious clients in a way that builds trust immediately. My website feels like an extension of my therapeutic approach, not just a generic business site.",
      initial: "RK"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6">
            TRUSTED BY NEW THERAPISTS WHO<br />NEEDED PROFESSIONAL PRESENCE FAST
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all"
            >
              {/* Avatar */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white text-center">
          <p className="font-bold mb-2">
            Join 127+ therapists who launched successfully with Clarity Design Co.
          </p>
          <div className="flex justify-center gap-1 mt-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#investment"
            className="button inline-block bg-black text-white px-10 py-5 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl"
          >
            Join 127+ Therapists Who Launched Successfully
          </a>
        </div>
      </div>
    </section>
  );
}
