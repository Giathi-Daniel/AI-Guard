import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const isLanding = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all group">
            <img src="/logo.jpg" alt="AI-Guard" className="h-10 w-10 rounded-lg object-cover shadow-[0_0_10px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI-Guard</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {isLanding ? (
              <>
                <a href="#features" className="text-foreground hover:text-primary transition-all relative group">
                  Features
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#about" className="text-foreground hover:text-primary transition-all relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#contact" className="text-foreground hover:text-primary transition-all relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                </a>
                <Link to="/login">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link to="/login">
                  <Button variant="accent">Get Started</Button>
                </Link>
              </>
            ) : (
              <Link to="/">
                <Button variant="ghost">Back to Home</Button>
              </Link>
            )}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="glass-sidebar border-l border-primary/20">
              <div className="flex flex-col gap-4 mt-8">
                {isLanding ? (
                  <>
                    <a href="#features" className="text-lg text-foreground hover:text-primary transition-colors" onClick={handleLinkClick}>
                      Features
                    </a>
                    <a href="#about" className="text-lg text-foreground hover:text-primary transition-colors" onClick={handleLinkClick}>
                      About
                    </a>
                    <a href="#contact" className="text-lg text-foreground hover:text-primary transition-colors" onClick={handleLinkClick}>
                      Contact
                    </a>
                    <Link to="/login" onClick={handleLinkClick}>
                      <Button variant="ghost" className="w-full">Sign In</Button>
                    </Link>
                    <Link to="/login" onClick={handleLinkClick}>
                      <Button variant="accent" className="w-full">Get Started</Button>
                    </Link>
                  </>
                ) : (
                  <Link to="/" onClick={handleLinkClick}>
                    <Button variant="ghost" className="w-full">Back to Home</Button>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
