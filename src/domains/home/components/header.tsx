import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-rose-500" />
          <span className="text-xl font-bold">StreamLine</span>
        </div>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium transition-colors hover:text-rose-500"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium transition-colors hover:text-rose-500"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium transition-colors hover:text-rose-500"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-rose-500"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Log in
          </Link>
          <Button className="bg-rose-500 hover:bg-rose-600">Get Started</Button>
        </div>
      </div>
    </header>
  );
};
