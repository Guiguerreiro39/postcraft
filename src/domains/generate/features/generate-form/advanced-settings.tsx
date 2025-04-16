import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";
import { FilterSlider } from "@/components/filter-slider";
import { Atom, Drama, Ruler } from "lucide-react";
import type { formSchema } from "@/domains/generate/features/generate-form/schemas";
import type { Control } from "react-hook-form";
import type { z } from "zod";

type Props = {
  control: Control<z.infer<typeof formSchema>>;
};

export const AdvancedSettings = ({ control }: Props) => {
  return (
    <div className="space-y-6">
      <Header
        className="pb-2"
        title="Advanced settings"
        description="Adjust the settings to generate the post you want."
      />
      <div className="flex flex-wrap items-start gap-12">
        <div className="space-y-4">
          <SectionHeader title="Tone" icon={<Drama />} />
          <FilterSlider
            leftLabel="Friendly"
            rightLabel="Professional"
            value={3}
            control={control}
            name="tone"
          />
        </div>
        <div className="space-y-4">
          <SectionHeader title="Size" icon={<Ruler />} />
          <FilterSlider
            leftLabel="Short"
            rightLabel="Long"
            value={3}
            control={control}
            name="size"
          />
        </div>
        <div className="space-y-4">
          <SectionHeader title="Complexity" icon={<Atom />} />
          <FilterSlider
            leftLabel="Simple"
            rightLabel="Complex"
            value={3}
            control={control}
            name="complexity"
          />
        </div>
      </div>
    </div>
  );
};
