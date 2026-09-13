import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900 shadow-md rounded-3xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          MyPortfolio
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/projects"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>

          <Link
            to="/admin/login"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
