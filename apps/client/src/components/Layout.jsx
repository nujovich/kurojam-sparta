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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex-col md:flex">
            <div className="border-b">
              <div className="flex h-16 items-center px-4">
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                  <UserNav />
                  <ModeToggle />
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-4 p-8 pt-6">
              <Outlet />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default Layout;
