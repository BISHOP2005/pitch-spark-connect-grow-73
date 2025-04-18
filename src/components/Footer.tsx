
import { Link } from "react-router-dom";
import { RocketIcon, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <RocketIcon className="h-6 w-6 text-launchpad-purple mr-2" />
              <span className="text-xl font-bold text-launchpad-slate">LaunchPad</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              A bootstrapped power platform for early stage startups to showcase pitches, 
              get mentor feedback, and track engagement via dashboards.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-500 hover:text-launchpad-blue">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-launchpad-blue">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-launchpad-blue">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-launchpad-blue">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/startups" className="text-gray-600 hover:text-launchpad-purple">
                  Browse Startups
                </Link>
              </li>
              <li>
                <Link to="/mentors" className="text-gray-600 hover:text-launchpad-purple">
                  Find Mentors
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-launchpad-purple">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-600 hover:text-launchpad-purple">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-launchpad-purple">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-launchpad-purple">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-launchpad-purple">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-launchpad-purple">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-gray-600 text-center">
            &copy; {new Date().getFullYear()} LaunchPad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
