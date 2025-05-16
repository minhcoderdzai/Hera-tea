
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/context/AuthContext";

const RegisterPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isAffiliateRegistration = queryParams.get("affiliate") === "true";
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [wantAffiliate, setWantAffiliate] = useState(isAffiliateRegistration);
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }
    
    if (!acceptTerms) {
      alert("Vui lòng đồng ý với điều khoản sử dụng");
      return;
    }
    
    try {
      await register(name, email, password, referralCode);
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  
  useEffect(() => {
    // Extract referral code from URL if present
    const urlReferralCode = queryParams.get("ref");
    if (urlReferralCode) {
      setReferralCode(urlReferralCode);
    }
  }, [location]);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg border border-border p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-medium text-tea-dark">
              {wantAffiliate ? "Đăng ký Cộng tác viên" : "Đăng ký tài khoản"}
            </h1>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Họ và tên</Label>
                <Input
                  id="name"
                  placeholder="Nhập họ và tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Nhập địa chỉ email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="password">Mật khẩu</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="referralCode">Mã giới thiệu (không bắt buộc)</Label>
                <Input
                  id="referralCode"
                  placeholder="Nhập mã giới thiệu nếu có"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="affiliate"
                  checked={wantAffiliate}
                  onCheckedChange={(checked) => setWantAffiliate(!!checked)}
                />
                <Label htmlFor="affiliate" className="cursor-pointer">
                  Tôi muốn đăng ký làm Cộng tác viên
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(!!checked)}
                  required
                />
                <Label htmlFor="terms" className="text-sm cursor-pointer">
                  Tôi đồng ý với{" "}
                  <Link to="/terms" className="text-tea hover:text-tea-dark">
                    Điều khoản sử dụng
                  </Link>{" "}
                  và{" "}
                  <Link to="/privacy" className="text-tea hover:text-tea-dark">
                    Chính sách bảo mật
                  </Link>
                </Label>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-tea hover:bg-tea-dark text-white"
                disabled={isLoading}
              >
                {isLoading ? "Đang xử lý..." : "Đăng ký"}
              </Button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Đã có tài khoản?{" "}
              <Link to="/auth/login" className="text-tea hover:text-tea-dark">
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
