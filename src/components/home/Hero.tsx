
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-tea-light">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-tea-dark mb-4">
            Khám phá <span className="text-tea">tinh túy tự nhiên</span> từ thảo mộc
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Trà thảo mộc cao cấp, được chọn lọc kỹ lưỡng từ các loại thảo dược tự nhiên, mang đến cho bạn những giây phút thư giãn và trải nghiệm vị giác tuyệt vời.
          </p>
          <div className="flex space-x-4">
            <Link to="/products">
              <Button className="bg-tea hover:bg-tea-dark text-white px-6 py-2">
                Khám phá sản phẩm
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-tea text-tea hover:bg-tea-light">
                Tìm hiểu thêm
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="aspect-square bg-white p-8 rounded-full shadow-lg flex items-center justify-center">
            <img
              src="/lovable-uploads/88a2f840-ed7f-4063-a15f-2ab18ea13c76.png"
              alt="Hera Tea"
              className="w-4/5 h-4/5 object-contain"
            />
          </div>
          <div className="absolute -top-6 -left-6 bg-tea-gold rounded-full p-4 shadow-lg">
            <p className="text-white font-serif text-lg">Thảo mộc 100% tự nhiên</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
