import axiosInstance from "./axiosConfig";

export const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/login", { email, password });
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const register = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/register", { email, password });
    return response.data;
  } catch (error) {
    throw new Error("Registration failed");
  }
};
