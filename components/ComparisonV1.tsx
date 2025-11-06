export default function Comparison() {
 const comparisonData = [
  {
   feature: "Cost",
   diy: "$150-300 + tools",
   fiverr: "$500-800+",
   clarity: "$299 all-in"
  },
  {
   feature: "Timeline",
   diy: "40+ hours",
   fiverr: "4-6 weeks",
   clarity: "2-3 weeks"
  },
  {
   feature: "Therapy Expertise",
   diy: "none",
   fiverr: "generic",
   clarity: "specialist"
  },
  {
   feature: "HIPAA Compliance",
   diy: "none",
   fiverr: "none",
   clarity: "included"
  },
  {
   feature: "Client Psychology",
   diy: "none",
   fiverr: "generic",
   clarity: "specialist"
  },
  {
   feature: "Professional Result",
   diy: "none",
   fiverr: "warning",
   clarity: "included"
  },
  {
   feature: "Support",
   diy: "none",
   fiverr: "warning",
   clarity: "included"
  },
  {
   feature: "Conversion Focus",
   diy: "none",
   fiverr: "none",
   clarity: "included"
  }
 ];

 const getIcon = (value: string) => {
  if (value === "none") return <span className="text-red-500">✗</span>;
  if (value === "warning") return <span className="text-yellow-500">⚠️</span>;
  if (value === "included" || value === "specialist") return <span className="text-green-500">✓</span>;
  return <span className="text-gray-700">{value}</span>;
 };

 return (
  <section className="py-20 px-6 bg-white">
   <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12">
     <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Stop Wasting Time and Money on<br />Options That Don't Work for Therapists
     </h2>
    </div>

    {/* Comparison Table */}
    <div className="overflow-x-auto mb-16">
     <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
      <thead>
       <tr className="bg-gray-900 text-white">
        <th className="py-4 px-6 text-left font-bold">Feature</th>
        <th className="py-4 px-6 text-center font-bold">DIY Builders</th>
        <th className="py-4 px-6 text-center font-bold">Fiverr/Upwork</th>
        <th className="py-4 px-6 text-center font-bold bg-blue-600">Clarity Starter</th>
       </tr>
      </thead>
      <tbody>
       {comparisonData.map((row, index) => (
        <tr
         key={index}
         className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
        >
         <td className="py-4 px-6 font-semibold text-gray-900 border-b border-gray-200">
          {row.feature}
         </td>
         <td className="py-4 px-6 text-center border-b border-gray-200">
          {getIcon(row.diy)}
         </td>
         <td className="py-4 px-6 text-center border-b border-gray-200">
          {getIcon(row.fiverr)}
         </td>
         <td className="py-4 px-6 text-center border-b border-gray-200 bg-blue-50">
          {getIcon(row.clarity)}
         </td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>

    {/* Detailed Comparisons */}
    <div className="space-y-10">
     {/* DIY Reality */}
     <div className="bg-red-50 rounded-xl p-8 border-l-4 border-red-500">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
       THE REALITY OF DIY WEBSITE BUILDERS:
      </h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
       You'll spend <strong>$150-300</strong> on Squarespace/Wix subscription, domain, and plugins.
       Then invest <strong>40+ hours</strong> learning technical setup: connecting domains, configuring
       SSL certificates, setting up HIPAA-compliant forms, writing conversion copy, understanding SEO basics.
      </p>
      <div className="bg-red-100 border border-red-300 rounded-lg p-4 mt-4">
       <p className="text-gray-900 font-semibold">
        <strong>Hidden Cost:</strong> 40 hours = seeing 20 clients at $150/session =
        <span className="text-red-600"> $3,000 in lost revenue</span> while you fumble with website builders.
       </p>
      </div>
     </div>

     {/* Fiverr Problem */}
     <div className="bg-yellow-50 rounded-xl p-8 border-l-4 border-yellow-500">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
       THE PROBLEM WITH FIVERR/UPWORK:
      </h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
       Generic designers who treat therapy like any business. They don't understand:
      </p>
      <ul className="space-y-2 mb-4">
       <li className="flex items-start text-gray-700">
        <span className="text-yellow-600 mr-2">•</span>
        <span>How anxious clients make therapy decisions</span>
       </li>
       <li className="flex items-start text-gray-700">
        <span className="text-yellow-600 mr-2">•</span>
        <span>HIPAA compliance requirements for mental health</span>
       </li>
       <li className="flex items-start text-gray-700">
        <span className="text-yellow-600 mr-2">•</span>
        <span>What builds trust with vulnerable clients seeking help</span>
       </li>
       <li className="flex items-start text-gray-700">
        <span className="text-yellow-600 mr-2">•</span>
        <span>How to position therapists for $200+ session rates</span>
       </li>
      </ul>
      <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
       <p className="text-gray-900 font-semibold">
        <strong>Result:</strong> Pretty website that doesn't convert visitors into consultations.
       </p>
      </div>
     </div>

     {/* Why Clarity Works */}
     <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
       WHY CLARITY STARTER WORKS:
      </h3>
      <p className="text-gray-700 leading-relaxed">
       We specialize <strong>exclusively in mental health professionals</strong>. Every element is
       designed for therapy client psychology, HIPAA compliance, and conversion optimization.
       You get professional results without the learning curve or amateur mistakes.
      </p>
     </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-12">
     <a
      href="#investment"
      className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
     >
      Skip the Struggle - Get Professional Results
     </a>
    </div>
   </div>
  </section>
 );
}
