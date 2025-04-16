import { Logo } from "@/components/assets/logo";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserProfileDefault } from "@/components/user-profile-default";
import { UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 flex flex-col">
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-800">
        <SidebarTrigger />
        <UserButton showName fallback={<UserProfileDefault />} />
      </div>
    </nav>
  );
}
