
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import StartupCard from "./StartupCard";

// Sample startup data
const startups = [
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
];

const FeaturedStartups = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Startups</h2>
            <p className="text-gray-600 mt-2">Discover innovative startups looking for feedback and mentorship</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/startups" className="flex items-center">
              View All Startups <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup) => (
            <StartupCard key={startup.id} {...startup} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStartups;
