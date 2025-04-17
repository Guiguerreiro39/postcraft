import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiX,
} from "@icons-pack/react-simple-icons";
import { CreditCard, Layers, LifeBuoy, Linkedin } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Layers className="h-6 w-6 text-rose-500" />
              <span className="text-xl font-bold">StreamLine</span>
            </div>
            <p className="mt-2 text-muted-foreground">
              Streamline your workflow, amplify your productivity. The
              all-in-one platform for modern teams.
            </p>
            <div className="mt-4 flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-rose-500"
              >
                <SiX className="h-5 w-5" />
                <span className="sr-only">X</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-rose-500"
              >
                <SiFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-rose-500"
              >
                <SiInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-rose-500"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-rose-500"
              >
                <SiGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Product</h3>
            <nav className="mt-4 flex flex-col gap-2">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-rose-500"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-rose-500"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-rose-500"
              >
                Integrations
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-rose-500"
              >
                Changelog
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-rose-500"
              >
                Roadmap
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium">Resources</h3>
            <nav className="mt-4 flex flex-col gap-2">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-rose-500"
              >
                Documentation
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-rose-500"
              >
                Guides
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-rose-500"
              >
                API Reference
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-rose-500"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-rose-500"
              >
                Community
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <nav className="mt-4 flex flex-col gap-2">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-rose-500"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-rose-500"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-rose-500"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-rose-500"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-rose-500"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StreamLine. All rights reserved.
          </p>
          <div className="mt-4 flex items-center gap-4 md:mt-0">
            <LifeBuoy className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">24/7 Support</span>
            <CreditCard className="ml-4 h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Secure Payments
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
