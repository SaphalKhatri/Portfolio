import { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Footer from "./components/Footor";

import Navbar from "./components/Navbar";

function App() {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  const handleNavbarScrollChange = useCallback(
    (scrolled: boolean) => {
      setIsNavbarScrolled(scrolled);
    },
    []
  );

  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 flex flex-col">


        {/* Navbar */}
        <Navbar
          onScrolledChange={handleNavbarScrollChange}
        />

        {/* Main content */}
        <main
          className={`
            flex-1
            transition-all
            duration-500
            ease-in-out

            ${
              isNavbarScrolled
                ? "lg:pl-72"
                : "pl-0"
            }
          `}
        >
          <Routes>

            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/projects"
              element={<ProjectPage />}
            />

            <Route
              path="/contact"
              element={<ContactPage />}
            />

            <Route
              path="/admin/login"
              element={<LoginPage />}
            />

            <Route
              path="/admin/dashboard"
              element={<DashboardPage />}
            />

          </Routes>
        </main>

        {/* Footer */}
        <div
          className={`
            transition-all
            duration-500

            ${
              isNavbarScrolled
                ? "lg:pl-72"
                : "pl-0"
            }
          `}
        >
          <Footer />
        </div>

      </div>
    </Router>
  );
}

export default App;
