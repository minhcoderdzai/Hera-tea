
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import CartDrawer from "../cart/CartDrawer";

const ProductShowcase = () => {
  const { addToCart } = useCart();
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  
  // Get the first 3 products for showcase
  const showcaseProducts = [
    {
      ...products[0],
      image: "/lovable-uploads/16dbbcf6-68c7-483a-a8ea-c626c2f10587.png"
    },
    {
      ...products[1],
      image: "/lovable-uploads/c40cd8f7-f61b-4ae7-aa29-f96088e994f6.png"
    },
    {
      ...products[2],
      image: "/lovable-uploads/c214670f-0757-4cdc-9433-689081e09f20.png"
    }
  ];

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    addToCart(product, 1);
    setShowCartDrawer(true);
  };

  return (
    <>
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
              <Link key={product.id} to={`/products/${product.id}`}>
                <div className="tea-card group">
                  <div className="relative mb-4 overflow-hidden rounded-md aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-medium text-tea-dark mb-2 group-hover:text-tea transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 mb-4 h-12">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-medium">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.price)}
                    </p>
                    <Button
                      size="sm"
                      className="bg-tea hover:bg-tea-dark text-white"
                      onClick={(e) => handleAddToCart(product, e)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Thêm
                    </Button>
                  </div>
                </div>
              </Link>
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
      
      <CartDrawer 
        open={showCartDrawer} 
        onClose={() => setShowCartDrawer(false)} 
      />
    </>
  );
};

export default ProductShowcase;
