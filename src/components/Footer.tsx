
import { Link } from "react-router-dom";
import { BookOpen, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-book-navy text-white pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6" />
              <span className="font-bold text-xl">BookWorm Swap Hub</span>
            </Link>
            <p className="text-book-cream opacity-80 mb-4">
              A platform for college students to share, swap, and donate textbooks within their campus community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-book-cream hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-book-cream hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-book-cream hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/browse" className="text-book-cream hover:text-white opacity-80 hover:opacity-100">
                  Browse Books
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-book-cream hover:text-white opacity-80 hover:opacity-100">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/list-book" className="text-book-cream hover:text-white opacity-80 hover:opacity-100">
                  List a Book
                </Link>
              </li>
              <li>
                <Link to="/campus-list" className="text-book-cream hover:text-white opacity-80 hover:opacity-100">
                  Campus Directory
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-book-cream hover:text-white opacity-80 hover:opacity-100">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-book-cream hover:text-white opacity-80 hover:opacity-100">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/guidelines" className="text-book-cream hover:text-white opacity-80 hover:opacity-100">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link to="/report" className="text-book-cream hover:text-white opacity-80 hover:opacity-100">
                  Report a Problem
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-book-cream hover:text-white opacity-80 hover:opacity-100">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-book-cream hover:text-white opacity-80 hover:opacity-100">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-book-cream hover:text-white opacity-80 hover:opacity-100">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-book-cream opacity-60">
            &copy; {new Date().getFullYear()} BookWorm Swap Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
