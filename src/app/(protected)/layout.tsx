import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { DialogProvider } from "@/components/providers/dialog-provider";
import Navbar from "@/components/navbar";
import { api, HydrateClient } from "@/trpc/server";
import { POSTS_PER_PAGE } from "@/constants";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  void api.post.getMany.prefetch({
    limit: POSTS_PER_PAGE,
  });

  return (
    <SidebarProvider>
      <DialogProvider>
        <TooltipProvider>
          <HydrateClient>
            <AppSidebar />
          </HydrateClient>
          <main className="relative w-full gap-2 bg-white">
            <Navbar />
            <div className="p-6">{children}</div>
          </main>
          <Toaster />
        </TooltipProvider>
      </DialogProvider>
    </SidebarProvider>
  );
}
