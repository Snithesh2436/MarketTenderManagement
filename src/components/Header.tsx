
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, Search, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
}

const Header = ({ isAuthenticated, setIsAuthenticated }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">TenderLink</span>
            <Badge variant="secondary" className="text-xs">BETA</Badge>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/tenders" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Browse Tenders
            </Link>
            <Link to="/companies" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Find Companies
            </Link>
            <Link to="/post-tender" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Post Tender
            </Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              How it Works
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Button variant="ghost" size="sm">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsAuthenticated(false)}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-4">
              <Link 
                to="/tenders" 
                className="block text-gray-600 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse Tenders
              </Link>
              <Link 
                to="/companies" 
                className="block text-gray-600 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find Companies
              </Link>
              <Link 
                to="/post-tender" 
                className="block text-gray-600 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Post Tender
              </Link>
              
              <div className="border-t border-gray-200 pt-4 space-y-2">
                {isAuthenticated ? (
                  <>
                    <Link to="/dashboard">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <User className="w-4 h-4 mr-2" />
                        Dashboard
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => {
                        setIsAuthenticated(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="block">
                      <Button variant="ghost" size="sm" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/register" className="block">
                      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
