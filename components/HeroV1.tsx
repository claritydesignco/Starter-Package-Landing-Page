export default function Hero() {
 return (
  <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-hidden">
   {/* Background Pattern */}
   <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

   <div className="max-w-5xl mx-auto relative z-10">
    {/* Main Headline */}
    <div className="text-center mb-8">
     <h1 className="text-gray-900 mb-6 leading-tight">
      STOP LOSING $1,600+ MONTHLY<br />
      WHILE YOU "FIGURE OUT"<br />
      YOUR WEBSITE
     </h1>

     <p className="text-gray-700 font-medium mb-4">
      Professional One-Page Therapy Website - Everything Included - Launch in 2-3 Weeks
     </p>

     <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
      You spent years mastering therapy, not web design. Yet here you are, 3 months later, still "working on" your website while competitors capture 4-6 monthly clients who can't find you online.
     </p>
    </div>

    {/* Hidden Cost Section */}
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 max-w-3xl mx-auto border border-gray-100">
     <h2 className="text-gray-900 mb-6">The Hidden Cost of DIY:</h2>
     <ul className="space-y-4">
      <li className="flex items-start">
       <span className="text-red-500 font-bold mr-3">✗</span>
       <span className="text-gray-700"><strong>$150-300</strong> wasted on website tools you don't understand</span>
      </li>
      <li className="flex items-start">
       <span className="text-red-500 font-bold mr-3">✗</span>
       <span className="text-gray-700"><strong>40+ hours</strong> learning instead of seeing clients (<strong>$600+ opportunity cost</strong>)</span>
      </li>
      <li className="flex items-start">
       <span className="text-red-500 font-bold mr-3">✗</span>
       <span className="text-gray-700"><strong>4-6 clients monthly</strong> choosing competitors with professional sites</span>
      </li>
      <li className="flex items-start">
       <span className="text-red-500 font-bold mr-3">✗</span>
       <span className="text-gray-700"><strong>Amateur result</strong> that hurts credibility with $150+ session clients</span>
      </li>
     </ul>

     <p className="text-gray-700 mt-8 leading-relaxed">
      What if launching your professional therapy website was as simple as your intake process: <strong>guided, systematic, and completely handled for you?</strong>
     </p>
    </div>

    {/* Social Proof */}
    <div className="text-center mb-8">
     <p className="text-sm text-gray-600 mb-2">
      Trusted by 127+ New Therapists Who Needed to Get Online Fast
     </p>
     <div className="flex justify-center items-center gap-2">
      <div className="flex -space-x-2">
       {[1, 2, 3, 4, 5].map((i) => (
        <div
         key={i}
         className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white font-semibold"
        >
         {i === 1 ? 'T' : i === 2 ? 'M' : i === 3 ? 'S' : i === 4 ? 'J' : 'K'}
        </div>
       ))}
      </div>
      <span className="text-yellow-500">★★★★★</span>
     </div>
    </div>

    {/* CTA Button */}
    <div className="text-center">
     <a
      href="#investment"
      className="button inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
     >
      Launch My Professional Website - Only 5 Spots Monthly
     </a>
     <p className="text-gray-500 mt-4">
      ⚠️ Only 2 spots remaining for January 2026
     </p>
    </div>
   </div>
  </section>
 );
}
