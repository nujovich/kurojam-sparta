import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  const [count, setCount] = useState(0);
  return (
    <Button
      onClick={() => setCount((count) => count + 1)}
      variant="destructive"
    >
      count is {count}
    </Button>
  );
}
