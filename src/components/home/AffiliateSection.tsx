
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Percent, CreditCard, BarChart3 } from "lucide-react";

const AffiliateSection = () => {
  return (
    <section className="py-16 bg-tea-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Trở thành <span className="text-tea-gold">Cộng tác viên</span> với Hera Tea
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Kiếm thêm thu nhập bằng cách giới thiệu sản phẩm chất lượng cao của chúng tôi và nhận hoa hồng 35% cho mỗi đơn hàng.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Benefit 1 */}
          <div className="bg-tea-dark bg-opacity-40 border border-tea border-opacity-20 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-tea bg-opacity-20 p-3 rounded-full">
                <Percent className="h-6 w-6 text-tea-gold" />
              </div>
              <h3 className="text-xl font-serif font-medium text-tea-gold ml-3">
                Hoa hồng hấp dẫn
              </h3>
            </div>
            <p className="text-gray-300">
              Nhận ngay 35% hoa hồng cho mỗi đơn hàng thành công từ mã CTV của bạn. Không giới hạn số lượng đơn hàng.
            </p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-tea-dark bg-opacity-40 border border-tea border-opacity-20 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-tea bg-opacity-20 p-3 rounded-full">
                <BarChart3 className="h-6 w-6 text-tea-gold" />
              </div>
              <h3 className="text-xl font-serif font-medium text-tea-gold ml-3">
                Dashboard quản lý
              </h3>
            </div>
            <p className="text-gray-300">
              Theo dõi hiệu suất, doanh số và hoa hồng của bạn một cách dễ dàng thông qua dashboard CTV trực quan.
            </p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-tea-dark bg-opacity-40 border border-tea border-opacity-20 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-tea bg-opacity-20 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-tea-gold" />
              </div>
              <h3 className="text-xl font-serif font-medium text-tea-gold ml-3">
                Thanh toán linh hoạt
              </h3>
            </div>
            <p className="text-gray-300">
              Rút tiền hoa hồng dễ dàng vào tài khoản ngân hàng của bạn. Thanh toán nhanh chóng và an toàn.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center bg-tea bg-opacity-10 p-8 rounded-2xl">
          <h3 className="text-2xl font-serif font-medium mb-4">
            Bắt đầu ngay hôm nay!
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Đăng ký tài khoản Hera Tea và gửi yêu cầu trở thành Cộng tác viên. Chúng tôi sẽ xem xét và phê duyệt trong vòng 24 giờ.
          </p>
          <Link to="/auth/register?affiliate=true">
            <Button className="bg-tea-gold hover:bg-opacity-80 text-tea-dark px-8 py-6 text-lg">
              Đăng ký làm Cộng tác viên
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;
