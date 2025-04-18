
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-book-paper">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 mb-2 text-sm font-medium rounded-full bg-book-highlight text-book-navy">
              For College Students, By College Students
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-book-navy">
              Share Books, Save Money, Help the Planet
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              Don't let valuable textbooks gather dust. Join our community to swap, donate, 
              or request books within your campus and save up to 80% on textbook costs.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-book-blue hover:bg-book-navy">
                List Your Books
              </Button>
              <Button size="lg" variant="outline" className="border-book-blue text-book-blue hover:text-book-navy hover:border-book-navy">
                Find Books
              </Button>
            </div>
          </div>
          <div className="relative lg:ml-10">
            <div className="relative h-[420px] overflow-hidden rounded-xl">
              <div className="absolute -right-10 top-10 h-[280px] w-[280px] rotate-6 rounded-2xl bg-white shadow-lg p-6 z-10 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop"
                  alt="Stack of books"
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
              <div className="absolute -left-5 top-0 h-[220px] w-[220px] -rotate-6 rounded-2xl bg-white shadow-lg p-5 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop"
                  alt="Books on a shelf"
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
              <div className="absolute bottom-0 left-0 h-[240px] w-[240px] rotate-3 rounded-2xl bg-white shadow-lg p-5 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop"
                  alt="Student studying"
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-book-paper/50 pointer-events-none" />
    </section>
  );
};
