
import { Book, BookUser, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export interface BookCardProps {
  id: string;
  title: string;
  author: string;
  course: string;
  condition: "Like New" | "Good" | "Fair" | "Worn";
  campus: string;
  imageUrl: string;
  username: string;
  type: "Swap" | "Donate" | "Lend";
}

export const BookCard = ({
  title,
  author,
  course,
  condition,
  campus,
  imageUrl,
  username,
  type,
}: BookCardProps) => {
  const conditionColor = {
    "Like New": "bg-green-100 text-green-800",
    "Good": "bg-blue-100 text-blue-800",
    "Fair": "bg-yellow-100 text-yellow-800",
    "Worn": "bg-orange-100 text-orange-800",
  }[condition];

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
        <Badge
          className={`absolute top-2 right-2 ${
            type === "Swap" ? "bg-book-blue" : 
            type === "Donate" ? "bg-green-600" : 
            "bg-book-teal"
          }`}
        >
          {type}
        </Badge>
      </div>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <Badge variant="outline" className={conditionColor}>
            {condition}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">by {author}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-2">
        <div className="flex items-center">
          <Book className="w-4 h-4 mr-2 text-muted-foreground" />
          <span className="text-sm">{course}</span>
        </div>
        <div className="flex items-center">
          <BookUser className="w-4 h-4 mr-2 text-muted-foreground" />
          <span className="text-sm">Offered by {username}</span>
        </div>
        <div className="flex items-center">
          <Star className="w-4 h-4 mr-2 text-muted-foreground" />
          <span className="text-sm">{campus}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <Button className="w-full bg-book-blue hover:bg-book-navy">
          Request Book
        </Button>
      </CardFooter>
    </Card>
  );
};
