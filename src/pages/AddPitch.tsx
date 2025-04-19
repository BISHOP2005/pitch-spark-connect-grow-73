
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDashboardData, updateDashboardData } from "@/utils/storage";
import { useToast } from "@/hooks/use-toast";

const AddPitch = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const pitchData = getDashboardData().pitchData;
  
  const [formData, setFormData] = useState({
    category: pitchData?.category || "",
    categoryDescription: pitchData?.categoryDescription || "",
    foundedYear: pitchData?.foundedYear || "",
    location: pitchData?.location || "",
    logo: pitchData?.logo || "",
    longDescription: pitchData?.longDescription || "",
    mentorCount: pitchData?.mentorCount || "",
    startupName: pitchData?.startupName || "",
    problemStatement: pitchData?.problemStatement || "",
    solutionProposed: pitchData?.solutionProposed || "",
    marketValue: pitchData?.marketValue || "",
    businessModel: pitchData?.businessModel || "",
    traction: pitchData?.traction || "",
    websiteLink: pitchData?.websiteLink || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date().toISOString();
    
    updateDashboardData({
      pitchData: {
        ...formData,
        id: pitchData?.id || crypto.randomUUID(),
        createdAt: pitchData?.createdAt || now,
        updatedAt: now,
      },
    });

    toast({
      title: "Success",
      description: "Your pitch has been saved.",
    });
    
    navigate("/dashboard");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">
              {pitchData ? "Edit Your Pitch" : "Add New Pitch"}
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="startupName">Startup Name</Label>
                  <Input
                    id="startupName"
                    name="startupName"
                    value={formData.startupName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="foundedYear">Founded Year</Label>
                  <Input
                    id="foundedYear"
                    name="foundedYear"
                    value={formData.foundedYear}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="logo">Logo URL</Label>
                  <Input
                    id="logo"
                    name="logo"
                    value={formData.logo}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="websiteLink">Website Link</Label>
                  <Input
                    id="websiteLink"
                    name="websiteLink"
                    value={formData.websiteLink}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="categoryDescription">Category Description</Label>
                <Textarea
                  id="categoryDescription"
                  name="categoryDescription"
                  value={formData.categoryDescription}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="longDescription">Long Description</Label>
                <Textarea
                  id="longDescription"
                  name="longDescription"
                  value={formData.longDescription}
                  onChange={handleChange}
                  required
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="problemStatement">Problem Statement</Label>
                <Textarea
                  id="problemStatement"
                  name="problemStatement"
                  value={formData.problemStatement}
                  onChange={handleChange}
                  required
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="solutionProposed">Solution Proposed</Label>
                <Textarea
                  id="solutionProposed"
                  name="solutionProposed"
                  value={formData.solutionProposed}
                  onChange={handleChange}
                  required
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="marketValue">Market Value</Label>
                <Input
                  id="marketValue"
                  name="marketValue"
                  value={formData.marketValue}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessModel">Business Model</Label>
                <Textarea
                  id="businessModel"
                  name="businessModel"
                  value={formData.businessModel}
                  onChange={handleChange}
                  required
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="traction">Traction</Label>
                <Textarea
                  id="traction"
                  name="traction"
                  value={formData.traction}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/dashboard")}
                >
                  Cancel
                </Button>
                <Button type="submit">Save Pitch</Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddPitch;
