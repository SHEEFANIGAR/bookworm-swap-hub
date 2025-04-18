
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, User } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-book-blue" />
          <span className="font-bold text-xl text-book-navy">BookWorm Swap Hub</span>
        </Link>
        
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search for books, courses..." 
              className="w-full pl-10 bg-book-paper" 
            />
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Browse</Button>
          <Button variant="ghost">How It Works</Button>
          <Button variant="ghost">Campus List</Button>
          <Button variant="outline" className="gap-2">
            <User size={18} />
            Sign In
          </Button>
          <Button>Join Now</Button>
        </div>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </Button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="flex items-center p-4 border-t">
          <div className="relative w-full">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search for books, courses..." 
              className="w-full pl-10" 
            />
          </div>
        </div>
        <nav className="flex flex-col p-4 space-y-2 border-t">
          <Link to="/browse" className="px-4 py-2 rounded-md hover:bg-muted">Browse</Link>
          <Link to="/how-it-works" className="px-4 py-2 rounded-md hover:bg-muted">How It Works</Link>
          <Link to="/campus-list" className="px-4 py-2 rounded-md hover:bg-muted">Campus List</Link>
          <Link to="/sign-in" className="px-4 py-2 rounded-md hover:bg-muted">Sign In</Link>
          <Link to="/join" className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-center">Join Now</Link>
        </nav>
      </div>
    </header>
  );
};
