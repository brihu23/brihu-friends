import * as React from "react";
import ModeToggle from "../ui/mode-toggle";

export function Layout({ children, ...props }) {
  return (
    <div {...props}>
      <div className="fixed   p-4">
        <ModeToggle />
      </div>

      {children}
    </div>
  );
}
