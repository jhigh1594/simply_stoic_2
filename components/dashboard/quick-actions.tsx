"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Edit3 } from "lucide-react";
import Link from "next/link";

export function QuickActions() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid gap-3">
        <Button asChild className="w-full justify-start" variant="outline">
          <Link href="/journal/morning">
            <Sun className="mr-2 h-4 w-4" />
            Morning Journal
          </Link>
        </Button>
        <Button asChild className="w-full justify-start" variant="outline">
          <Link href="/journal/evening">
            <Moon className="mr-2 h-4 w-4" />
            Evening Review
          </Link>
        </Button>
        <Button asChild className="w-full justify-start" variant="outline">
          <Link href="/journal/capture">
            <Edit3 className="mr-2 h-4 w-4" />
            Quick Capture
          </Link>
        </Button>
      </div>
    </Card>
  );
}