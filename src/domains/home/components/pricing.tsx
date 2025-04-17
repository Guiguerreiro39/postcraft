import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Choose the plan that&apos;s right for your team. All plans include
              a 14-day free trial.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Starter</CardTitle>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">$12</span>
                <span className="text-muted-foreground">/month per user</span>
              </div>
              <CardDescription>
                Perfect for small teams just getting started.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Up to 5 team members</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Basic project management</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Time tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>5GB storage</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-rose-500 hover:bg-rose-600">
                Start Free Trial
              </Button>
            </CardFooter>
          </Card>
          <Card className="border-2 border-rose-500">
            <CardHeader>
              <div className="mb-2 inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                Most Popular
              </div>
              <CardTitle className="text-2xl">Professional</CardTitle>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">$24</span>
                <span className="text-muted-foreground">/month per user</span>
              </div>
              <CardDescription>
                Ideal for growing teams that need more power.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Unlimited team members</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Advanced project management</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Time tracking & reporting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>50GB storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Developer integrations</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-rose-500 hover:bg-rose-600">
                Start Free Trial
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">$49</span>
                <span className="text-muted-foreground">/month per user</span>
              </div>
              <CardDescription>
                For large organizations with complex needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Advanced security & compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Unlimited storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Custom integrations</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-rose-500 hover:bg-rose-600">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
