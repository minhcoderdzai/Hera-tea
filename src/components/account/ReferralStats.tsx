
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Copy, Gift } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const ReferralStats = () => {
  const { user } = useAuth();
  
  const copyReferralCode = () => {
    if (user?.referralCode) {
      navigator.clipboard.writeText(user.referralCode);
      toast.success("Đã sao chép mã giới thiệu!");
    }
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <h2 className="text-xl font-serif font-medium text-tea-dark mb-4 flex items-center">
        <Gift className="mr-2 h-5 w-5 text-tea" />
        Tích điểm và giới thiệu
      </h2>
      
      <div className="space-y-6">
        {/* Điểm thưởng */}
        <div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Điểm thưởng của bạn</span>
            <span className="text-2xl font-medium text-tea">{user?.points || 0}</span>
          </div>
          
          <div className="mt-1 text-sm text-gray-500">
            300 điểm = 1 hộp trà miễn phí
          </div>
          
          <div className="mt-4">
            <Button
              variant="outline"
              className="border-tea text-tea hover:bg-tea-light w-full md:w-auto"
              disabled={!user || (user.points || 0) < 300}
            >
              Đổi điểm lấy quà
            </Button>
          </div>
        </div>
        
        {/* Mã giới thiệu */}
        <div className="pt-4 border-t border-border">
          <div className="mb-2 text-gray-600">Mã giới thiệu của bạn</div>
          <div className="flex items-center">
            <div className="flex-1 bg-tea-light rounded-l-md p-3 font-medium">
              {user?.referralCode || "HERATEA"}
            </div>
            <Button
              variant="default"
              className="rounded-l-none bg-tea hover:bg-tea-dark"
              onClick={copyReferralCode}
            >
              <Copy className="h-4 w-4 mr-2" />
              Sao chép
            </Button>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <p>Mỗi khi bạn bè sử dụng mã này để mua hàng (tối thiểu 250.000đ), bạn nhận được <strong>250 điểm</strong>.</p>
            <p className="mt-2">Chia sẻ mã này để tích lũy điểm và đổi quà!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralStats;
