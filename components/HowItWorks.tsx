export default function HowItWorks() {
  const weeks = [
    {
      week: "WEEK 1",
      title: "Discovery & Strategy",
      items: [
        "30-minute consultation call",
        "Ideal client profiling",
        "Simple content questionnaire",
        "Competitor analysis"
      ],
      yourTime: "1-2 hours total",
      ourWork: "Strategy development, research, planning"
    },
    {
      week: "WEEK 2",
      title: "Design & Development",
      items: [
        "Custom website design",
        "Professional copywriting",
        "Logo design concepts",
        "Complete technical setup",
        "HIPAA compliance"
      ],
      yourTime: "Review mockups when ready",
      ourWork: "Complete website creation and setup"
    },
    {
      week: "WEEK 3",
      title: "Refinement & Launch",
      items: [
        "Your feedback & revisions",
        "Final optimization",
        "HIPAA compliance check",
        "Launch day support",
        "Training included"
      ],
      yourTime: "Provide feedback, approve final version",
      ourWork: "Revisions, optimization, launch management"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-100/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6">
            FROM OVERWHELMED TO ONLINE IN 2-3 WEEKS<br />
            HERE'S EXACTLY HOW
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {weeks.map((week, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < weeks.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-200 z-0"></div>
              )}

              <div className="relative z-10 bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all">
                {/* Week Badge */}
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>

                <h3 className="text-gray-900 font-bold text-center mb-2">{week.week}</h3>
                <p className="text-gray-700 text-center font-semibold mb-6">{week.title}</p>

                <ul className="space-y-2 mb-6">
                  {week.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 mb-2">
                    <strong>Your Time:</strong> {week.yourTime}
                  </p>
                  <p className="text-gray-600">
                    <strong>Our Work:</strong> {week.ourWork}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* After Launch */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-10 border-2 border-green-300 max-w-3xl mx-auto mb-12">
          <h3 className="text-gray-900 font-bold mb-4 text-center">
            AFTER LAUNCH: 10-DAY PRIORITY SUPPORT
          </h3>
          <p className="text-gray-700 text-center">
            We don't disappear after launch. Direct access to our team for technical questions, content updates guidance, and ongoing support as you start using your new website.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#investment"
            className="button inline-block bg-black text-white px-10 py-5 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl"
          >
            Start Your 2-3 Week Launch Process
          </a>
        </div>
      </div>
    </section>
  );
}
