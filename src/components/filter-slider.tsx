"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import type { Control, FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  leftLabel: string;
  rightLabel: string;
  value: number;
  control: Control<T>;
  name: Path<T>;
};

export const FilterSlider = <T extends FieldValues>({
  leftLabel,
  rightLabel,
  value,
  control,
  name,
}: Props<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="flex w-fit flex-col gap-2">
              <div className="flex justify-between space-x-4">
                <span className="text-sm text-muted-foreground">
                  {leftLabel}
                </span>
                <span className="text-sm text-muted-foreground">
                  {rightLabel}
                </span>
              </div>
              <div className="relative flex w-fit items-center gap-4 rounded-full bg-secondary px-4 py-1 text-foreground shadow-inner">
                {Array.from({ length: 5 }).map((_, index) => {
                  const level = index + 1;
                  const isActive = field.value === level;

                  return (
                    <button
                      type="button"
                      key={index}
                      className={cn(
                        "rounded-full px-3 py-1 text-muted-foreground",
                        isActive && "bg-primary text-primary-foreground shadow",
                      )}
                      onClick={() => field.onChange(level)}
                    >
                      {level}
                    </button>
                  );
                })}
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
