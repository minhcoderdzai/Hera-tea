
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart, Product } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link to={`/products/${product.id}`}>
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
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Thêm
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
