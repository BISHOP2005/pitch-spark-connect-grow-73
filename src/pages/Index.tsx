
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedStartups from "@/components/FeaturedStartups";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Users, MessageSquare, LineChart } from "lucide-react";

// Feature item component
const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="hover-card-effect">
    <CardContent className="pt-6">
      <div className="p-3 bg-blue-50 rounded-xl inline-flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <FeaturedStartups />
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Powerful Features for Startup Success</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Everything you need to showcase your startup, collect feedback, and track engagement metrics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureItem
                icon={<LineChart size={24} className="text-launchpad-blue" />}
                title="Pitch Showcase"
                description="Create beautiful pitch decks and share them with mentors and investors easily."
              />
              <FeatureItem
                icon={<Users size={24} className="text-launchpad-purple" />}
                title="Mentor Network"
                description="Connect with experienced mentors across various industries for valuable feedback."
              />
              <FeatureItem
                icon={<MessageSquare size={24} className="text-launchpad-indigo" />}
                title="Feedback System"
                description="Collect structured feedback to improve your startup pitch and business model."
              />
              <FeatureItem
                icon={<BarChart size={24} className="text-launchpad-orange" />}
                title="Analytics Dashboard"
                description="Track engagement metrics and monitor your startup's progress over time."
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-launchpad-blue to-launchpad-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Startup?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join LaunchPad today and take your startup to the next level with powerful tools and expert mentorship.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-white text-launchpad-purple hover:bg-gray-100">
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
