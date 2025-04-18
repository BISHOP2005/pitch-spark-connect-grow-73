
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, MessageSquare, ThumbsUp, TrendingUp } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useDashboardData } from "@/hooks/useDashboardData";

const MetricCard = ({ title, value, description, icon }: {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      <div className="p-2 bg-gray-100 rounded-md">{icon}</div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <CardDescription className="flex items-center mt-1">
        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

const DashboardMetrics = () => {
  const { getMetrics, getActivityData, getFeedbackData } = useDashboardData();
  const metrics = getMetrics();
  const activityData = getActivityData();
  const feedbackData = getFeedbackData();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Pitch Views"
          value={metrics.totalViews}
          description="from last month"
          icon={<Activity className="h-5 w-5 text-launchpad-blue" />}
        />
        <MetricCard
          title="Feedback Received"
          value={metrics.feedbackCount}
          description="from mentors"
          icon={<MessageSquare className="h-5 w-5 text-launchpad-indigo" />}
        />
        <MetricCard
          title="Engagement Score"
          value={`${metrics.engagementScore}%`}
          description="based on feedback"
          icon={<ThumbsUp className="h-5 w-5 text-launchpad-purple" />}
        />
        <MetricCard
          title="Active Mentors"
          value={metrics.activeMentors}
          description="providing feedback"
          icon={<Users className="h-5 w-5 text-launchpad-orange" />}
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

