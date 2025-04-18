
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-book-paper">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <BookOpen className="w-16 h-16 text-book-blue mb-6" />
        <h1 className="text-6xl md:text-7xl font-bold text-book-navy mb-4">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Oops! This page is missing from our collection
        </p>
        <p className="max-w-md text-center text-muted-foreground mb-8">
          The page you're looking for hasn't been listed in our book swap platform yet. 
          Let's get you back to browsing available books.
        </p>
        <Button asChild size="lg">
          <Link to="/">
            Return to Homepage
          </Link>
        </Button>
      </div>
      <div className="py-6 text-center bg-white border-t">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} BookWorm Swap Hub. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
