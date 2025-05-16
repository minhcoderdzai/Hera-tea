
import React from "react";
import { Leaf, Heart, Award, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Tự nhiên",
    description: "Sản phẩm trà từ thảo mộc tự nhiên, không chất bảo quản, hương liệu.",
  },
  {
    icon: Heart,
    title: "Lợi ích sức khỏe",
    description: "Kết hợp các loại thảo mộc có lợi cho sức khỏe và làm đẹp.",
  },
  {
    icon: Award,
    title: "Chất lượng cao cấp",
    description: "Thành phần được chọn lọc kỹ lưỡng, đảm bảo chất lượng tốt nhất.",
  },
  {
    icon: Truck,
    title: "Giao hàng toàn quốc",
    description: "Dịch vụ giao hàng nhanh chóng đến tận tay khách hàng.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-tea-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-tea-dark mb-4">
            Tại sao chọn Hera Tea?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến những sản phẩm trà thảo mộc chất lượng cao nhất.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-border text-center flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-tea-light p-3 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-tea" />
              </div>
              <h3 className="text-xl font-serif font-medium text-tea-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
