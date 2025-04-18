
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, RocketIcon, BarChart, Users, MessageSquare, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <RocketIcon className="h-6 w-6 text-launchpad-purple mr-2" />
              <span className="text-xl font-bold text-launchpad-slate">LaunchPad</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/startups" className="text-gray-700 hover:text-launchpad-purple transition-colors">
              Startups
            </Link>
            <Link to="/mentors" className="text-gray-700 hover:text-launchpad-purple transition-colors">
              Mentors
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-launchpad-purple transition-colors">
              Dashboard
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Hello, {user?.name?.split(' ')[0]}</span>
                <Button 
                  variant="outline" 
                  className="flex items-center" 
                  onClick={logout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Link to="/signin">
                  <Button variant="outline" className="mr-2">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-launchpad-blue hover:bg-launchpad-indigo text-white">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/startups" className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <RocketIcon className="mr-2 h-4 w-4" />
                Startups
              </Link>
              <Link to="/mentors" className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Users className="mr-2 h-4 w-4" />
                Mentors
              </Link>
              <Link to="/dashboard" className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <BarChart className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
              <Link to="/feedback" className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <MessageSquare className="mr-2 h-4 w-4" />
                Feedback
              </Link>
              
              {isAuthenticated ? (
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center" 
                  onClick={logout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out ({user?.name?.split(' ')[0]})
                </Button>
              ) : (
                <>
                  <Link to="/signin">
                    <Button variant="outline" className="w-full mb-2">Sign In</Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="bg-launchpad-blue hover:bg-launchpad-indigo text-white w-full">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
