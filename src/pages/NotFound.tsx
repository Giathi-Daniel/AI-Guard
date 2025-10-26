import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Shield, Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const cyberQuotes = [
  "This page has been quarantined for suspicious activity... Just kidding, it doesn't exist!",
  "Error 404: This page is more secure than Fort Knox. So secure, we can't even find it.",
  "Our AI couldn't detect this page. Maybe it's using stealth mode?",
  "This URL is safer than your password... because it doesn't exist.",
  "Firewall status: This page successfully blocked. Wait, that's not how it works...",
  "Congratulations! You've found a page that even hackers can't access.",
  "This page encrypted itself out of existence. True security!",
  "404: Page not found. But hey, at least you're not being phished!",
  "Our threat detection system flagged this page as 'nonexistent'.",
  "This page is in witness protection. Can't tell you where it went.",
];

const NotFound = () => {
  const location = useLocation();
  const [quote, setQuote] = useState("");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    setQuote(cyberQuotes[Math.floor(Math.random() * cyberQuotes.length)]);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="relative max-w-2xl w-full">
        <div className="glass-sidebar rounded-2xl p-6 sm:p-8 md:p-12 border border-primary/20 cyber-pulse">
          <div className="text-center space-y-6">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <Shield className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 text-primary animate-pulse" />
                <AlertTriangle className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-destructive absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* 404 Text */}
            <div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gradient mb-4">
                404
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-2">
                Access Denied
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                The page you're looking for has been moved to a more secure location.
              </p>
            </div>

            {/* Cyber Quote */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-6">
              <p className="text-sm sm:text-base md:text-lg text-primary/90 italic leading-relaxed">
                "{quote}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="w-full sm:w-auto gap-2"
                >
                  <Home className="h-5 w-5" />
                  Return to Safety
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.history.back()}
                className="w-full sm:w-auto border-primary/30 hover:bg-primary/10"
              >
                Go Back
              </Button>
            </div>

            {/* Path Info */}
            <div className="pt-4 border-t border-primary/10">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Attempted route: <code className="text-primary bg-primary/10 px-2 py-1 rounded">
                  {location.pathname}
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
