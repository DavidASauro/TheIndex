import CardGrid from "@/components/CardGrid";
import { Card } from "@/components/ui/card";

const Page = () => {
  return (
    <div className="w-full mx-auto flex flex-col gap-20 px-5">
      <div className="text-center mt-10 flex flex-col gap-5">
        <h1 className="text-8xl text-[#805428] font-fraunces font-semibold italic [text-shadow:3px_2px_3px_#3E2723] tracking-wide">
          The Pinboard
        </h1>
        <p className="text-2xl text-[#805428] font-nunito font-bold">
          A place where I can show all the fun things I made.
        </p>
      </div>
      <div className="mx-auto container rounded-lg relative">
        <Card
          className="p-0 min-h-screen"
          style={{
            backgroundColor: "#c8935a",
            backgroundImage: `
                        url("/cork-texture.jpg"),
                        radial-gradient(ellipse at 20% 30%, rgba(255,255,255,0.15), transparent 55%),
                        radial-gradient(ellipse at 80% 70%, rgba(0,0,0,0.2), transparent 55%)
                        `,
            backgroundSize: "auto, auto, auto",
            backgroundBlendMode: "multiply, normal, normal",
            boxShadow: `
                      inset 0 2px 8px rgba(0,0,0,0.4),
                      inset 0 -2px 6px rgba(255,255,255,0.15),
                      0 10px 40px rgba(0,0,0,0.6),
                      0 0 0 14px #5c3d1e,
                      0 0 0 18px #3a2510
                    `,
          }}
        >
          <CardGrid />
        </Card>
      </div>
    </div>
  );
};

export default Page;
