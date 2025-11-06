"use client";

import { useState } from "react";

export default function FAQ() {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 const faqs = [
  {
   question: "How long does it really take to launch my website?",
   answer: "2-3 weeks from the day you complete our simple content questionnaire. Week 1 is discovery and strategy (minimal time from you). Week 2 we design and develop everything. Week 3 is your feedback and refinement. Most therapists spend less than 3 hours total on their part."
  },
  {
   question: "What if I'm not satisfied with the website?",
   answer: "Three-layer protection: (1) Unlimited revisions until you're happy, (2) If still not satisfied, we add 2 extra pages absolutely free ($600 value), (3) 10-day priority support after launch. We work until you're thrilled. You cannot lose."
  },
  {
   question: "Do I need any technical skills or knowledge?",
   answer: "Zero technical skills required. We handle everything: domain setup, hosting configuration, email setup, HIPAA compliance, and technical launch. You provide content about your practice (we guide you), we handle all technical aspects."
  },
  {
   question: "What happens after 6 months when hosting isn't free anymore?",
   answer: "Hosting continues at just $15/month (standard rate). Your domain renews annually at $15-25. Total ongoing cost: ~$30/month to keep your website online. No surprises, no hidden fees. You can also upgrade to our monthly maintenance plans for complete hands-off management."
  },
  {
   question: "Can I add more pages later if my practice grows?",
   answer: "Absolutely. Additional pages are $300 each (About, Services, Resources, Blog, etc.). Most new therapists start with one page and add more as their practice grows. Your website can scale with your needs."
  },
  {
   question: "How is this different from using a template or website builder?",
   answer: "Templates are generic. We create custom designs tailored to YOUR practice, YOUR ideal clients, and YOUR therapeutic approach. Our copywriting speaks to YOUR clients' specific struggles. Plus, you get therapy industry expertise: HIPAA compliance, client psychology, conversion optimization that templates completely miss."
  },
  {
   question: "What if I don't know what content to write or what to say?",
   answer: "We guide you through a simple questionnaire that extracts the content we need. Our copywriters then transform your answers into professional, conversion-focused copy. You don't need to be a writer - we handle the messaging strategy and professional copywriting."
  },
  {
   question: "Is one page really enough for a new therapy practice?",
   answer: "Yes. One well-designed page with your bio, services, approach, and contact information is perfect for starting. It's enough to establish credibility, attract clients, and start booking consultations. You can always add pages as your practice grows. Starting simple is better than not starting at all."
  },
  {
   question: "Do you offer refunds if I'm not happy?",
   answer: "We don't offer cash refunds because we deliver custom work specific to your practice. However, our triple guarantee protects you completely: unlimited revisions, 2 extra pages free if needed, and extended support. We've never had a therapist walk away unsatisfied because we work until you're thrilled."
  }
 ];

 return (
  <section className="py-20 px-6 bg-white">
   <div className="max-w-4xl mx-auto">
    {/* FAQ Header */}
    <div className="text-center mb-12">
     <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Questions New Therapists Ask<br />Before Investing
     </h2>
    </div>

    {/* FAQ Accordion */}
    <div className="space-y-4 mb-16">
     {faqs.map((faq, index) => (
      <div
       key={index}
       className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 transition-colors"
      >
       <button
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
       >
        <span className="font-bold text-gray-900 pr-4">
         Q: {faq.question}
        </span>
        <span className="text-2xl text-blue-600 flex-shrink-0">
         {openIndex === index ? "−" : "+"}
        </span>
       </button>
       {openIndex === index && (
        <div className="px-6 pb-6">
         <p className="text-gray-700 leading-relaxed">
          <strong>A:</strong> {faq.answer}
         </p>
        </div>
       )}
      </div>
     ))}
    </div>

    {/* Final Emotional Appeal */}
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border-2 border-blue-200 mb-12">
     <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
      YOUR IDEAL CLIENTS ARE<br />SEARCHING FOR YOU RIGHT NOW
     </h3>
     <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
      <p>
       They're typing <strong>"therapist near me,"</strong> <strong>"anxiety counseling,"</strong> and
       <strong> "couples therapy"</strong> into Google. They're experiencing mental health struggles and need professional help.
      </p>
      <p className="text-center font-semibold text-red-600">
       Without a professional website, you're invisible to them.
      </p>
      <p>
       Every day you delay = <strong>2-3 potential clients choosing competitors</strong> who simply show up online professionally.
      </p>
     </div>

     {/* The Choice */}
     <div className="bg-white rounded-xl p-8 mb-8">
      <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Choice:</h4>
      <div className="grid md:grid-cols-2 gap-6">
       <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <p className="font-bold text-red-700 mb-3">Option A:</p>
        <p className="text-gray-700">
         Spend 3 more months "figuring out" DIY = <strong>24-36 clients lost</strong> to competitors =
         <strong className="text-red-600"> $3,600-5,400 missed revenue</strong>
        </p>
       </div>
       <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
        <p className="font-bold text-green-700 mb-3">Option B:</p>
        <p className="text-gray-700">
         Invest <strong>$299 now</strong>, launch professionally in <strong>2-3 weeks</strong>,
         start capturing clients immediately
        </p>
       </div>
      </div>
     </div>

     <p className="text-center font-semibold text-gray-900 mb-6">
      Only <span className="text-red-600">2 spots remaining</span> for January 2026.<br />
      Bonuses worth $273 expire January 31st.
     </p>

     {/* Primary CTA */}
     <div className="text-center">
      <a
       href="#contact"
       className="inline-block bg-black text-white px-12 py-6 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-2xl hover:shadow-3xl mb-6"
      >
       CLAIM YOUR SPOT NOW - LAUNCH IN 2-3 WEEKS
      </a>
     </div>
    </div>

    {/* Contact Section */}
    <div id="contact" className="bg-white rounded-2xl p-10 border-2 border-gray-200 shadow-lg">
     <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
      QUESTIONS? WE'RE HERE TO HELP
     </h3>
     <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="text-center">
       <p className="text-gray-600 mb-2">Email:</p>
       <a
        href="mailto:hello@claritydesignco.com"
        className="text-xl font-semibold text-blue-600 hover:text-blue-800"
       >
        hello@claritydesignco.com
       </a>
      </div>
      <div className="text-center">
       <p className="text-gray-600 mb-2">Phone:</p>
       <a
        href="tel:5551234567"
        className="text-xl font-semibold text-blue-600 hover:text-blue-800"
       >
        (555) 123-4567
       </a>
      </div>
     </div>
     <p className="text-center text-gray-700 mb-6">
      Schedule a free 15-minute consultation to discuss your practice needs - no pressure, just clarity about whether this package is right for you.
     </p>
     <div className="text-center">
      <a
       href="#contact"
       className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
      >
       Schedule Free Consultation Call
      </a>
     </div>
    </div>
   </div>
  </section>
 );
}
