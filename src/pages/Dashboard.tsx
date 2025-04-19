import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardMetrics from "@/components/DashboardMetrics";
import FeedbackList from "@/components/FeedbackList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, MessageSquare, Users, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Plus, Edit } from "lucide-react";
import { getDashboardData } from "@/utils/storage";

const Dashboard = () => {
  const navigate = useNavigate();
  const pitchData = getDashboardData().pitchData;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Monitor your startup performance and engagement</p>
            </div>
            <Button
              onClick={() => navigate("/add-pitch")}
              className="flex items-center gap-2"
            >
              {pitchData ? (
                <>
                  <Edit className="h-4 w-4" />
                  Edit Pitch
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  Add Pitch
                </>
              )}
            </Button>
          </div>
          
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full md:w-auto grid-cols-4 md:inline-flex">
              <TabsTrigger value="overview" className="flex items-center space-x-2">
                <BarChart className="h-4 w-4" />
                <span className="hidden md:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="pitch" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span className="hidden md:inline">Pitch</span>
              </TabsTrigger>
              <TabsTrigger value="feedback" className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden md:inline">Feedback</span>
              </TabsTrigger>
              <TabsTrigger value="mentors" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span className="hidden md:inline">Mentors</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <DashboardMetrics />
              <FeedbackList />
            </TabsContent>
            
            <TabsContent value="pitch">
              <Card>
                <CardHeader>
                  <CardTitle>Pitch Performance</CardTitle>
                  <CardDescription>Detailed analytics of your pitch deck engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Pitch Details Coming Soon</h3>
                    <p className="text-gray-600">
                      We're currently developing detailed pitch analytics. Check back soon for more insights.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="feedback">
              <Card>
                <CardHeader>
                  <CardTitle>Feedback Analysis</CardTitle>
                  <CardDescription>Comprehensive analysis of mentor feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <FeedbackList />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="mentors">
              <Card>
                <CardHeader>
                  <CardTitle>Mentor Network</CardTitle>
                  <CardDescription>Connect with mentors and track interactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Mentor Network Coming Soon</h3>
                    <p className="text-gray-600">
                      We're currently developing the mentor network feature. Check back soon for more insights.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
