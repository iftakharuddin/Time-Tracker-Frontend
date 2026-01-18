import api from "./axiosInstance";

// Fetch all projects
export const getProjects = async () => {
  try {
    const response = await api.get("/projects");
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

// Create a new project
export const createProject = async (projectName) => {
  try {
    const response = await api.post("/projects", { name: projectName });
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};
