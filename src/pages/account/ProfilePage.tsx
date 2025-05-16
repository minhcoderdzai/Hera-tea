
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ReferralStats from "@/components/account/ReferralStats";
import { useAuth } from "@/context/AuthContext";
import { User, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { user, logout } = useAuth();
  
  if (!user) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center py-16 bg-white rounded-lg border border-border">
            <h2 className="text-2xl font-medium mb-4">Vui lòng đăng nhập</h2>
            <p className="text-gray-600 mb-8">
              Bạn cần đăng nhập để xem trang này.
            </p>
            <Link to="/auth/login">
              <Button className="bg-tea hover:bg-tea-dark text-white">
                Đăng nhập
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-tea-dark mb-8">
          Tài khoản của tôi
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-lg border border-border p-6 sticky top-24">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-tea-light p-4 rounded-full">
                  <User className="h-8 w-8 text-tea" />
                </div>
                <div>
                  <h2 className="text-xl font-medium">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                <Link to="/account/profile">
                  <Button
                    variant="ghost"
                    className="w-full justify-start bg-tea-light text-tea"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Thông tin tài khoản
                  </Button>
                </Link>
                <Link to="/account/orders">
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-tea-light hover:text-tea"
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Đơn hàng của tôi
                  </Button>
                </Link>
                {user.role === "affiliate" && (
                  <Link to="/account/affiliate">
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover:bg-tea-light hover:text-tea"
                    >
                      <User className="mr-2 h-4 w-4" />
                      Quản lý CTV
                    </Button>
                  </Link>
                )}
                <Button
                  variant="ghost"
                  className="w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive"
                  onClick={logout}
                >
                  Đăng xuất
                </Button>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg border border-border p-6 mb-8">
              <h2 className="text-xl font-serif font-medium text-tea-dark mb-6">
                Thông tin cá nhân
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-600 mb-1">Họ và tên</label>
                    <input
                      type="text"
                      value={user.name}
                      className="w-full p-2 border border-border rounded-md"
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 mb-1">Email</label>
                    <input
                      type="email"
                      value={user.email}
                      className="w-full p-2 border border-border rounded-md"
                      readOnly
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-600 mb-1">Loại tài khoản</label>
                  <input
                    type="text"
                    value={user.role === "affiliate" ? "Cộng tác viên" : "Khách hàng"}
                    className="w-full p-2 border border-border rounded-md"
                    readOnly
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="bg-tea hover:bg-tea-dark text-white">
                  Cập nhật thông tin
                </Button>
              </div>
            </div>
            
            <ReferralStats />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
