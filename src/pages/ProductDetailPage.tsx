
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product by ID
  const product = products.find(p => p.id === id);
  
  // Find related products (same category, excluding current product)
  const relatedProducts = product 
    ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)
    : [];
  
  // Handle quantity changes
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  // Handle add to cart
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-medium mb-4">Không tìm thấy sản phẩm</h1>
          <p className="mb-8">Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link to="/products">
            <Button className="bg-tea hover:bg-tea-dark text-white">
              Quay lại trang sản phẩm
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-tea">Trang chủ</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/products" className="hover:text-tea">Sản phẩm</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-800">{product.name}</span>
        </div>
        
        {/* Product Details */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg overflow-hidden border border-border">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-serif font-medium text-tea-dark mb-4">{product.name}</h1>
            
            <div className="text-2xl font-medium text-tea-dark mb-6">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.price)}
            </div>
            
            <p className="text-gray-600 mb-8">{product.description}</p>
            
            {/* Quantity Selector */}
            <div className="flex items-center mb-8">
              <span className="mr-4 text-gray-600">Số lượng:</span>
              <div className="flex items-center border border-border rounded-md">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="h-10 w-10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={increaseQuantity}
                  className="h-10 w-10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="bg-tea hover:bg-tea-dark text-white px-8 py-6 text-lg w-full md:w-auto"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Thêm vào giỏ hàng
            </Button>
            
            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="mb-4">
                <span className="text-gray-600">Danh mục:</span>{" "}
                <Link to={`/products/category/${product.category}`} className="text-tea hover:underline">
                  {product.category}
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif font-medium text-tea-dark mb-6">
              Sản phẩm tương tự
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(relatedProduct => (
                <Link to={`/products/${relatedProduct.id}`} key={relatedProduct.id}>
                  <div className="tea-card group">
                    <div className="relative mb-4 overflow-hidden rounded-md aspect-square">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-medium text-tea-dark mb-2 group-hover:text-tea transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 mb-4 h-12">
                      {relatedProduct.description}
                    </p>
                    <p className="text-lg font-medium">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(relatedProduct.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
