import { Shield, LayoutDashboard, FileText, PlusCircle, BarChart3, Settings, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Incident Reports", url: "/incidents", icon: FileText },
  { title: "Manual Report", url: "/report", icon: PlusCircle },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
];

export const DashboardSidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-card hover:bg-muted"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen glass-sidebar text-sidebar-foreground border-r border-primary/20 transition-transform duration-300 z-50 shadow-glow",
          "w-64 lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo & Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-primary/20">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all">
            <img src="/logo.jpg" alt="AI-Guard" className="h-8 w-8 rounded-lg object-cover shadow-glow" />
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI-Guard</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(false)}
            className="lg:hidden hover:bg-primary/10 text-primary"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.url}
                  onClick={handleMobileNavClick}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 group relative overflow-hidden",
                      isActive
                        ? "bg-gradient-to-r from-primary/20 to-accent/20 text-primary font-medium shadow-[0_0_15px_rgba(6,182,212,0.3)] border border-primary/30"
                        : "text-sidebar-foreground hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:border hover:border-primary/20"
                    )
                  }
                >
                  <item.icon className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};
