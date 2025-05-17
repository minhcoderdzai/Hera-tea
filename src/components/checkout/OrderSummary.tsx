
import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";

interface OrderSummaryProps {
  onProceedToCheckout?: () => void;
  isCheckoutPage?: boolean;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  onProceedToCheckout,
  isCheckoutPage = false,
}) => {
  const { cartItems, totalPrice, appliedReferralCode, applyReferralCode, removeReferralCode } = useCart();
  const { user } = useAuth();
  const [referralCode, setReferralCode] = React.useState(appliedReferralCode || "");

  const handleApplyCode = () => {
    if (referralCode.trim()) {
      applyReferralCode(referralCode.trim());
    }
  };

  const shippingFee = 30000; // Example shipping fee
  const total = totalPrice + shippingFee;

  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <h2 className="text-xl font-serif font-medium text-tea-dark mb-4">
        Tóm tắt đơn hàng
      </h2>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Tạm tính</span>
          <span>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(totalPrice)}
          </span>
        </div>
        
        {isCheckoutPage && (
          <div className="flex justify-between">
            <span>Phí vận chuyển</span>
            <span>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(shippingFee)}
            </span>
          </div>
        )}
        
        {/* Referral Code Input */}
        {!appliedReferralCode ? (
          <div className="pt-2 pb-3">
            <p className="text-sm text-gray-600 mb-2">Mã giới thiệu</p>
            <div className="flex space-x-2">
              <Input
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                placeholder="Nhập mã giới thiệu"
              />
              <Button
                variant="outline"
                className="shrink-0 border-tea text-tea hover:bg-tea-light"
                onClick={handleApplyCode}
              >
                Áp dụng
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-tea-light p-3 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Mã giới thiệu đã áp dụng</p>
                <p className="font-medium">{appliedReferralCode}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-tea hover:text-tea-dark hover:bg-transparent"
                onClick={removeReferralCode}
              >
                Xóa
              </Button>
            </div>
          </div>
        )}
        
        {/* Show user's referral code for sharing */}
        {user && !isCheckoutPage && (
          <div className="bg-tea-light p-3 rounded-md mt-3">
            <p className="text-sm text-gray-600 mb-1">Mã giới thiệu của bạn</p>
            <p className="font-medium">{user.referralCode}</p>
            <p className="text-xs text-gray-600 mt-1">
              Chia sẻ mã này để nhận 250 điểm khi bạn bè mua hàng
            </p>
          </div>
        )}
        
        <div className="border-t border-border pt-4 mt-4">
          <div className="flex justify-between items-center text-lg font-medium flex-wrap">
            <span className="mr-2 whitespace-nowrap">Tổng cộng</span>
            <span className="text-tea-dark whitespace-nowrap">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(isCheckoutPage ? total : totalPrice)}
            </span>
          </div>
        </div>
        
        {!isCheckoutPage && onProceedToCheckout && (
          <Button
            className="w-full bg-tea hover:bg-tea-dark text-white mt-4"
            onClick={onProceedToCheckout}
            disabled={cartItems.length === 0}
          >
            Tiến hành thanh toán
          </Button>
        )}
        
        {isCheckoutPage && (
          <Button
            className="w-full bg-tea hover:bg-tea-dark text-white mt-4"
            type="submit"
          >
            Xác nhận đặt hàng
          </Button>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
