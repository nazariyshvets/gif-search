import { type ComponentProps } from "react";

import { cn } from "@/lib/utils";

function MainLayout({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto min-h-screen max-w-screen-lg p-4", className)}
      {...rest}
    />
  );
}

export { MainLayout };
