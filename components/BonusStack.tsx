"use client";

import { getCurrentMonth, getCurrentYear, getNextMonth, getEndOfMonth, getMonthDay } from "@/lib/dateUtils";
import CountdownTimer from "@/components/CountdownTimer";

export default function BonusStack() {
  const currentMonth = getCurrentMonth();
  const currentYear = getCurrentYear();
  const nextMonth = getNextMonth();
  const endOfMonth = getEndOfMonth();
  const lastDay = getMonthDay(endOfMonth);
  const bonuses = [
    {
      number: 1,
      title: "FROM INVISIBLE TO BOOKED: THE COMPLETE GMB SYSTEM FOR THERAPISTS",
      value: "$147",
      items: [
        "Step-by-step Google Business Profile setup and optimization",
        "Review generation strategies for therapy practices",
        "Local search domination tactics for your area",
        "Photo and post templates for mental health professionals",
        "Ranking strategies to appear in the local 3-pack"
      ],
      why: "76% of therapy clients use Google to find local therapists. This system ensures you're found."
    },
    {
      number: 2,
      title: "PSYCHOLOGY TODAY PROFILE AUDIT CHECKLIST",
      value: "$79",
      items: [
        "Complete self-audit framework for your PT profile",
        "Conversion optimization tips based on 200+ therapy profiles",
        "Keyword strategies that attract your ideal clients",
        "Photo selection and bio writing best practices",
        "Common mistakes that repel qualified clients"
      ],
      why: "Psychology Today is the #1 therapist directory. Optimize it right and double your referrals."
    },
    {
      number: 3,
      title: "NEW THERAPIST MARKETING CHECKLIST",
      value: "$47",
      items: [
        "Complete 90-day marketing roadmap for new practices",
        "Client acquisition strategies beyond just your website",
        "Networking templates and email scripts",
        "Practice launch essentials checklist",
        "Monthly action plans for consistent growth"
      ],
      why: "Website alone isn't enough. This roadmap ensures you're attracting clients from multiple channels."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-bold mb-6">
            LIMITED-TIME OFFER
          </div>
          <h2 className="text-gray-900 mb-4">
            BONUSES FOR {currentMonth.toUpperCase()} {currentYear}<br />CLIENTS ONLY
          </h2>
          <p className="font-bold text-gray-700">
            Total Bonus Value: $273
          </p>
        </div>

        {/* Bonuses */}
        <div className="space-y-8 mb-12">
          {bonuses.map((bonus) => (
            <div
              key={bonus.number}
              className="bg-white rounded-2xl p-8 border-2 border-yellow-300 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon & Value */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-3">
                    <span className="">🎁</span>
                  </div>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold inline-block">
                    ${bonus.value} value
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-gray-900 font-bold mb-4">
                    BONUS #{bonus.number}: {bonus.title}
                  </h3>

                  <ul className="space-y-2 mb-4">
                    {bonus.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-yellow-600 mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-gray-700">
                      <strong>Why This Matters:</strong> {bonus.why}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expiration Warning with Countdown */}
        <div className="bg-red-100 border-2 border-red-400 rounded-2xl p-8 text-center mb-8">
          <p className="text-red-700 font-bold mb-4">
            ⚠️ THESE BONUSES EXPIRE {currentMonth.toUpperCase()} {lastDay}, {currentYear}
          </p>
          <p className="text-gray-700 mb-6">
            {nextMonth} {currentYear} clients receive different bonuses. Claim these therapy-specific systems now.
          </p>
          <CountdownTimer />
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#investment"
            className="button inline-block bg-black text-white px-10 py-5 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl"
          >
            Claim {currentMonth} Bonuses - Start Now
          </a>
        </div>
      </div>
    </section>
  );
}
