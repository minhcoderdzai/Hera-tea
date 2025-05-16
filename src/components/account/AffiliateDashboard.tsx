import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShoppingBag, 
  DollarSign, 
  TrendingUp, 
  Users, 
  User,
  Share2
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/components/ui/sonner";

const AffiliateDashboard = () => {
  const { user } = useAuth();
  
  if (!user || user.role !== "affiliate") return null;
  
  // Mock data for affiliate stats
  const affiliateStats = {
    totalOrders: 27,
    totalCommission: 3056000,
    pendingCommission: 1235000,
    customersReferred: 15,
  };
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-medium text-tea-dark">
            Xin chào, {user.name}
          </h1>
          <p className="text-gray-600">
            Quản lý tài khoản cộng tác viên của bạn
          </p>
        </div>
        
        <div className="flex items-center p-4 bg-tea-gold/20 rounded-lg border border-tea-gold/30">
          <div>
            <p className="text-sm text-gray-600">Hoa hồng khả dụng</p>
            <p className="text-2xl font-medium text-tea-dark">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(affiliateStats.pendingCommission)}
            </p>
            <Button size="sm" className="mt-2 bg-tea-gold hover:bg-tea-gold/80 text-white">
              Yêu cầu thanh toán
            </Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-tea" />
              Tổng đơn hàng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-medium">{affiliateStats.totalOrders}</p>
            <p className="text-sm text-gray-600 mt-1">đơn hàng đã giới thiệu</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-tea" />
              Tổng hoa hồng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-medium">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
                maximumFractionDigits: 0,
              }).format(affiliateStats.totalCommission)}
            </p>
            <p className="text-sm text-gray-600 mt-1">đã tích lũy</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-tea" />
              Khách hàng giới thiệu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-medium">{affiliateStats.customersReferred}</p>
            <p className="text-sm text-gray-600 mt-1">khách hàng</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-tea" />
              Tỷ lệ chuyển đổi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-medium">23.5%</p>
            <p className="text-sm text-gray-600 mt-1">trung bình</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle>Mã giới thiệu của bạn</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-2">
              Chia sẻ mã giới thiệu này với khách hàng của bạn. Bạn sẽ nhận được hoa hồng 35% khi họ mua hàng.
            </p>
            <div className="bg-tea-light p-3 rounded-lg text-center font-medium text-lg mb-4">
              {user.referralCode}
            </div>
            <div className="flex gap-3">
              <Button className="flex-1 bg-tea hover:bg-tea-dark"
                onClick={() => {
                  navigator.clipboard.writeText(user.referralCode);
                  toast.success("Đã sao chép mã giới thiệu!");
                }}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Sao chép mã
              </Button>
              <Button variant="outline" className="flex-1">
                Tải tài liệu tiếp thị
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Liên kết nhanh</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button asChild variant="outline" size="sm" className="w-full justify-start">
                <Link to="/account/affiliate">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Thống kê chi tiết
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full justify-start">
                <Link to="/account/profile">
                  <User className="h-4 w-4 mr-2" />
                  Thông tin cá nhân
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full justify-start">
                <Link to="/account/orders">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Lịch sử đơn hàng
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AffiliateDashboard;
