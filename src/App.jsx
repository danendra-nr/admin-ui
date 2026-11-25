import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn.jsx"
import SignUpPage from "./pages/signUp.jsx"
import ErrorPage from "./pages/error.jsx";
import DashboardPage from "./pages/dashboard.jsx";
import { Link } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <SignInPage />
    },
    {
      path: "/register",
      element: <SignUpPage />
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;