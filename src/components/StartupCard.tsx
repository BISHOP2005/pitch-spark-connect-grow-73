
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MessageSquare, ThumbsUp, Users, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface StartupCardProps {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  feedbackCount: number;
  engagementScore: number;
  mentorCount: number;
}

const StartupCard = ({
  id,
  name,
  logo,
  description,
  category,
  feedbackCount,
  engagementScore,
  mentorCount,
}: StartupCardProps) => {
  return (
    <Card className="hover-card-effect overflow-hidden">
      <CardHeader className="p-0">
        <div className="h-3 bg-gradient-to-r from-launchpad-blue to-launchpad-purple"></div>
        <div className="p-6 flex items-center space-x-4">
          <div className="h-12 w-12 rounded-md overflow-hidden flex items-center justify-center bg-gray-100">
            <img src={logo} alt={name} className="h-10 w-10 object-contain" />
          </div>
          <div>
            <h3 className="font-semibold text-xl text-gray-800">{name}</h3>
            <Badge variant="outline" className="text-xs font-medium bg-blue-50 text-blue-700 border-blue-200">
              {category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 line-clamp-3 min-h-[4.5rem]">{description}</p>
        
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
            <div className="flex items-center text-gray-600">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span className="text-sm">Feedback</span>
            </div>
            <span className="font-medium text-gray-800">{feedbackCount}</span>
          </div>
          
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
            <div className="flex items-center text-gray-600">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span className="text-sm">Score</span>
            </div>
            <span className="font-medium text-gray-800">{engagementScore}%</span>
          </div>
          
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
            <div className="flex items-center text-gray-600">
              <Users className="h-4 w-4 mr-1" />
              <span className="text-sm">Mentors</span>
            </div>
            <span className="font-medium text-gray-800">{mentorCount}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button asChild className="w-full bg-launchpad-indigo hover:bg-launchpad-purple text-white">
          <Link to={`/startup/${id}`} className="flex items-center justify-center">
            View Pitch <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StartupCard;
