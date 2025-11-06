"use client";

import { useState } from "react";
import { getCurrentMonth, getCurrentYear } from "@/lib/dateUtils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const currentMonth = getCurrentMonth();
  const currentYear = getCurrentYear();

  const faqs = [
    {
      question: "How long does it really take from start to launch?",
      answer: "2-3 weeks total. Week 1 is discovery and strategy (1-2 hours of your time). Week 2 we build everything (minimal time from you). Week 3 is revisions and launch (you review and approve). Most therapists are live within 21 days of starting."
    },
    {
      question: "What if I'm not satisfied with the website you create?",
      answer: "Triple protection: (1) Unlimited revisions until you're happy with every element, (2) If still not satisfied, we add 2 extra pages absolutely free ($600 value), (3) 10-day priority support after launch. We've never had a therapist walk away unsatisfied because we work until you're thrilled."
    },
    {
      question: "Do I need any technical skills or website knowledge?",
      answer: "Zero technical skills required. We handle everything: domain registration, hosting setup, email configuration, SSL certificates, HIPAA compliance setup, and all technical launch details. You provide information about your practice (we guide you with a simple questionnaire), we handle all the technical complexity."
    },
    {
      question: "What happens after 6 months when the free hosting period ends?",
      answer: "Hosting continues at just $15/month (industry-standard rate). Your domain renews annually at $15-25. Total ongoing cost is approximately $30/month to keep your professional website online. No surprises. No hidden fees. No forced upgrades."
    },
    {
      question: "Can I add more pages later as my practice grows?",
      answer: "Absolutely. Additional pages are $300 each (About, Services, Resources, Blog, etc.). Most new therapists start with one well-designed page and add more as their practice expands and they identify specific content needs. Your website grows with your practice."
    },
    {
      question: "How is this different from using a Squarespace or Wix template?",
      answer: "Templates are one-size-fits-all generic designs. We create custom designs tailored specifically to YOUR practice, YOUR ideal clients, and YOUR therapeutic approach. More importantly, our copywriting is written by mental health specialists who understand therapy client psychology - something no template can provide. Plus, you get HIPAA compliance built-in, which templates miss completely."
    },
    {
      question: "What if I don't know what to write or what content to include?",
      answer: "We guide you through a simple content questionnaire that extracts everything we need to know about your practice, approach, and ideal clients. Our mental health copywriting specialists then transform your answers into professional, conversion-focused website copy. You don't need to be a writer - we handle all the messaging strategy and professional copywriting."
    },
    {
      question: "Is one page really enough to attract clients to my new practice?",
      answer: "Yes, for launching a new practice. One well-designed page with your bio, credentials, therapeutic approach, services offered, and clear contact information is perfect for starting. It establishes credibility, attracts clients, and generates consultation bookings. Many successful therapy practices run on single-page websites for years. You can always add pages later as specific needs arise."
    },
    {
      question: "Do you offer refunds if I decide I don't want the website?",
      answer: "We don't offer cash refunds because we deliver custom work specific to your practice that can't be \"returned.\" However, our triple guarantee completely protects you: unlimited revisions, 2 extra pages free if needed, and extended support. We work until you're satisfied. This approach has resulted in zero unsatisfied clients because we're committed to your success."
    },
    {
      question: "What if I need help managing my website after launch?",
      answer: "Your package includes 10-day priority support after launch. Beyond that, you can manage basic content updates yourself (we provide training), or upgrade to our monthly maintenance plans for complete hands-off website management including ongoing updates, security, and optimization."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6">
            QUESTIONS NEW THERAPISTS ASK<br />BEFORE INVESTING IN THEIR FIRST WEBSITE
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 transition-all shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 pr-4">
                  Q: {faq.question}
                </span>
                <span className="text-blue-600 flex-shrink-0 font-bold">
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

        {/* Final Emotional Push */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border-2 border-blue-200 shadow-xl mb-12">
          <h3 className="text-gray-900 font-bold mb-6 text-center">
            YOUR IDEAL THERAPY CLIENTS ARE<br />SEARCHING FOR YOU RIGHT NOW
          </h3>
          <div className="space-y-4 text-gray-700 mb-8">
            <p>
              While you're reading this, someone in your area is typing <strong>"therapist near me,"</strong> <strong>"anxiety counseling,"</strong> or <strong>"couples therapy"</strong> into Google. They're experiencing mental health struggles. They need professional help. They're ready to book consultations.
            </p>
            <p className="text-center font-bold text-red-600">
              Without a professional website, you're completely invisible to them.
            </p>
            <p>
              They'll scroll through search results. They'll see your competitors' professional websites. They'll read therapist bios, understand approaches, and book consultations - with therapists who simply invested in being discoverable online.
            </p>
          </div>

          {/* The Choice */}
          <div className="bg-white rounded-xl p-8 mb-8">
            <h4 className="text-gray-900 font-bold mb-6 text-center">THE CHOICE IS CLEAR:</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                <p className="font-bold text-red-700 mb-3">Option A:</p>
                <p className="text-gray-700 mb-2">Spend 3 more months "figuring out" DIY</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Cost: $150-300 + 40 hours</li>
                  <li>• Result: Amateur website</li>
                  <li>• Lost: 24-36 clients</li>
                  <li className="font-bold text-red-600">= $4,000+ total loss</li>
                </ul>
              </div>
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                <p className="font-bold text-green-700 mb-3">Option B:</p>
                <p className="text-gray-700 mb-2">Invest $299 now, launch in 2-3 weeks</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Cost: $299 one-time</li>
                  <li>• Result: Professional, HIPAA-compliant</li>
                  <li>• Revenue: 4-6 new clients in 60 days</li>
                  <li className="font-bold text-green-600">= 200-300% ROI</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-700 mb-6">
            Only <span className="text-red-600 font-bold">2 spots remaining</span> for {currentMonth} {currentYear}.<br />
            Bonuses worth $273 expire end of {currentMonth}.
          </p>

          {/* Primary CTA */}
          <div className="text-center">
            <a
              href="#investment"
              className="button inline-block bg-black text-white px-12 py-6 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform mb-4"
            >
              CLAIM YOUR SPOT NOW - START LAUNCH IN 48 HOURS
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-white rounded-2xl p-10 border-2 border-gray-200 shadow-lg">
          <h3 className="text-gray-900 font-bold mb-6 text-center">
            STILL HAVE QUESTIONS? WE'RE HERE TO HELP
          </h3>
          <p className="text-center text-gray-700 mb-6">
            Schedule a free 15-minute consultation call: No pressure. No hard sell. Just honest conversation about your practice needs and whether the Starter Package is the right fit for your situation.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <p className="text-gray-600 mb-2">Email:</p>
              <a
                href="mailto:hello@claritydesignco.com"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                hello@claritydesignco.com
              </a>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-2">Phone:</p>
              <a
                href="tel:5551234567"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                (555) 123-4567
              </a>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-2">Hours:</p>
              <p className="text-gray-700 font-semibold">
                Mon-Fri, 9am-5pm EST
              </p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#contact"
              className="button inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Schedule Free 15-Min Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
