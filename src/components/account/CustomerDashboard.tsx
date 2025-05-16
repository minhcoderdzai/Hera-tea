import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Gift, Share2, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/components/ui/sonner";

const CustomerDashboard = () => {
  const { user } = useAuth();
  
  if (!user) return null;
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-medium text-tea-dark">
            Xin chào, {user.name}
          </h1>
          <p className="text-gray-600">
            Quản lý tài khoản và theo dõi đơn hàng của bạn
          </p>
        </div>
        
        <div className="flex items-center p-4 bg-tea-light rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Điểm tích lũy của bạn</p>
            <p className="text-2xl font-medium text-tea-dark">{user.points} điểm</p>
            <p className="text-xs text-gray-500 mt-1">
              Đổi {300} điểm = 1 hộp trà miễn phí
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="h-5 w-5 text-tea" />
              Thông tin cá nhân
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Quản lý thông tin cá nhân và cập nhật mật khẩu của bạn
            </p>
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link to="/account/profile">Xem thông tin</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-tea" />
              Đơn hàng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Theo dõi trạng thái đơn hàng và lịch sử mua sắm của bạn
            </p>
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link to="/account/orders">Xem đơn hàng</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Gift className="h-5 w-5 text-tea" />
              Đổi điểm
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Đổi điểm tích lũy của bạn lấy những phần quà hấp dẫn
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Đổi điểm ngay
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Share2 className="h-5 w-5 text-tea" />
              Giới thiệu bạn bè
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-2">Mã giới thiệu của bạn:</p>
            <div className="bg-tea-light p-2 rounded text-center font-medium mb-4">
              {user.referralCode}
            </div>
            <Button variant="outline" size="sm" className="w-full"
              onClick={() => {
                navigator.clipboard.writeText(user.referralCode);
                toast.success("Đã sao chép mã giới thiệu!");
              }}
            >
              Sao chép mã
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerDashboard;
