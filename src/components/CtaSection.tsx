
import { Button } from "@/components/ui/button";

export const CtaSection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-book-navy to-book-blue opacity-90" />
      <div className="container relative z-10 px-4 md:px-6 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Ready to Start Sharing Books?
          </h2>
          <p className="mb-10 text-lg md:text-xl opacity-90">
            Join thousands of students already saving money while helping the environment.
            List your first book in under 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-book-navy hover:bg-book-cream">
              Join Now - It's Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
