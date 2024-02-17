import axios from "axios";

export const auth = async (
  authFor: string,
  email: string,
  password: string,
  userType: string
) => {
  if (authFor === "login") return await login(email, password);
  else if (authFor === "signup")
    return await register(email, password, userType);
};

export const login = async (email:string, password: string) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
      {
        username: email,
        password,
      }
    );
    // Store the token in local storage
    localStorage.setItem("accessToken", response.data.backendTokens.accessToken);
    localStorage.setItem("refreshToken", response.data.backendTokens.refreshToken);
    localStorage.setItem("expiresIn", response.data.backendTokens.expiresIn);
    localStorage.setItem("userType",response.data.user.role)
    localStorage.setItem("isAuthenticated", "true");

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Check if the error is due to unauthorized access
      if (error.response && error.response.status === 401) {
        throw new Error("Unauthorized: Email or password is incorrect.");
      }
    }
    // For other types of errors, you can throw them or handle them as you see fit
    throw error;
  }
};

export const register = async (
  email: string,
  password: string,
  userType: string
) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/auth/register`,
      {
        email,
        password,
        role:userType,
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Check if the error is due to unauthorized access
      if (error.response && error.response.status === 409) {
        throw new Error("Email already exists. Try to login");
      }
    }
    // For other types of errors, you can throw them or handle them as you see fit
    throw error;
  }
};
