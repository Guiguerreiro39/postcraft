import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Cta = () => {
  return (
    <section id="contact" className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Transform Your Content Strategy?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join our community of creators who use Postcraft to expand their
                reach and save hours of content creation time.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Start Now</Button>
              <Button size="lg" variant="outline">
                View our demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Easy payment system. Cancel anytime.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="CTA Image"
              width={500}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
