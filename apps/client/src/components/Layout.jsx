import { Outlet } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { ThemeProvider } from "./theme-provider";
import { Button } from "./ui/button";
import { UserNav } from "./user-nav";
import { MainNav } from "./main-nav";
import { ModeToggle } from "./mode-toggle";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function Layout() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="hidden flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <Button variant="ghost">Upload</Button>
                <Button variant="ghost">Create</Button>
                <UserNav />
                <ModeToggle />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <Outlet />
          </div>
        </div>
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default Layout;
