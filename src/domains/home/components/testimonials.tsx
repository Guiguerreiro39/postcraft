import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Loved by Teams Worldwide
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Don&apos;t just take our word for it. Here&apos;s what our
              customers have to say about StreamLine.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <Card className="border-2 border-rose-100">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                  <CardDescription>Product Manager, TechCorp</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                &quot;StreamLine has transformed how our team collaborates.
                We&apos;ve reduced meeting time by 30% and increased project
                delivery speed.&quot;
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-rose-100">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <CardTitle className="text-lg">David Chen</CardTitle>
                  <CardDescription>CTO, StartupX</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                &quot;The developer integrations are game-changing. Our
                engineering team is more productive than ever, and onboarding
                new team members is a breeze.&quot;
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-rose-100">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <CardTitle className="text-lg">Maria Rodriguez</CardTitle>
                  <CardDescription>
                    Marketing Director, GrowthCo
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                &quot;The analytics and reporting features have given us
                insights we never had before. We&apos;ve optimized our campaigns
                and increased ROI by 25%.&quot;
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
