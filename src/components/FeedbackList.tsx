
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, ThumbsDown, MessageCircle, Calendar } from "lucide-react";

interface FeedbackItemProps {
  id: string;
  mentorName: string;
  mentorAvatar: string;
  mentorRole: string;
  date: string;
  message: string;
  type: "positive" | "negative" | "neutral";
}

const feedbackItems: FeedbackItemProps[] = [
  {
    id: "1",
    mentorName: "Sarah Johnson",
    mentorAvatar: "",
    mentorRole: "Product Strategy",
    date: "April 10, 2025",
    message: "Your value proposition is clear and compelling. I especially like how you've identified the specific pain points in the market. Consider expanding on how your solution is different from existing alternatives.",
    type: "positive",
  },
  {
    id: "2",
    mentorName: "Michael Chen",
    mentorAvatar: "",
    mentorRole: "Venture Capital",
    date: "April 8, 2025",
    message: "The financial projections need more work. I'm not convinced by the revenue assumptions, and the customer acquisition costs seem too optimistic. Let's discuss this in our next meeting.",
    type: "negative",
  },
  {
    id: "3",
    mentorName: "Alex Rivera",
    mentorAvatar: "",
    mentorRole: "Marketing",
    date: "April 5, 2025",
    message: "Your go-to-market strategy has potential, but you need to define your target audience more clearly. The competitive analysis is good, though I'd like to see more about your positioning.",
    type: "neutral",
  },
];

const FeedbackTypeIcon = ({ type }: { type: "positive" | "negative" | "neutral" }) => {
  if (type === "positive") {
    return <ThumbsUp className="h-4 w-4 text-green-500" />;
  } else if (type === "negative") {
    return <ThumbsDown className="h-4 w-4 text-red-500" />;
  } else {
    return <MessageCircle className="h-4 w-4 text-blue-500" />;
  }
};

const FeedbackTypeBadge = ({ type }: { type: "positive" | "negative" | "neutral" }) => {
  if (type === "positive") {
    return (
      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
        Positive
      </Badge>
    );
  } else if (type === "negative") {
    return (
      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
        Needs Improvement
      </Badge>
    );
  } else {
    return (
      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
        Neutral
      </Badge>
    );
  }
};

const FeedbackList = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Recent Feedback</h2>
          <p className="text-gray-500">Insights and suggestions from your mentors</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {feedbackItems.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src={item.mentorAvatar} />
                    <AvatarFallback className="bg-launchpad-indigo text-white">
                      {item.mentorName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-semibold">{item.mentorName}</CardTitle>
                    <CardDescription>{item.mentorRole}</CardDescription>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <FeedbackTypeBadge type={item.type} />
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {item.date}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{item.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
