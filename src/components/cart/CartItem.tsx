
import React from "react";
import { Button } from "@/components/ui/button";
import { Trash, Plus, Minus } from "lucide-react";
import { CartItem as CartItemType } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  compact?: boolean;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
  compact = false,
}) => {
  const { product, quantity } = item;
  
  if (compact) {
    return (
      <div className="flex gap-3 py-3 border-b border-border">
        {/* Product Image */}
        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-md overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product Info */}
        <div className="flex-grow">
          <h3 className="text-sm font-medium text-tea-dark">{product.name}</h3>
          <p className="text-sm text-gray-600">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.price)} x {quantity}
          </p>
          
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center border border-border rounded-md">
              <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6"
                onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                disabled={quantity <= 1}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-6 text-center text-sm">{quantity}</span>
              <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6"
                onClick={() => onUpdateQuantity(product.id, quantity + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            
            <p className="font-medium text-sm">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.price * quantity)}
            </p>
            
            <Button
              size="icon"
              variant="ghost"
              className="h-6 w-6 text-destructive"
              onClick={() => onRemove(product.id)}
            >
              <Trash className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col md:flex-row gap-4 py-4 border-b border-border">
      {/* Product Image */}
      <div className="flex-shrink-0 w-full md:w-24 h-24 bg-white rounded-md overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Product Info */}
      <div className="flex-grow">
        <h3 className="text-lg font-medium text-tea-dark">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-1 mb-2">{product.description}</p>
        
        <div className="flex flex-col md:flex-row justify-between md:items-center mt-2">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center border border-border rounded-md">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => onUpdateQuantity(product.id, quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-destructive"
              onClick={() => onRemove(product.id)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="text-right">
            <p className="text-lg font-medium">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.price * quantity)}
            </p>
            <p className="text-sm text-gray-600">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.price)} x {quantity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
