
import { BookOpen, Repeat, Users } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      value: "5,000+",
      label: "Books Shared",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "2,500+",
      label: "Active Students",
    },
    {
      icon: <Repeat className="h-8 w-8" />,
      value: "85%",
      label: "Cost Savings",
    },
  ];

  return (
    <section className="py-12 bg-book-blue text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 bg-white/10 p-3 rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-1">{stat.value}</h3>
              <p className="text-book-cream opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
