
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductFilter from "@/components/products/ProductFilter";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

const ProductsPage = () => {
  const { category } = useParams<{ category?: string }>();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const maxPrice = 500000;
  
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("");
    }
  }, [category]);
  
  // Get unique categories
  const categories = Array.from(new Set(products.map(p => p.category)));
  
  // Filter products
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });
  
  const handleReset = () => {
    setSelectedCategory("");
    setPriceRange([0, maxPrice]);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-tea-dark mb-8">
          Sản phẩm
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filter */}
          <div className="md:w-1/4">
            <ProductFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              maxPrice={maxPrice}
              onPriceChange={setPriceRange}
              onReset={handleReset}
            />
          </div>
          
          {/* Product Grid */}
          <div className="md:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">Không tìm thấy sản phẩm</h3>
                <p className="text-gray-600">Vui lòng thử lại với bộ lọc khác.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
