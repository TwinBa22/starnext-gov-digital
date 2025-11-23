import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SmartTraffic from "./pages/products/SmartTraffic";
import PalakMantri from "./pages/products/PalakMantri";
import EdgeSense from "./pages/products/EdgeSense";
import ECivic from "./pages/products/ECivic";
import GeoVisionConstruction from "./pages/products/GeoVisionConstruction";
import AIGovernance from "./pages/products/AIGovernance";
import StarNextERP from "./pages/products/StarNextERP";
import EnterpriseAI from "./pages/products/EnterpriseAI";
import DroneAgriculture from "./pages/products/DroneAgriculture";
import AgriSight from "./pages/products/AgriSight";
import EMS from "./pages/products/EMS";
import LivestockMonitoring from "./pages/products/LivestockMonitoring";
import HawkEye from "./pages/products/HawkEye";
import GeoVisionPlatform from "./pages/products/GeoVisionPlatform";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/smart-traffic" element={<SmartTraffic />} />
          <Route path="/products/palakmantri" element={<PalakMantri />} />
          <Route path="/products/edge-sense" element={<EdgeSense />} />
          <Route path="/products/ecivic" element={<ECivic />} />
          <Route path="/products/geovision-construction" element={<GeoVisionConstruction />} />
          <Route path="/products/ai-governance" element={<AIGovernance />} />
          <Route path="/products/starnext-erp" element={<StarNextERP />} />
          <Route path="/products/enterprise-ai" element={<EnterpriseAI />} />
          <Route path="/products/drone-agriculture" element={<DroneAgriculture />} />
          <Route path="/products/agrisight" element={<AgriSight />} />
          <Route path="/products/ems" element={<EMS />} />
          <Route path="/products/livestock-monitoring" element={<LivestockMonitoring />} />
          <Route path="/products/hawkeye" element={<HawkEye />} />
          <Route path="/products/geovision-platform" element={<GeoVisionPlatform />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
