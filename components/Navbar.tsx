import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

interface SidebarProps {
  apiLimitCount: number;
}

const Navbar = ({ apiLimitCount }: SidebarProps) => {
  return (
    <nav className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} />

      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Navbar;
