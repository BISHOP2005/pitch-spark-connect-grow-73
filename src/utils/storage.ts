
interface DashboardData {
  pitchViews: number;
  feedbackCount: number;
  engagementScore: number;
  activeMentors: number;
  pitchData: {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  } | null;
}

export const getDashboardData = (): DashboardData => {
  const data = localStorage.getItem('dashboardData');
  if (!data) {
    const initialData: DashboardData = {
      pitchViews: 0,
      feedbackCount: 0,
      engagementScore: 0,
      activeMentors: 0,
      pitchData: null,
    };
    localStorage.setItem('dashboardData', JSON.stringify(initialData));
    return initialData;
  }
  return JSON.parse(data);
};

export const updateDashboardData = (data: Partial<DashboardData>) => {
  const currentData = getDashboardData();
  const updatedData = { ...currentData, ...data };
  localStorage.setItem('dashboardData', JSON.stringify(updatedData));
  return updatedData;
};
