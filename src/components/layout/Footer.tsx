
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tea-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/88a2f840-ed7f-4063-a15f-2ab18ea13c76.png" 
                alt="Hera Tea" 
                className="h-12 w-auto brightness-150"
              />
              <span className="ml-2 text-2xl font-serif font-medium text-white">
                Hera Tea
              </span>
            </Link>
            <p className="mt-4 text-gray-300">
              Trà thảo mộc cao cấp, được chọn lọc kỹ lưỡng từ các loại thảo dược tự nhiên.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-tea-gold">
              Danh mục
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-tea-gold">
              Hỗ trợ khách hàng
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white">
                  Chính sách vận chuyển
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white">
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">
                  Điều khoản dịch vụ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-tea-gold">
              Liên hệ
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+84 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@heratea.vn</span>
              </li>
              <li className="mt-4">
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Hera Tea. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
