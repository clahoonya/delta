import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import deltaLifeLogo from "@/assets/delta-life-logo.png";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Main navigation menu items
  const navItems = [
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "District Offices", path: "/district-offices" },
    { label: "Careers", path: "/careers" },
    { label: "FAQ's", path: "/faqs" },
    { label: "Contact", path: "/contact" },
  ];

  // Helper to check if current path is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={deltaLifeLogo}
              alt="Delta Life Insurance Company Logo"
              className="h-10 w-auto"
            />
            <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "1.7rem" }}>
              Delta Life Insurance
            </div>
          </Link>

          {/* Navigation menu for desktop screens */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  isActive(item.path)
                    ? "text-secondary"
                    : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="hero" size="sm">
              <a
                href="https://delta-life.qladmin.com/en/accounts/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agent Login
              </a>
            </Button>
          </nav>

          {/* Hamburger menu button for mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-sm font-medium transition-colors hover:text-secondary ${
                  isActive(item.path)
                    ? "text-secondary"
                    : "text-white/90"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="hero" size="sm" className="w-full">
              <a
                href="https://delta-life.qladmin.com/en/accounts/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agent Login
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
