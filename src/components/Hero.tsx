
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 space-y-6 mb-10 lg:mb-0 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-heading">
              Propel Your Startup to New Heights
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Showcase your pitch, get valuable feedback from mentors, and track engagement metrics all in one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-launchpad-blue hover:bg-launchpad-indigo text-white">
                <Link to="/startups" className="flex items-center">
                  Explore Startups <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-launchpad-blue text-launchpad-blue hover:bg-blue-50">
                <Link to="/dashboard" className="flex items-center">
                  View Dashboard <BarChart className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg animate-scale-in">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-white/80">
                  <div className="flex items-center mb-4">
                    <Rocket className="h-10 w-10 text-launchpad-purple p-2 bg-purple-100 rounded-lg" />
                    <h3 className="ml-3 text-xl font-semibold text-gray-800">Pitch your startup</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 bg-gray-200 rounded-full w-full overflow-hidden">
                      <div className="bg-launchpad-purple h-full w-4/5"></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Pitch Completeness</span>
                      <span>80%</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <p className="text-xs text-gray-500">Mentor Feedback</p>
                        <p className="text-lg font-medium text-gray-800">12</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <p className="text-xs text-gray-500">Engagement Score</p>
                        <p className="text-lg font-medium text-gray-800">85%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
