// Import necessary libraries and components
import { Route } from "react-router-dom";
import Teacher from "@/pages/profile/Teacher";

// Define student-specific routes as an array
export const teacherRoutes = [
  <Route
    key="student-profile"
    path="/profile/teacher/"
    element={<Teacher />}
  />,

  // Add more student-specific routes here
];
