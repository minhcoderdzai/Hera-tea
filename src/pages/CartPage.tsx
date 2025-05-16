
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CartItem from "@/components/cart/CartItem";
import OrderSummary from "@/components/checkout/OrderSummary";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ChevronLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  
  const proceedToCheckout = () => {
    navigate("/checkout");
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-tea-dark mb-8">
          Giỏ hàng
        </h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg border border-border">
            <ShoppingCart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-medium mb-4">Giỏ hàng trống</h2>
            <p className="text-gray-600 mb-8">Bạn chưa thêm sản phẩm nào vào giỏ hàng.</p>
            <Link to="/products">
              <Button className="bg-tea hover:bg-tea-dark text-white">
                Tiếp tục mua sắm
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg border border-border p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-serif font-medium text-tea-dark">
                    Sản phẩm trong giỏ ({cartItems.length})
                  </h2>
                  <Button
                    variant="ghost"
                    className="text-gray-600 hover:text-destructive"
                    onClick={clearCart}
                  >
                    Xóa tất cả
                  </Button>
                </div>
                
                <div className="divide-y divide-border">
                  {cartItems.map(item => (
                    <CartItem
                      key={item.product.id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeFromCart}
                    />
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link to="/products">
                    <Button variant="outline" className="flex items-center">
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Tiếp tục mua sắm
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <OrderSummary onProceedToCheckout={proceedToCheckout} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
