
import React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface ProductFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  maxPrice: number;
  onPriceChange: (values: [number, number]) => void;
  onReset: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  maxPrice,
  onPriceChange,
  onReset,
}) => {
  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <h2 className="text-xl font-serif font-medium text-tea-dark mb-6">Bộ lọc</h2>
      
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Danh mục</h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange("")}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              selectedCategory === ""
                ? "bg-tea text-white"
                : "hover:bg-tea-light"
            }`}
          >
            Tất cả
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                selectedCategory === category
                  ? "bg-tea text-white"
                  : "hover:bg-tea-light"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Giá</h3>
        <Slider
          defaultValue={priceRange}
          max={maxPrice}
          step={10000}
          value={priceRange}
          onValueChange={(values) => onPriceChange(values as [number, number])}
          className="my-6"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(priceRange[0])}
          </span>
          <span>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(priceRange[1])}
          </span>
        </div>
      </div>
      
      {/* Reset Button */}
      <Button
        onClick={onReset}
        variant="outline"
        className="w-full border-tea text-tea hover:bg-tea-light"
      >
        Đặt lại bộ lọc
      </Button>
    </div>
  );
};

export default ProductFilter;
