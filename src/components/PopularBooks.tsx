
import { BookCard, BookCardProps } from "./BookCard";

export const PopularBooks = () => {
  const popularBooks: BookCardProps[] = [
    {
      id: "1",
      title: "Introduction to Computer Science",
      author: "John Smith",
      course: "CS 101",
      condition: "Like New",
      campus: "MIT",
      imageUrl: "https://images.unsplash.com/photo-1517842264405-72bb906a1936?w=500&auto=format&fit=crop",
      username: "techgeek2023",
      type: "Swap"
    },
    {
      id: "2",
      title: "Principles of Economics",
      author: "N. Gregory Mankiw",
      course: "ECON 201",
      condition: "Good",
      campus: "Harvard University",
      imageUrl: "https://images.unsplash.com/photo-1554494583-c4e1649bfe71?w=500&auto=format&fit=crop",
      username: "econostudent",
      type: "Donate"
    },
    {
      id: "3",
      title: "Organic Chemistry",
      author: "Paula Y. Bruice",
      course: "CHEM 302",
      condition: "Fair",
      campus: "Stanford University",
      imageUrl: "https://images.unsplash.com/photo-1532153470338-be02d126fd4d?w=500&auto=format&fit=crop",
      username: "chemwhiz",
      type: "Lend"
    },
    {
      id: "4",
      title: "Calculus: Early Transcendentals",
      author: "James Stewart",
      course: "MATH 151",
      condition: "Good",
      campus: "Princeton University",
      imageUrl: "https://images.unsplash.com/photo-1576431195567-3f7c4344bede?w=500&auto=format&fit=crop",
      username: "mathgenius",
      type: "Swap"
    },
  ];

  return (
    <section className="py-16 bg-book-paper">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-book-navy">Recently Added Books</h2>
            <p className="text-muted-foreground">Find the latest additions to our book sharing community.</p>
          </div>
          <button className="text-book-blue hover:text-book-navy font-medium flex items-center gap-1">
            View All 
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
              className="w-4 h-4"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};
