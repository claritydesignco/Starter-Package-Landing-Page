export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Trust Elements */}
        <div className="grid md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-gray-700">
          <div className="text-center">
            <div className="text-4xl mb-3">👥</div>
            <p className="font-semibold text-lg mb-1">Trusted by 127+ therapists nationwide</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🔒</div>
            <p className="font-semibold text-lg mb-1">HIPAA-compliant website solutions</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⭐</div>
            <p className="font-semibold text-lg mb-1">Therapy industry specialists since 2019</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="font-bold text-lg mb-4">Clarity Design Co.</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional website solutions exclusively for mental health professionals.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Starter Package</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium Websites</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maintenance Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & Legal */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Clarity Design Co. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="bg-white rounded px-3 py-1 text-xs font-semibold text-gray-900">VISA</div>
                <div className="bg-white rounded px-3 py-1 text-xs font-semibold text-gray-900">MC</div>
                <div className="bg-white rounded px-3 py-1 text-xs font-semibold text-gray-900">AMEX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
