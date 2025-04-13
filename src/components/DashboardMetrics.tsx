
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, MessageSquare, ThumbsUp, TrendingUp, TrendingDown } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Sample data for charts
const activityData = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 500 },
  { name: "Thu", value: 280 },
  { name: "Fri", value: 590 },
  { name: "Sat", value: 350 },
  { name: "Sun", value: 400 },
];

const feedbackData = [
  { name: "Week 1", positive: 25, negative: 5, neutral: 10 },
  { name: "Week 2", positive: 30, negative: 8, neutral: 12 },
  { name: "Week 3", positive: 35, negative: 6, neutral: 10 },
  { name: "Week 4", positive: 40, negative: 4, neutral: 8 },
];

interface MetricCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

const MetricCard = ({ title, value, description, icon, trend, trendValue }: MetricCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      <div className="p-2 bg-gray-100 rounded-md">{icon}</div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <CardDescription className="flex items-center mt-1">
        {trend === "up" && <TrendingUp className="h-4 w-4 text-green-500 mr-1" />}
        {trend === "down" && <TrendingDown className="h-4 w-4 text-red-500 mr-1" />}
        {trend === "up" && <span className="text-green-500 mr-1">{trendValue}</span>}
        {trend === "down" && <span className="text-red-500 mr-1">{trendValue}</span>}
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

const DashboardMetrics = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Pitch Views"
          value="1,248"
          description="from last month"
          icon={<Activity className="h-5 w-5 text-launchpad-blue" />}
          trend="up"
          trendValue="+12.5%"
        />
        <MetricCard
          title="Feedback Received"
          value="36"
          description="from 12 mentors"
          icon={<MessageSquare className="h-5 w-5 text-launchpad-indigo" />}
          trend="up"
          trendValue="+8.3%"
        />
        <MetricCard
          title="Engagement Score"
          value="85%"
          description="based on 320 interactions"
          icon={<ThumbsUp className="h-5 w-5 text-launchpad-purple" />}
          trend="up"
          trendValue="+5.2%"
        />
        <MetricCard
          title="Active Mentors"
          value="8"
          description="across 5 industries"
          icon={<Users className="h-5 w-5 text-launchpad-orange" />}
          trend="neutral"
          trendValue=""
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pitch Activity</CardTitle>
            <CardDescription>Daily views and engagement with your pitch</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8b5cf6" 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feedback Overview</CardTitle>
            <CardDescription>Breakdown of feedback by sentiment over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={feedbackData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="positive" stackId="a" fill="#4ade80" />
                  <Bar dataKey="neutral" stackId="a" fill="#94a3b8" />
                  <Bar dataKey="negative" stackId="a" fill="#f87171" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardMetrics;
