
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url('/lovable-uploads/21f86db5-2d04-4153-8e0b-ac85f4f5475a.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-4">
            Khám phá <span className="text-tea-gold">hương vị thuần khiết</span> từ thiên nhiên
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white">
            Thả mình vào thế giới trà thảo mộc tinh khiết với Hera Tea, nơi mỗi tách trà là một hành trình khám phá hương vị tinh tế.
          </p>
          <div className="flex space-x-4">
            <Link to="/products">
              <Button className="bg-tea hover:bg-tea-dark text-white px-6 py-2">
                Khám phá sản phẩm
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Tìm hiểu thêm
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
