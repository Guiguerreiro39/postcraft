import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Cta = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Transform Your Workflow?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of teams that use StreamLine to collaborate
                better, work faster, and achieve more.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                Start Your Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required. 14-day free trial. Cancel anytime.
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
