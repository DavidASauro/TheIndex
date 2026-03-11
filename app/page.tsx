import CardGrid from "@/components/CardGrid";
import { Card } from "@/components/ui/card";

interface Thing {
  link: string;
  img: string;
  title: string;
  description: string;
}

const myThings: Thing[] = [
  {
    link: "https://BulkCube.Vercel.app",
    img: "/bulkcube-preview.png",
    title: "BulkCube",
    description: "Turn Your MTG Bulk into a cube!",
  },
  {
    link: "https://foooodie.pages.dev/",
    img: "/foooodie-preview.png",
    title: "Foodie",
    description: "Play a fun game to finally find a place to eat!",
  },
];

const page = () => {
  return (
    <div className="w-full mx-auto flex flex-col gap-30 px-5">
      <div className="text-center mt-10 flex flex-col gap-5">
        <h1 className="text-8xl text-[#805428] font-fraunces font-semibold italic [text-shadow:3px_2px_3px_#3E2723]">
          The Index
        </h1>
        <p className="text-2xl text-[#805428] font-nunito font-bold">
          A place where I can show all the fun things I made.
        </p>
      </div>
      <div className="container mx-auto ">
        <Card className="p-0 bg-[#E7DFC9]">
          <CardGrid things={myThings} />
        </Card>
      </div>
    </div>
  );
};

export default page;
