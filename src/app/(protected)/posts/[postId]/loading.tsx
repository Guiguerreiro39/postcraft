import { Skeleton } from "@/components/ui/skeleton";
import { EditorLoading } from "@/domains/post/components/editor";

export default function Loading() {
  return (
    <div className="w-full space-y-2">
      <Skeleton className="h-9 w-[30rem]" />
      <div className="space-y-1.5">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-[20rem]" />
      </div>
      <EditorLoading />
    </div>
  );
}
