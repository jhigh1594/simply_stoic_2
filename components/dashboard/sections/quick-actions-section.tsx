"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Edit3 } from "lucide-react";
import Link from "next/link";

export function QuickActionsSection() {
  const actions = [
    {
      href: "/journal/morning",
      icon: Sun,
      label: "Morning Journal"
    },
    {
      href: "/journal/evening",
      icon: Moon,
      label: "Evening Review"
    },
    {
      href: "/journal/capture",
      icon: Edit3,
      label: "Quick Capture"
    }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid gap-3">
        {actions.map(({ href, icon: Icon, label }) => (
          <Button
            key={href}
            asChild
            className="w-full justify-start"
            variant="outline"
          >
            <Link href={href}>
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </Link>
          </Button>
        ))}
      </div>
    </Card>
  );
}