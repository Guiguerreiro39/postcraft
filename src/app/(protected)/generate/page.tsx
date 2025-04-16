import { HydrateClient } from "@/trpc/server";

import { TypographyH2 } from "@/components/ui/typography-h2";
import { GenerateForm } from "@/domains/generate/features/generate-form";

export default async function Home() {
  return (
    <HydrateClient>
      <TypographyH2 className="pb-4">Generate Post</TypographyH2>
      <GenerateForm />
    </HydrateClient>
  );
}
