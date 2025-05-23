import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  Search,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import CartDrawer from "../cart/CartDrawer";
import ProductSearch from "../products/ProductSearch";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  
  return (
    <header className="bg-background border-b border-border sticky top-0 z-40 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/88a2f840-ed7f-4063-a15f-2ab18ea13c76.png" 
                alt="Hera Tea" 
                className="h-10 w-auto" 
              />
              <span className="ml-2 text-2xl font-serif font-medium text-tea-dark">
                Hera Tea
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="nav-link">
              Trang chủ
            </Link>
            <Link to="/products" className="nav-link">
              Sản phẩm
            </Link>
            <Link to="/about" className="nav-link">
              Về chúng tôi
            </Link>
            <Link to="/contact" className="nav-link">
              Liên hệ
            </Link>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search className="h-5 w-5" />
            </Button>
          </nav>
          
          {/* Right Menu (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <User className="h-5 w-5 mr-1" />
                    <span>{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background border-border">
                  <DropdownMenuItem asChild>
                    <Link to="/account" className="w-full">Bảng điều khiển</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/account/profile" className="w-full">Tài khoản</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/account/orders" className="w-full">Đơn hàng</Link>
                  </DropdownMenuItem>
                  {user.role === "affiliate" && (
                    <DropdownMenuItem asChild>
                      <Link to="/account/affiliate" className="w-full">Quản lý CTV</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="cursor-pointer">
                    Đăng xuất
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth/login">
                <Button variant="ghost">Đăng nhập</Button>
              </Link>
            )}
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setShowCartDrawer(true)}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-tea-dark text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <Button
              variant="outline" 
              size="icon"
              onClick={() => setShowCartDrawer(true)}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-tea-dark text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Product Search */}
      {showSearch && (
        <div className="border-t border-border py-3 bg-background">
          <div className="container mx-auto px-4">
            <ProductSearch onClose={() => setShowSearch(false)} />
          </div>
        </div>
      )}
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              Trang chủ
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              Sản phẩm
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              Về chúng tôi
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              Liên hệ
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            {user ? (
              <div className="px-2 space-y-1">
                <div className="px-3 py-2 text-base font-medium">
                  {user.name}
                </div>
                <Link 
                  to="/account" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Bảng điều khiển
                </Link>
                <Link 
                  to="/account/profile" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Tài khoản
                </Link>
                <Link 
                  to="/account/orders" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Đơn hàng
                </Link>
                {user.role === "affiliate" && (
                  <Link 
                    to="/account/affiliate" 
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    Quản lý CTV
                  </Link>
                )}
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <div className="px-2 space-y-1">
                <Link 
                  to="/auth/login" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Đăng nhập
                </Link>
                <Link 
                  to="/auth/register" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Đăng ký
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Cart Drawer */}
      <CartDrawer 
        open={showCartDrawer} 
        onClose={() => setShowCartDrawer(false)} 
      />
    </header>
  );
};

export default Navbar;
