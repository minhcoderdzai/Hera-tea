
import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CustomerDashboard from "@/components/account/CustomerDashboard";
import AffiliateDashboard from "@/components/account/AffiliateDashboard";
import { useAuth } from "@/context/AuthContext";

const DashboardPage = () => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-40 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {user.role === "affiliate" ? (
          <AffiliateDashboard />
        ) : (
          <CustomerDashboard />
        )}
      </div>
    </Layout>
  );
};

export default DashboardPage;
