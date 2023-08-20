import { Button } from "./ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useClerk } from "@clerk/clerk-react";

export function UserNav() {
  const clerk = useClerk();

  return (
    <>
      <SignedOut>
        <Button className="mt-2" onClick={() => clerk.openSignUp()}>
          Sign Up
        </Button>
        <Button className="mt-2" onClick={() => clerk.openSignIn()}>
          Sign In
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </>
  );
}
