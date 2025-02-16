import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Section 1 - Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold">MyWebsite</h2>
            <p className="mt-2 text-sm text-gray-200">
              Building the future, one step at a time.
            </p>
          </div>

          {/* Section 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/write" className="hover:underline">Write</Link></li>
            </ul>
          </div>

          {/* Section 3 - Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start mt-2 space-x-4">
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-200 mt-6 border-t border-gray-400 pt-4">
          <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
