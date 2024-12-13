"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { useRecentEntries } from "@/lib/hooks/use-recent-entries";

export function RecentEntriesSection() {
  const { entries } = useRecentEntries();

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Recent Entries</h3>
        <CalendarDays className="h-5 w-5 text-primary" />
      </div>
      
      <div className="space-y-4">
        {entries.map((entry) => (
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