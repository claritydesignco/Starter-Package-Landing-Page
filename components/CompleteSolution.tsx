export default function CompleteSolution() {
  const features = [
    {
      icon: "🌐",
      title: "CUSTOM ONE-PAGE THERAPY WEBSITE",
      description: "Professional design tailored to your practice (no generic templates). Mobile-optimized for anxious clients researching on phones. Psychology-based layout that converts visitors into consultation bookings."
    },
    {
      icon: "✍️",
      title: "CONVERSION-FOCUSED COPYWRITING",
      description: "Written by mental health copywriting specialists who understand therapy client psychology. Speaks directly to your ideal client's emotional struggles. Positions you as credible expert, not just \"another therapist.\""
    },
    {
      icon: "🔍",
      title: "LOCAL SEO FOUNDATION",
      description: "Optimized for \"therapist near me\" searches in your area. Google-friendly structure and meta tags. Local keyword targeting that helps potential clients discover your practice."
    },
    {
      icon: "🎨",
      title: "PROFESSIONAL LOGO DESIGN",
      description: "Custom logo concepts (2-3 options to choose from). Brand color palette selection. Professional identity that builds immediate credibility with ideal clients."
    },
    {
      icon: "⚙️",
      title: "COMPLETE TECHNICAL SETUP",
      items: [
        "HIPAA-compliant contact and appointment request forms",
        "Professional email setup (yourname@yourpractice.com)",
        "Domain registration (1 year included)",
        "Fast, secure hosting (6 months included - then $15/month)",
        "Privacy compliance (cookie notice, privacy policy)"
      ]
    },
    {
      icon: "🚀",
      title: "10-DAY PRIORITY LAUNCH SUPPORT",
      description: "Direct access to our team during launch. Same-day response to questions. Technical assistance and training. Content guidance included."
    }
  ];

  const timeline = [
    {
      week: "Week 1",
      title: "Discovery & Strategy",
      description: "30-min consultation + content questionnaire"
    },
    {
      week: "Week 2",
      title: "Design & Development",
      description: "We handle everything"
    },
    {
      week: "Week 3",
      title: "Refinement & Launch",
      description: "Your feedback + training"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything New Therapists Need to<br />Start Attracting Clients Immediately
          </h2>
          <p className="text-xl text-gray-600">
            Professional, Conversion-Optimized, HIPAA-Compliant - Launched in 2-3 Weeks
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                ✓ {feature.title}
              </h3>
              {feature.description && (
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              )}
              {feature.items && (
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 border border-blue-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            TIMELINE: Your Website Launches in 2-3 Weeks
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {timeline.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-black text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{phase.week}</h4>
                <p className="text-lg font-semibold text-gray-700 mb-2">{phase.title}</p>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#investment"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started - Launch in 2-3 Weeks
          </a>
        </div>
      </div>
    </section>
  );
}
