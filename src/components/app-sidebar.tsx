import { VerticalLogo } from "@/components/assets/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { POSTS_PER_PAGE } from "@/constants";
import { DropdownCreatePost } from "@/domains/post/components/dropdown-create-post";
import {
  PostsSidebar,
  PostsSidebarSkeleton,
} from "@/domains/post/components/posts-sidebar";
import { navigationItems } from "@/lib/navigation";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link className="ml-2 mt-4" href="/">
          <VerticalLogo />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Recent posts</SidebarGroupLabel>
          <DropdownCreatePost>
            <SidebarGroupAction className="size-6">
              <CirclePlus className="size-5" />
            </SidebarGroupAction>
          </DropdownCreatePost>
          <SidebarGroupContent>
            <Suspense fallback={<PostsSidebarSkeleton />}>
              <PostsSidebar />
            </Suspense>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
