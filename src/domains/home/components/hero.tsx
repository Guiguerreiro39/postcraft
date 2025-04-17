import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Streamline Your Workflow, Amplify Your Productivity
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                The all-in-one platform that helps teams collaborate, manage
                projects, and deliver results faster than ever before.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                Start Free Trial
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex -space-x-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-background"
                />
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-background"
                />
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-background"
                />
              </div>
              <div className="text-muted-foreground">
                Trusted by <span className="font-medium">2,000+</span> teams
                worldwide
              </div>
            </div>
          </div>
          <Image
            src="/placeholder.svg?height=550&width=550"
            alt="Hero"
            width={550}
            height={550}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
};
