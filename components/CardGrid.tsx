import Link from "next/link";
import { Card, CardHeader, CardFooter } from "./ui/card";
import Image from "next/image";

interface Thing {
  link: string;
  img: string;
  title: string;
  description: string;
}
interface CardGridProps {
  things: Thing[];
}

const CardGrid = ({ things }: CardGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-30">
      {things.map((thing) => (
        <Link
          href={thing.link}
          key={thing.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            className="relative p-0 gap-0 border-0 overflow-hidden shadow-md shadow-[#7A5C3E] 
          flex flex-col h-full transition duration-100 transform hover:-translate-y-2 hover:shadow-xl hover:z-50"
          >
            <CardHeader className="p-0 relative w-full h-60">
              <Image
                src={thing.img}
                alt={thing.link + " preview"}
                fill
                className="object-fill"
              />
            </CardHeader>
            <CardFooter className="flex justify-center items-center bg-[#805428] flex-1 p-4 border-0">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-[#F5F1E8] text-xl font-nunito font-bold">
                  {thing.title}
                </h3>
                <p className="text-lg text-[#f5f1e8d0] line-clamp-2 font-nunito italic">
                  {thing.description}
                </p>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CardGrid;
