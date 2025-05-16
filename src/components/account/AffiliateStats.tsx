
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Copy, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  CreditCard 
} from "lucide-react";
import { toast } from "@/components/ui/sonner";

// Mock data for affiliate statistics
const mockAffiliateData = {
  referralCode: "HERAAF123",
  earningsTotal: 5250000,
  earningsPending: 1750000,
  earningsAvailable: 3500000,
  ordersCount: 15,
  clicksCount: 243,
  conversionRate: 6.17,
};

const AffiliateStats = () => {
  const copyAffiliateCode = () => {
    navigator.clipboard.writeText(mockAffiliateData.referralCode);
    toast.success("Đã sao chép mã CTV!");
  };

  const requestPayout = () => {
    toast.success("Yêu cầu rút tiền đã được gửi!");
  };

  return (
    <div className="space-y-8">
      {/* Affiliate Overview */}
      <div className="bg-white rounded-lg border border-border p-6">
        <h2 className="text-xl font-serif font-medium text-tea-dark mb-6">
          Tổng quan CTV
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-tea-light rounded-lg p-4">
            <div className="flex items-center mb-2">
              <TrendingUp className="h-5 w-5 text-tea mr-2" />
              <span className="text-gray-600">Tổng hoa hồng</span>
            </div>
            <div className="text-2xl font-medium">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(mockAffiliateData.earningsTotal)}
            </div>
          </div>
          
          <div className="bg-tea-light rounded-lg p-4">
            <div className="flex items-center mb-2">
              <ShoppingCart className="h-5 w-5 text-tea mr-2" />
              <span className="text-gray-600">Đơn hàng</span>
            </div>
            <div className="text-2xl font-medium">
              {mockAffiliateData.ordersCount}
            </div>
          </div>
          
          <div className="bg-tea-light rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Users className="h-5 w-5 text-tea mr-2" />
              <span className="text-gray-600">Tỉ lệ chuyển đổi</span>
            </div>
            <div className="text-2xl font-medium">
              {mockAffiliateData.conversionRate}%
            </div>
          </div>
        </div>
      </div>
      
      {/* Affiliate Code */}
      <div className="bg-white rounded-lg border border-border p-6">
        <h2 className="text-xl font-serif font-medium text-tea-dark mb-4">
          Mã CTV của bạn
        </h2>
        
        <div className="flex items-center">
          <div className="flex-1 bg-tea-light rounded-l-md p-3 font-medium">
            {mockAffiliateData.referralCode}
          </div>
          <Button
            variant="default"
            className="rounded-l-none bg-tea hover:bg-tea-dark"
            onClick={copyAffiliateCode}
          >
            <Copy className="h-4 w-4 mr-2" />
            Sao chép
          </Button>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <p>
            Khi khách hàng sử dụng mã này để mua hàng, bạn nhận được <strong>35% hoa hồng</strong> từ giá trị đơn hàng.
          </p>
          <p className="mt-2">
            Chia sẻ mã này trên các kênh của bạn để tăng doanh số và thu nhập!
          </p>
        </div>
      </div>
      
      {/* Earnings & Payouts */}
      <div className="bg-white rounded-lg border border-border p-6">
        <h2 className="text-xl font-serif font-medium text-tea-dark mb-4">
          Hoa hồng & Thanh toán
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <CreditCard className="h-5 w-5 mr-2 text-tea" />
              Số dư khả dụng
            </h3>
            
            <div className="text-3xl font-medium mb-4 text-tea-dark">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(mockAffiliateData.earningsAvailable)}
            </div>
            
            <Button 
              className="bg-tea hover:bg-tea-dark text-white w-full md:w-auto"
              onClick={requestPayout}
              disabled={mockAffiliateData.earningsAvailable === 0}
            >
              Yêu cầu rút tiền
            </Button>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">
              Chi tiết hoa hồng
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Đang xử lý</span>
                <span className="font-medium">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(mockAffiliateData.earningsPending)}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Khả dụng</span>
                <span className="font-medium">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(mockAffiliateData.earningsAvailable)}
                </span>
              </div>
              
              <div className="flex justify-between pt-2 border-t border-border">
                <span className="text-gray-600">Tổng cộng</span>
                <span className="font-medium">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(mockAffiliateData.earningsTotal)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateStats;
