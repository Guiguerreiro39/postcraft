import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Code, Compass, Zap } from "lucide-react";

export const Features = () => {
  return (
    <section id="features" className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Everything You Need in One Place
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              StreamLine combines powerful features with an intuitive interface
              to help your team work smarter, not harder.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="p-4">
              <Clock className="h-10 w-10 text-rose-500" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <CardTitle className="text-xl">Time Tracking</CardTitle>
              <CardDescription className="mt-2">
                Effortlessly track time spent on tasks and projects to improve
                productivity and billing accuracy.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-4">
              <Compass className="h-10 w-10 text-rose-500" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <CardTitle className="text-xl">Project Management</CardTitle>
              <CardDescription className="mt-2">
                Plan, track, and manage projects with intuitive boards, lists,
                and timelines.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-4">
              <Code className="h-10 w-10 text-rose-500" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <CardTitle className="text-xl">Developer Tools</CardTitle>
              <CardDescription className="mt-2">
                Integrate with your favorite development tools for seamless
                workflow automation.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-4">
              <Zap className="h-10 w-10 text-rose-500" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <CardTitle className="text-xl">AI Assistance</CardTitle>
              <CardDescription className="mt-2">
                Leverage AI to automate routine tasks and get intelligent
                insights about your work.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
