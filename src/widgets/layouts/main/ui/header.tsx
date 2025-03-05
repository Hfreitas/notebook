import { Link } from "@tanstack/react-router";

import { BookOpen } from "lucide-react";
import { Button } from "@/shared/components/ui/button/component";

export function MainHeader() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <BookOpen className="h-6 w-6" />
          <span>Student Notebook</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/sign-in">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link to="/sign-up">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
