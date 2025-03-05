import { Link } from "@tanstack/react-router";

import { ArrowRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button/component";

export function HomeMainSection() {
  return (
    <main>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Your Academic Notes, Organized and Accessible
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Student Notebook helps you capture, organize, and review your
                  academic notes in one place. Take better notes, study smarter,
                  and achieve better results.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/sign-up">
                  <Button className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Student Notebook App"
                className="rounded-lg object-cover"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
