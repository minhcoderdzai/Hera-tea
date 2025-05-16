
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductCard from "../products/ProductCard";

const ProductShowcase = () => {
  // Get the first 3 products for showcase
  const showcaseProducts = products.slice(0, 3);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-tea-dark mb-4">
            Sản phẩm nổi bật
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá bộ sưu tập trà thảo mộc cao cấp của chúng tôi, được chọn lọc từ những loại thảo dược quý hiếm.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/products">
            <Button className="bg-tea hover:bg-tea-dark text-white px-8">
              Xem tất cả sản phẩm
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
