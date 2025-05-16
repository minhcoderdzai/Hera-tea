
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "@/components/ui/sonner";

interface User {
  id: string;
  name: string;
  email: string;
  role: "customer" | "affiliate" | "admin";
  referralCode: string;
  points: number;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, referralCode?: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Failed to parse saved user:", error);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      // In a real app, this would be an API call
      // For now, we'll mock the login
      
      // Simulated API response
      const mockUser = {
        id: "user123",
        name: email.split("@")[0],
        email,
        role: "customer" as const,
        referralCode: "HERA" + Math.random().toString(36).substring(2, 8).toUpperCase(),
        points: 0,
      };
      
      if (email.includes("affiliate")) {
        mockUser.role = "affiliate" as const;
      }
      
      if (email.includes("admin")) {
        mockUser.role = "admin" as const;
      }
      
      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
      
      toast.success("Đăng nhập thành công!");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Đăng nhập thất bại. Vui lòng thử lại!");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, referralCode?: string) => {
    try {
      setIsLoading(true);
      // In a real app, this would be an API call
      // For now, we'll mock the registration
      
      // Simulated API response
      const mockUser = {
        id: "user" + Math.random().toString(36).substring(2, 10),
        name,
        email,
        role: "customer" as const,
        referralCode: "HERA" + Math.random().toString(36).substring(2, 8).toUpperCase(),
        points: 0,
      };
      
      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
      
      toast.success("Đăng ký thành công!");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Đăng ký thất bại. Vui lòng thử lại!");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.info("Đã đăng xuất");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
