import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiYoutube } from "@icons-pack/react-simple-icons";
import { Pencil, Share2, SlidersHorizontal } from "lucide-react";

export const Features = () => {
  return (
    <section id="features" className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/15 px-3 py-1 text-sm text-primary">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Content Creation Made Simple
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Postcraft combines powerful AI with an intuitive interface to help
              you create and distribute blog content faster than ever.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <Card className="h-full">
            <CardHeader className="p-4">
              <SiYoutube className="h-10 w-10 text-primary" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <CardTitle className="text-xl">Youtube to post</CardTitle>
              <CardDescription className="mt-2">
                Automatically generate well-structured blog posts from any
                YouTube video with our advanced AI technology.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader className="p-4">
              <SlidersHorizontal className="h-10 w-10 text-primary" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <CardTitle className="text-xl">Customizable Filters</CardTitle>
              <CardDescription className="mt-2">
                Fine-tune your content with filters for tone, length, style, and
                target audience to match your brand voice.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader className="p-4">
              <Pencil className="h-10 w-10 text-primary" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <CardTitle className="text-xl">Easy Editing</CardTitle>
              <CardDescription className="mt-2">
                Polish your generated content with our intuitive editor before
                publishing to ensure it&apos;s perfect.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader className="p-4">
              <Share2 className="h-10 w-10 text-primary" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <CardTitle className="text-xl">
                Multi-Platform Publishing
              </CardTitle>
              <CardDescription className="mt-2">
                Publish your finished blog posts directly to LinkedIn, Medium,
                and other platforms with one click.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
