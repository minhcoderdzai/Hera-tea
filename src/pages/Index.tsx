
import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ProductShowcase from "@/components/home/ProductShowcase";
import Features from "@/components/home/Features";
import ReferralSection from "@/components/home/ReferralSection";
import AffiliateSection from "@/components/home/AffiliateSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ProductShowcase />
      <Features />
      <ReferralSection />
      <AffiliateSection />
    </Layout>
  );
};

export default Index;
