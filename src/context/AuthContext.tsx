import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "customer" | "affiliate" | "admin";
  points: number;
  referralCode: string;
  referrer?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string, referralCode?: string) => void;
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  // Load user from localStorage on mount
  useEffect(() => {
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

  const login = (email: string, password: string) => {
    // This would normally be an API call
    // For demo purposes, we're mocking the login
    
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Demo users
      if (email === "user@example.com" && password === "password") {
        const user: User = {
          id: "user-123",
          name: "Khách hàng",
          email: "user@example.com",
          role: "customer",
          points: 250,
          referralCode: "USER123"
        };
        
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/account");
      } else if (email === "affiliate@example.com" && password === "password") {
        const user: User = {
          id: "aff-123",
          name: "Cộng tác viên",
          email: "affiliate@example.com",
          role: "affiliate",
          points: 500,
          referralCode: "AFF123"
        };
        
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/account");
      } else if (email === "admin@example.com" && password === "password") {
        const user: User = {
          id: "adm-123",
          name: "Quản trị viên",
          email: "admin@example.com",
          role: "admin",
          points: 0,
          referralCode: "ADM123"
        };
        
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/account");
      } else {
        alert("Email hoặc mật khẩu không đúng!");
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const register = (name: string, email: string, password: string, referralCode?: string) => {
    // This would normally be an API call
    // For demo purposes, we're mocking the registration
    
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const user: User = {
        id: `user-${Date.now()}`,
        name,
        email,
        role: "customer",
        points: 0,
        referralCode: `USER${Math.floor(100000 + Math.random() * 900000)}`,
        referrer: referralCode
      };
      
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/account");
      
      setIsLoading(false);
    }, 1000);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
