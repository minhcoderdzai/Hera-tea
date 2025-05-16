
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

interface CheckoutFormProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    district: string;
    ward: string;
    notes: string;
    paymentMethod: "cod" | "bank_transfer" | "momo" | "vnpay";
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { name: string; value: string }) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ formData, onChange }) => {
  const handlePaymentMethodChange = (value: string) => {
    onChange({
      name: "paymentMethod",
      value,
    } as any);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-serif font-medium text-tea-dark mb-4">
          Thông tin giao hàng
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName">Họ và tên</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={onChange}
              placeholder="Nhập họ và tên"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={onChange}
              placeholder="Nhập địa chỉ email"
              required
            />
          </div>
        </div>
        
        <div className="mt-4">
          <Label htmlFor="phone">Số điện thoại</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            placeholder="Nhập số điện thoại"
            required
          />
        </div>
        
        <div className="mt-4">
          <Label htmlFor="address">Địa chỉ</Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={onChange}
            placeholder="Nhập địa chỉ"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <Label htmlFor="city">Tỉnh/Thành phố</Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={onChange}
              placeholder="Nhập tỉnh/thành phố"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="district">Quận/Huyện</Label>
            <Input
              id="district"
              name="district"
              value={formData.district}
              onChange={onChange}
              placeholder="Nhập quận/huyện"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="ward">Phường/Xã</Label>
            <Input
              id="ward"
              name="ward"
              value={formData.ward}
              onChange={onChange}
              placeholder="Nhập phường/xã"
              required
            />
          </div>
        </div>
        
        <div className="mt-4">
          <Label htmlFor="notes">Ghi chú</Label>
          <Textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={onChange}
            placeholder="Nhập ghi chú cho đơn hàng (không bắt buộc)"
            className="h-24"
          />
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-serif font-medium text-tea-dark mb-4">
          Phương thức thanh toán
        </h2>
        
        <RadioGroup
          value={formData.paymentMethod}
          onValueChange={handlePaymentMethodChange}
        >
          <div className="flex items-center space-x-2 rounded-md border border-border p-3 mb-3">
            <RadioGroupItem value="cod" id="cod" />
            <Label htmlFor="cod" className="cursor-pointer flex-grow">
              Thanh toán khi nhận hàng (COD)
            </Label>
          </div>
          
          <div className="flex items-center space-x-2 rounded-md border border-border p-3 mb-3">
            <RadioGroupItem value="bank_transfer" id="bank_transfer" />
            <Label htmlFor="bank_transfer" className="cursor-pointer flex-grow">
              Chuyển khoản ngân hàng
            </Label>
          </div>
          
          <div className="flex items-center space-x-2 rounded-md border border-border p-3 mb-3">
            <RadioGroupItem value="momo" id="momo" />
            <Label htmlFor="momo" className="cursor-pointer flex-grow">
              Thanh toán MoMo
            </Label>
          </div>
          
          <div className="flex items-center space-x-2 rounded-md border border-border p-3">
            <RadioGroupItem value="vnpay" id="vnpay" />
            <Label htmlFor="vnpay" className="cursor-pointer flex-grow">
              Thanh toán VNPay
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default CheckoutForm;
