
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StartupCard from "@/components/StartupCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

// Sample startup data
const allStartups = [
  {
    id: "1",
    name: "EcoTech Solutions",
    logo: "/placeholder.svg",
    description: "Revolutionizing renewable energy systems with AI-powered optimization for residential solar panels.",
    category: "CleanTech",
    feedbackCount: 24,
    engagementScore: 92,
    mentorCount: 5,
  },
  {
    id: "2",
    name: "MediConnect",
    logo: "/placeholder.svg",
    description: "Secure medical records platform connecting patients, doctors and healthcare providers using blockchain technology.",
    category: "HealthTech",
    feedbackCount: 18,
    engagementScore: 85,
    mentorCount: 3,
  },
  {
    id: "3",
    name: "FinanceAI",
    logo: "/placeholder.svg",
    description: "AI-driven personal finance assistant that helps users budget, save, and invest more effectively.",
    category: "FinTech",
    feedbackCount: 15,
    engagementScore: 78,
    mentorCount: 4,
  },
  {
    id: "4",
    name: "EduLearn",
    logo: "/placeholder.svg",
    description: "Personalized learning platform for K-12 students using adaptive AI to match learning styles and needs.",
    category: "EdTech",
    feedbackCount: 12,
    engagementScore: 80,
    mentorCount: 2,
  },
  {
    id: "5",
    name: "FoodConnect",
    logo: "/placeholder.svg",
    description: "Farm-to-table marketplace connecting local farmers directly with restaurants and consumers.",
    category: "FoodTech",
    feedbackCount: 8,
    engagementScore: 72,
    mentorCount: 3,
  },
  {
    id: "6",
    name: "SmartRetail",
    logo: "/placeholder.svg",
    description: "AI-powered inventory management system that predicts stock needs and reduces waste for retailers.",
    category: "RetailTech",
    feedbackCount: 10,
    engagementScore: 75,
    mentorCount: 4,
  },
];

const categories = ["All Categories", "CleanTech", "HealthTech", "FinTech", "EdTech", "FoodTech", "RetailTech"];

const Startups = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  
  // Filter startups based on search term and category
  const filteredStartups = allStartups.filter((startup) => {
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         startup.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || startup.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Explore Startups</h1>
            <p className="text-gray-600">Discover innovative startups looking for feedback and mentorship</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Search startups..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full md:w-64">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <div className="flex items-center">
                      <Filter className="mr-2 h-4 w-4 text-gray-400" />
                      <SelectValue placeholder="Select category" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Categories");
                }}
                variant="outline"
                className="md:w-auto"
              >
                Reset
              </Button>
            </div>
          </div>
          
          {filteredStartups.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStartups.map((startup) => (
                <StartupCard key={startup.id} {...startup} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No startups found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Startups;
