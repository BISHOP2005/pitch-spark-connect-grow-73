
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeedbackList from "@/components/FeedbackList";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Heart, Share2, MessageCircle, Users, Calendar, Globe, Building, ChevronRight, Send } from "lucide-react";
import { Link } from "react-router-dom";

// Sample startup data
const startups = [
  {
    id: "1",
    name: "EcoTech Solutions",
    logo: "/placeholder.svg",
    description: "Revolutionizing renewable energy systems with AI-powered optimization for residential solar panels.",
    longDescription: "EcoTech Solutions is developing an innovative AI-powered platform that optimizes renewable energy systems for residential properties. Our technology uses machine learning algorithms to analyze energy usage patterns, weather data, and grid conditions to maximize the efficiency of solar panel systems. By optimizing energy generation, storage, and consumption, we help homeowners reduce their carbon footprint while saving money on their energy bills.",
    category: "CleanTech",
    foundedYear: "2023",
    location: "San Francisco, CA",
    teamSize: "8",
    website: "https://ecotechsolutions.example",
    pitchDeck: [
      {
        title: "Problem",
        content: "Traditional solar panel systems are inefficient, wasting up to 30% of potential energy generation. Homeowners struggle to maximize their renewable energy investment due to suboptimal system configuration and lack of real-time optimization."
      },
      {
        title: "Solution",
        content: "Our AI-powered platform continuously monitors and adjusts solar panel systems to maximize energy capture, storage utilization, and grid interaction, resulting in up to 40% improved efficiency."
      },
      {
        title: "Market",
        content: "The global residential solar market is projected to reach $184 billion by 2027, growing at 15% CAGR. Our initial target market of environmentally-conscious homeowners in the US represents a $42 billion opportunity."
      },
      {
        title: "Business Model",
        content: "We offer a SaaS subscription model at $15/month for basic optimization, with premium tiers for advanced features. We also receive revenue sharing from partner installation companies."
      },
      {
        title: "Traction",
        content: "We've completed a successful pilot with 50 homes, showing an average 27% improvement in energy efficiency. We have LOIs from 3 major solar installation companies and 200+ waitlisted customers."
      },
    ],
    feedbackCount: 24,
    engagementScore: 92,
    mentorCount: 5,
  },
];

const StartupDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("pitch");
  const [feedbackText, setFeedbackText] = useState("");
  
  // Find the startup by ID
  const startup = startups.find((s) => s.id === id);
  
  if (!startup) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Startup not found</h1>
            <p className="mb-6">The startup you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/startups">Browse All Startups</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/startups" className="inline-flex items-center text-launchpad-blue hover:text-launchpad-indigo mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Startups
            </Link>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-launchpad-blue to-launchpad-purple"></div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="h-16 w-16 rounded-md overflow-hidden flex items-center justify-center bg-gray-100 mr-4">
                      <img src={startup.logo} alt={startup.name} className="h-12 w-12 object-contain" />
                    </div>
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{startup.name}</h1>
                      <Badge variant="outline" className="text-sm font-medium bg-blue-50 text-blue-700 border-blue-200 mt-1">
                        {startup.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex mt-4 md:mt-0 md:ml-auto space-x-2">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button size="sm" className="bg-launchpad-purple hover:bg-launchpad-indigo text-white flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Give Feedback
                    </Button>
                  </div>
                </div>
                
                <p className="mt-4 text-gray-700">{startup.longDescription}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">Founded</span>
                    </div>
                    <p className="font-medium text-gray-800">{startup.foundedYear}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Building className="h-4 w-4 mr-1" />
                      <span className="text-sm">Location</span>
                    </div>
                    <p className="font-medium text-gray-800">{startup.location}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">Team Size</span>
                    </div>
                    <p className="font-medium text-gray-800">{startup.teamSize}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Globe className="h-4 w-4 mr-1" />
                      <span className="text-sm">Website</span>
                    </div>
                    <a 
                      href={startup.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-launchpad-blue hover:text-launchpad-indigo truncate block"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="w-full md:w-auto grid grid-cols-2 md:inline-flex">
              <TabsTrigger value="pitch">Pitch Deck</TabsTrigger>
              <TabsTrigger value="feedback">Feedback ({startup.feedbackCount})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="pitch">
              <div className="space-y-6">
                {startup.pitchDeck.map((slide, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-launchpad-blue to-launchpad-purple"></div>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <ChevronRight className="text-launchpad-purple h-5 w-5 mr-1" />
                        {slide.title}
                      </h3>
                      <p className="text-gray-700">{slide.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="feedback">
              <div className="space-y-6">
                <Card className="overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-launchpad-blue to-launchpad-purple"></div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Provide Your Feedback</h3>
                    <Textarea
                      placeholder="Share your thoughts, suggestions, or questions about this startup..."
                      className="min-h-[120px] mb-4"
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                    />
                    <div className="flex justify-end">
                      <Button className="bg-launchpad-indigo hover:bg-launchpad-purple text-white flex items-center">
                        Send Feedback <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <FeedbackList />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StartupDetail;
