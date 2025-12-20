import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-semibold tracking-tight text-gray-800 mb-4">
              MyWebsite
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              สร้างสรรค์ประสบการณ์ดิจิทัลที่เรียบง่ายและใช้งานได้จริง เพื่ออนาคตที่ดีกว่า
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter / Contact (Optional) */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Stay Connected</h4>
            <p className="text-sm text-gray-500 mb-4">ติดตามข่าวสารใหม่ๆ จากเรา</p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-emerald-50 cursor-pointer transition-colors text-gray-400 hover:text-emerald-600">
                <span className="text-xs">FB</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-emerald-50 cursor-pointer transition-colors text-gray-400 hover:text-emerald-600">
                <span className="text-xs">TW</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-emerald-50 cursor-pointer transition-colors text-gray-400 hover:text-emerald-600">
                <span className="text-xs">IG</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {currentYear} MyWebsite. All rights reserved.
          </p>
          <div className="flex gap-6">
             <span className="text-xs text-gray-400 cursor-pointer hover:text-gray-600">Cookies Setting</span>
             <span className="text-xs text-gray-400 cursor-pointer hover:text-gray-600">English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;