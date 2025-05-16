
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gift, Users, TrendingUp } from "lucide-react";

const ReferralSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-tea bg-opacity-10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-tea-dark mb-4">
              Chương trình giới thiệu & tích điểm
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chia sẻ trà thảo mộc Hera Tea với bạn bè và nhận những phần quà hấp dẫn. Mỗi lần giới thiệu thành công, bạn nhận 250 điểm thưởng!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <div className="bg-tea-light p-3 rounded-full">
                  <Gift className="h-6 w-6 text-tea" />
                </div>
                <h3 className="text-xl font-serif font-medium text-tea-dark ml-3">
                  Chia sẻ mã giới thiệu
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Đăng ký tài khoản và nhận mã giới thiệu độc quyền của riêng bạn.
              </p>
              <p className="text-tea-dark font-medium">
                Chia sẻ mã này với bạn bè và người thân để họ nhận ưu đãi khi mua sắm.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <div className="bg-tea-light p-3 rounded-full">
                  <Users className="h-6 w-6 text-tea" />
                </div>
                <h3 className="text-xl font-serif font-medium text-tea-dark ml-3">
                  Bạn bè mua hàng
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Khi bạn bè sử dụng mã giới thiệu của bạn để mua hàng với giá trị từ 250.000₫.
              </p>
              <p className="text-tea-dark font-medium">
                Họ cũng nhận được mã giới thiệu riêng và tham gia vào chương trình.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <div className="bg-tea-light p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-tea" />
                </div>
                <h3 className="text-xl font-serif font-medium text-tea-dark ml-3">
                  Nhận thưởng
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Bạn nhận 250 điểm thưởng cho mỗi đơn hàng thành công từ người bạn giới thiệu.
              </p>
              <p className="text-tea-dark font-medium">
                300 điểm = 1 hộp trà miễn phí. Điểm thưởng không có thời hạn sử dụng!
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/auth/register">
              <Button className="bg-tea hover:bg-tea-dark text-white px-8 py-6 text-lg">
                Đăng ký ngay để nhận mã giới thiệu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
