
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import CartItem from "./CartItem";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const { cartItems, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  return (
    <Sheet open={open} onOpenChange={(isOpen) => {
      if (!isOpen) onClose();
    }}>
      <SheetContent side="right" className="w-full sm:max-w-md md:max-w-xl flex flex-col">
        <SheetHeader className="flex items-center justify-between">
          <SheetTitle className="text-xl font-serif">
            Giỏ hàng ({totalItems})
          </SheetTitle>
          <div className="flex items-center gap-2">
            {cartItems.length > 0 && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={clearCart}
                className="text-sm text-muted-foreground hover:text-destructive"
              >
                Xóa tất cả
              </Button>
            )}
            <SheetClose asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onClose}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>
        
        <div className="py-6 overflow-y-auto flex-1">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-center">
              <ShoppingCart className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-muted-foreground">Giỏ hàng của bạn đang trống</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                  compact
                />
              ))}
            </div>
          )}
        </div>
        
        <SheetFooter className="border-t border-border pt-4 flex flex-col mt-auto">
          {cartItems.length > 0 && (
            <div className="flex flex-col mb-4 w-full px-1 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium">Tổng cộng:</span>
                <span className="text-base font-medium text-tea-dark">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(totalPrice)}
                </span>
              </div>
            </div>
          )}
          
          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              className="w-1/2 h-9 text-sm"
              onClick={onClose}
            >
              Tiếp tục mua sắm
            </Button>
            
            <Button
              className="w-1/2 h-9 text-sm bg-tea hover:bg-tea-dark"
              asChild
              disabled={cartItems.length === 0}
            >
              <Link to="/cart" onClick={onClose}>
                Xem giỏ hàng
              </Link>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
