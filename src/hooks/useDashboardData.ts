
interface FeedbackItem {
  id: string;
  mentorName: string;
  mentorRole: string;
  date: string;
  message: string;
  type: "positive" | "negative" | "neutral";
}

export const useDashboardData = () => {
  const getFeedback = (): FeedbackItem[] => {
    try {
      return JSON.parse(localStorage.getItem('feedback') || '[]');
    } catch {
      return [];
    }
  };

  const getMetrics = () => {
    const feedback = getFeedback();
    const today = new Date();
    const lastMonth = new Date(today.setMonth(today.getMonth() - 1));
    
    const recentFeedback = feedback.filter(item => new Date(item.date) > lastMonth);
    
    return {
      totalViews: localStorage.getItem('pitchViews') || '0',
      feedbackCount: feedback.length.toString(),
      engagementScore: calculateEngagementScore(feedback),
      activeMentors: getUniqueMentorCount(feedback)
    };
  };

  const getActivityData = () => {
    const feedback = getFeedback();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    return days.map(day => ({
      name: day,
      value: feedback.filter(item => 
        new Date(item.date).toLocaleDateString('en-US', { weekday: 'short' }) === day
      ).length * 100
    }));
  };

  const getFeedbackData = () => {
    const feedback = getFeedback();
    const weeks = Array.from({ length: 4 }, (_, i) => `Week ${i + 1}`);
    
    return weeks.map(week => ({
      name: week,
      positive: feedback.filter(item => item.type === 'positive').length,
      negative: feedback.filter(item => item.type === 'negative').length,
      neutral: feedback.filter(item => item.type === 'neutral').length
    }));
  };

  const calculateEngagementScore = (feedback: FeedbackItem[]) => {
    if (feedback.length === 0) return '0';
    const positiveCount = feedback.filter(item => item.type === 'positive').length;
    return Math.round((positiveCount / feedback.length) * 100).toString();
  };

  const getUniqueMentorCount = (feedback: FeedbackItem[]) => {
    return new Set(feedback.map(item => item.mentorName)).size.toString();
  };

  return {
    getFeedback,
    getMetrics,
    getActivityData,
    getFeedbackData
  };
};

