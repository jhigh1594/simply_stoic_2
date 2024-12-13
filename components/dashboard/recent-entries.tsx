"use client";

import { Card } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RecentEntries() {
  const recentEntries = [
    {
      id: 1,
      title: "Morning Reflection",
      date: "2024-03-20",
      preview: "Today I will focus on practicing patience..."
    },
    {
      id: 2,
      title: "Evening Review",
      date: "2024-03-19",
      preview: "Reflected on today's challenges and lessons..."
    }
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Recent Entries</h3>
        <CalendarDays className="h-5 w-5 text-primary" />
      </div>
      
      <div className="space-y-4">
        {recentEntries.map((entry) => (
          <div key={entry.id} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{entry.title}</span>
              <span className="text-muted-foreground">{entry.date}</span>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {entry.preview}
            </p>
          </div>
        ))}
        
        <Button variant="ghost" className="w-full mt-4">
          View All Entries
        </Button>
      </div>
    </Card>
  );
}