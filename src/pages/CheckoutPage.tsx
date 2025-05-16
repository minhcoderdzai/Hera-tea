
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/sonner";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  district: "",
  ward: "",
  notes: "",
  paymentMethod: "cod" as const,
};

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { name: string; value: string }
  ) => {
    const { name, value } = "target" in e ? e.target : e;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.district || !formData.ward) {
      toast.error("Vui lòng điền đầy đủ thông tin giao hàng");
      return;
    }
    
    // In a real app, this would send the order to an API
    // For now, we'll simulate success
    
    // Clear cart after successful order
    clearCart();
    
    // Show success message
    toast.success("Đặt hàng thành công!");
    
    // Redirect to success page
    navigate("/checkout/success");
  };
  
  // Redirect if cart is empty
  if (cartItems.length === 0) {
    setTimeout(() => {
      navigate("/cart");
    }, 100);
    return null;
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-tea-dark mb-8">
          Thanh toán
        </h1>
        
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg border border-border p-6">
                <CheckoutForm formData={formData} onChange={handleChange} />
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <OrderSummary isCheckoutPage={true} />
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
