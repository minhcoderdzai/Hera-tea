
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, ShoppingBag } from "lucide-react";

const CheckoutSuccessPage = () => {
  // Generate a random order number
  const orderNumber = "HERA" + Math.floor(100000 + Math.random() * 900000);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg border border-border p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-tea bg-opacity-20 p-4">
              <CheckCircle className="h-16 w-16 text-tea" />
            </div>
          </div>
          
          <h1 className="text-3xl font-serif font-medium text-tea-dark mb-4">
            Đặt hàng thành công!
          </h1>
          
          <p className="text-gray-600 mb-6">
            Cảm ơn bạn đã mua sắm tại Hera Tea. Đơn hàng của bạn đang được xử lý.
          </p>
          
          <div className="bg-tea-light p-4 rounded-md inline-block mb-6">
            <p className="text-tea-dark mb-1">Mã đơn hàng của bạn:</p>
            <p className="text-2xl font-medium text-tea-dark">{orderNumber}</p>
          </div>
          
          <p className="text-gray-600 mb-8">
            Chúng tôi đã gửi email xác nhận đơn hàng và thông tin chi tiết đến địa chỉ email của bạn.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/">
              <Button variant="outline" className="w-full md:w-auto">
                <Home className="h-4 w-4 mr-2" />
                Về trang chủ
              </Button>
            </Link>
            <Link to="/account/orders">
              <Button className="bg-tea hover:bg-tea-dark text-white w-full md:w-auto">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Xem đơn hàng của tôi
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutSuccessPage;
