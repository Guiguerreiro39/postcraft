import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { POSTS_PER_PAGE } from "@/constants";
import { api } from "@/trpc/server";

export default async function PostOverviewList() {
  const data = await api.post.getMany({
    limit: POSTS_PER_PAGE,
  });

  return (
    <div className="flex flex-wrap gap-4">
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
