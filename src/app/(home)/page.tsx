import { Header } from "@/domains/home/components/header";
import { Hero } from "@/domains/home/components/hero";
import { Features } from "@/domains/home/components/features";
import { Testimonials } from "@/domains/home/components/testimonials";
import { Pricing } from "@/domains/home/components/pricing";
import { Cta } from "@/domains/home/components/cta";
import { Footer } from "@/domains/home/components/footer";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Cta />
      </main>

      <Footer />
    </div>
  );
}
