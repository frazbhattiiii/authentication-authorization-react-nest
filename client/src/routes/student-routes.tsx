// Import necessary libraries and components
import { Route } from "react-router-dom";
import Student from "@/pages/profile/Student";

// Define student-specific routes as an array
export const studentRoutes = [
  <Route
    key="student-profile"
    path="/profile/student/"
    element={<Student />}
  />,
  // Add more student-specific routes here
];
