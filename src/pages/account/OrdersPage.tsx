
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { User, ShoppingBag, Eye, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock order data
const mockOrders = [
  {
    id: "ORD123456",
    date: "2025-05-15",
    total: 320000,
    status: "Đã giao hàng",
    items: [
      {
        id: "1",
        name: "Thanh sắc mộc trà",
        quantity: 1,
        price: 320000,
      },
    ],
  },
  {
    id: "ORD123455",
    date: "2025-05-10",
    total: 640000,
    status: "Đang giao hàng",
    items: [
      {
        id: "2",
        name: "An nguyệt mộc trà",
        quantity: 1,
        price: 320000,
      },
      {
        id: "3",
        name: "Thái mộc mộc trà",
        quantity: 1,
        price: 320000,
      },
    ],
  },
  {
    id: "ORD123454",
    date: "2025-05-05",
    total: 320000,
    status: "Đã hủy",
    items: [
      {
        id: "1",
        name: "Thanh sắc mộc trà",
        quantity: 1,
        price: 320000,
      },
    ],
  },
];

const OrdersPage = () => {
  const { user, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  
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
  
  // Filter orders
  const filteredOrders = mockOrders.filter((order) => {
    const matchesSearch =
      searchTerm === "" ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus =
      statusFilter === "" || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-tea-dark mb-8">
          Đơn hàng của tôi
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
                    className="w-full justify-start hover:bg-tea-light hover:text-tea"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Thông tin tài khoản
                  </Button>
                </Link>
                <Link to="/account/orders">
                  <Button
                    variant="ghost"
                    className="w-full justify-start bg-tea-light text-tea"
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
            <div className="bg-white rounded-lg border border-border p-6">
              <h2 className="text-xl font-serif font-medium text-tea-dark mb-6">
                Danh sách đơn hàng
              </h2>
              
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Tìm kiếm theo mã đơn hàng"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Trạng thái" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Tất cả</SelectItem>
                    <SelectItem value="Chờ xác nhận">Chờ xác nhận</SelectItem>
                    <SelectItem value="Đang xử lý">Đang xử lý</SelectItem>
                    <SelectItem value="Đang giao hàng">Đang giao hàng</SelectItem>
                    <SelectItem value="Đã giao hàng">Đã giao hàng</SelectItem>
                    <SelectItem value="Đã hủy">Đã hủy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {filteredOrders.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">Không có đơn hàng nào</h3>
                  <p className="text-gray-600 mb-6">
                    {searchTerm || statusFilter
                      ? "Không tìm thấy đơn hàng phù hợp với bộ lọc."
                      : "Bạn chưa có đơn hàng nào."}
                  </p>
                  <Link to="/products">
                    <Button className="bg-tea hover:bg-tea-dark text-white">
                      Mua sắm ngay
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-border rounded-lg overflow-hidden"
                    >
                      <div className="flex justify-between items-center bg-gray-50 p-4">
                        <div>
                          <span className="text-sm text-gray-600">Mã đơn hàng:</span>
                          <span className="font-medium ml-2">{order.id}</span>
                        </div>
                        <div>
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              order.status === "Đã giao hàng"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Đã hủy"
                                ? "bg-red-100 text-red-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="space-y-2">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex justify-between">
                              <span>
                                {item.name} x {item.quantity}
                              </span>
                              <span className="font-medium">
                                {new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(item.price * item.quantity)}
                              </span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
                          <div>
                            <span className="text-sm text-gray-600">Ngày đặt hàng:</span>
                            <span className="ml-2">
                              {new Date(order.date).toLocaleDateString("vi-VN")}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium mr-4">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(order.total)}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-tea text-tea hover:bg-tea-light"
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              Chi tiết
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrdersPage;
