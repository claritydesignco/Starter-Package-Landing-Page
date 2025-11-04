export default function TripleGuarantee() {
 const guarantees = [
  {
   number: "1",
   title: "UNLIMITED REVISIONS",
   description: "We'll revise your website until you're 100% satisfied with every element - design, copy, functionality. No revision limits. No rush to approve."
  },
  {
   number: "2",
   title: "2 EXTRA PAGES FREE ($600 VALUE)",
   description: "If you're not completely thrilled with your one-page website, we'll add About and Services pages absolutely free. You choose which pages you want."
  },
  {
   number: "3",
   title: "10-DAY PRIORITY SUPPORT",
   description: "Extended priority support after launch (not just during) to ensure you're confident managing your new professional website."
  }
 ];

 const bonuses = [
  {
   title: "\"FROM INVISIBLE TO BOOKED: THE COMPLETE GMB SYSTEM\"",
   value: "$147",
   items: [
    "Step-by-step Google Business Profile optimization guide",
    "Review generation strategies",
    "Local search domination tactics",
    "Photo and post templates"
   ]
  },
  {
   title: "\"PSYCHOLOGY TODAY PROFILE AUDIT CHECKLIST\"",
   value: "$79",
   items: [
    "Self-audit framework for your PT profile",
    "Conversion optimization tips",
    "Keyword strategies that attract ideal clients",
    "Photo and bio best practices"
   ]
  },
  {
   title: "\"NEW THERAPIST MARKETING CHECKLIST\"",
   value: "$47",
   items: [
    "First 90 days marketing roadmap",
    "Client acquisition strategies",
    "Networking templates",
    "Practice launch essentials"
   ]
  }
 ];

 return (
  <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
   <div className="max-w-6xl mx-auto">
    {/* Guarantees Section */}
    <div className="mb-20">
     <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
      YOU CANNOT LOSE:<br />TRIPLE SATISFACTION GUARANTEE
     </h2>

     <div className="grid md:grid-cols-3 gap-8 mt-12">
      {guarantees.map((guarantee) => (
       <div
        key={guarantee.number}
        className="bg-white rounded-xl p-8 border-2 border-green-500 hover:shadow-xl transition-shadow"
       >
        <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 font-bold">
         {guarantee.number}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
         GUARANTEE #{guarantee.number}:<br />{guarantee.title}
        </h3>
        <p className="text-gray-600 text-center leading-relaxed">
         {guarantee.description}
        </p>
       </div>
      ))}
     </div>

     <p className="text-center font-semibold text-gray-900 mt-10">
      The Bottom Line: We work until you're thrilled with your therapy website. <span className="text-green-600">Zero risk.</span>
     </p>
    </div>

    {/* Bonuses Section */}
    <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-10 border-2 border-yellow-400">
     <div className="text-center mb-10">
      <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold mb-4">
       LIMITED-TIME OFFER
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
       PLUS: LIMITED-TIME BONUSES<br />FOR JANUARY 2026 CLIENTS
      </h2>
      <p className="text-2xl font-bold text-blue-600">
       (Total Bonus Value: $273)
      </p>
     </div>

     <div className="space-y-6 mb-10">
      {bonuses.map((bonus, index) => (
       <div
        key={index}
        className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
       >
        <div className="flex items-start gap-4">
         <div className="text-4xl">🎁</div>
         <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-3">
           <h3 className="text-lg font-bold text-gray-900">
            BONUS #{index + 1}: {bonus.title}
           </h3>
           <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">
            {bonus.value} value
           </span>
          </div>
          <ul className="space-y-2">
           {bonus.items.map((item, idx) => (
            <li key={idx} className="text-gray-600 flex items-start">
             <span className="text-blue-500 mr-2">✓</span>
             <span>{item}</span>
            </li>
           ))}
          </ul>
         </div>
        </div>
       </div>
      ))}
     </div>

     <p className="text-center text-red-600 font-bold mb-6">
      ⏰ These bonuses expire January 31, 2026. February clients receive different bonuses.
     </p>

     <div className="text-center">
      <a
       href="#investment"
       className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
      >
       Claim January Bonuses - Start Your Website
      </a>
     </div>
    </div>
   </div>
  </section>
 );
}
