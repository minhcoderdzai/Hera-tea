
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
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from "recharts";

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

// Mock data for charts
const salesData = [
  { name: 'T1', value: 320000 },
  { name: 'T2', value: 450000 },
  { name: 'T3', value: 780000 },
  { name: 'T4', value: 950000 },
  { name: 'T5', value: 1250000 },
  { name: 'T6', value: 1500000 },
];

const conversionData = [
  { name: 'T1', rate: 3.2 },
  { name: 'T2', rate: 4.5 },
  { name: 'T3', rate: 5.1 },
  { name: 'T4', rate: 4.7 },
  { name: 'T5', rate: 6.2 },
  { name: 'T6', rate: 6.7 },
];

const productsSoldData = [
  { name: 'Thanh sắc', value: 8 },
  { name: 'An nguyệt', value: 10 },
  { name: 'Thái mộc', value: 7 },
];

const COLORS = ['#3b82f6', '#10b981', '#6366f1'];

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
      
      {/* Performance Charts */}
      <div className="bg-white rounded-lg border border-border p-6">
        <h2 className="text-xl font-serif font-medium text-tea-dark mb-6">
          Biểu đồ hiệu suất
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Doanh thu theo tháng</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={salesData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis 
                    tickFormatter={(value) => 
                      new Intl.NumberFormat('vi-VN', {
                        notation: 'compact',
                        compactDisplay: 'short',
                        maximumFractionDigits: 1,
                      }).format(value)
                    }
                  />
                  <Tooltip 
                    formatter={(value) => 
                      new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(Number(value))
                    }
                  />
                  <Bar dataKey="value" fill="#7c3aed" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Tỷ lệ chuyển đổi theo tháng</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={conversionData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Line type="monotone" dataKey="rate" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Sản phẩm bán chạy</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={productsSoldData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {productsSoldData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} đơn`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Thống kê chi tiết</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Số lượt xem</span>
                <span className="font-medium">1,243</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Số lần click</span>
                <span className="font-medium">{mockAffiliateData.clicksCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Đơn hàng thành công</span>
                <span className="font-medium">{mockAffiliateData.ordersCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Doanh số</span>
                <span className="font-medium">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(mockAffiliateData.earningsTotal / 0.35)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-border">
                <span className="text-gray-600 font-medium">Tỷ lệ chuyển đổi</span>
                <span className="font-medium text-tea">{mockAffiliateData.conversionRate}%</span>
              </div>
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
