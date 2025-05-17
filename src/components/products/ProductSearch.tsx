
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { products } from "@/data/products";
import { Product } from "@/context/CartContext";

interface ProductSearchProps {
  onClose: () => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }
    
    const query = searchQuery.toLowerCase().trim();
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
    
    setSearchResults(filteredProducts.slice(0, 5)); // Limit to 5 results
  }, [searchQuery]);
  
  const handleProductClick = (productId: string) => {
    navigate(`/products/${productId}`);
    onClose();
  };
  
  return (
    <div className="relative">
      <div className="flex items-center">
        <Input
          type="search"
          placeholder="Tìm kiếm sản phẩm..."
          className="flex-grow"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
        <Button variant="ghost" size="icon" onClick={onClose} className="ml-2">
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      {searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-background border border-border rounded-md mt-1 shadow-md z-50 max-h-[300px] overflow-y-auto">
          {searchResults.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-3 p-3 hover:bg-accent cursor-pointer border-b border-border last:border-b-0"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="w-12 h-12 bg-muted rounded overflow-hidden flex-shrink-0">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h4 className="font-medium">{product.name}</h4>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {product.description}
                </p>
              </div>
              <div className="text-right text-tea font-medium">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
