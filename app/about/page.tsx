import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 nd:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
        <Link href="/">
          <Button
            variant="ghost"
            className="hover:bg-black hover:text-white rounded-full duration-300 mb-5 cursor-pointer"
          >
            {" "}
            Back <BsArrowLeft className="ml-2"></BsArrowLeft>
          </Button>
        </Link>
        <div className="space-y-6">
          <h1 className="text-4xl bg-clip-text font-bold text-transparentt bg-gradient-to-r from-emerald-400 via-sky-300 to blue-500">
            About Me
          </h1>

          <div className="space-y-4 text-neutral-200 text-pretty tracking-tight">
            <p>
              My name is Excel. I am passionate Web Developer that loves
              bringing ideas to life.{" "}
            </p>
            <p>
              {" "}
              I specialise in building responsive, accessible and performant web
              applications that not only look great but function even better{" "}
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to blue-500">
              Education
            </h2>
            <div className="space-y-2">
              <p className="font-medium">
                Bachelor of Engineering in Computer Engineering
              </p>
              <p className="text-neutral-500">
                {" "}
                Odessa National Polytechnic University, 2023
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to blue-500">
              Professional Experience
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Senior Web Developer</p>
                <p className="text-neutral-500">Company 1, 2022-2024</p>
              </div>
              <div>
                <p className="font-medium">Senior Web Developer</p>
                <p className="text-neutral-500">Company 2, 2024-2025</p>
              </div>
              <div>
                <p className="font-medium">Senior Web Developer</p>
                <p className="text-neutral-500">Company 3, 2025-present</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
