import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LayoutDashboard, LineChart, Settings } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Dashboard from "./pages/Dashboard";
import Markets from "./pages/Markets";
import Settings from "./pages/Settings";
import Trades from "./pages/Trades";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    title: "Trades",
    to: "/trades",
    icon: <LineChart className="h-4 w-4" />,
  },
  {
    title: "Markets",
    to: "/markets",
    icon: <LineChart className="h-4 w-4" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="trades" element={<Trades />} />
              <Route path="markets" element={<Markets />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;