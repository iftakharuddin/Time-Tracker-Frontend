import api from "./axiosInstance";

// Create a new time entry
export const createTimeEntry = async (entry) => {
  try {
    // entry = { date: 'YYYY-MM-DD', hours: 8, projectId: 1 }
    const response = await api.post("/time-entries", entry);
    return response.data;
  } catch (error) {
    console.error("Error creating time entry:", error);
    throw error;
  }
};

// Get daily entries
export const getDailyEntries = async (date) => {
  try {
    const response = await api.get(`/time-entries/daily?date=${date}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching daily entries:", error);
    throw error;
  }
};

// Get weekly summary
export const getWeeklySummary = async (weekStart) => {
  try {
    const response = await api.get(`/time-entries/weekly?weekStart=${weekStart}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weekly summary:", error);
    throw error;
  }
};

// Get monthly summary
export const getMonthlySummary = async (year, month) => {
  try {
    const response = await api.get(`/time-entries/monthly?year=${year}&month=${month}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching monthly summary:", error);
    throw error;
  }
};
