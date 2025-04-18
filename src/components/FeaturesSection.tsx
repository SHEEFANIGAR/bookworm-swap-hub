
import { BookOpen, Filter, MapPin, MessageSquare, Repeat, Shield, UserCheck } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-book-teal" />,
      title: "Book Sharing Made Simple",
      description: "Easily list and discover textbooks from students at your campus."
    },
    {
      icon: <Repeat className="h-10 w-10 text-book-blue" />,
      title: "Swap, Donate or Lend",
      description: "Choose how you want to share your books with other students."
    },
    {
      icon: <UserCheck className="h-10 w-10 text-book-teal" />,
      title: "Verified Student Network",
      description: "Connect with trusted peers from your own institution."
    },
    {
      icon: <MapPin className="h-10 w-10 text-book-blue" />,
      title: "Campus-Specific Communities",
      description: "Find books relevant to your specific courses and professors."
    },
    {
      icon: <Filter className="h-10 w-10 text-book-teal" />,
      title: "Smart Search Filters",
      description: "Find exactly what you need by course, professor, or book condition."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-book-blue" />,
      title: "Secure Messaging",
      description: "Communicate safely with other students to arrange exchanges."
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-book-navy">
            How BookWorm Swap Hub Works
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            Our platform makes it easy to find, share, and request textbooks within your college community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-book-paper hover:shadow-md transition-all"
            >
              <div className="mb-4 rounded-full bg-book-cream p-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-book-navy">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-6 bg-book-cream rounded-xl mb-8">
            <Shield className="h-12 w-12 text-book-blue mr-4" />
            <div className="text-left">
              <h3 className="text-xl font-bold text-book-navy">Safe & Trusted Community</h3>
              <p className="text-gray-600">Our platform is exclusively for verified college students.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
