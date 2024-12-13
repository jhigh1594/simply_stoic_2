"use client";

import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import Link from 'next/link';

interface DailySummaryProps {
  date: Date;
}

export function DailySummary({ date }: DailySummaryProps) {
  // Mock data - replace with actual data from your backend
  const entries = [
    {
      id: 1,
      type: 'Morning Reflection',
      mood: 'positive',
      preview: 'Started the day with clarity and purpose...'
    },
    {
      id: 2,
      type: 'Evening Review',
      mood: 'neutral',
      preview: 'Reflected on today\'s challenges and growth...'
    }
  ];

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">
            {format(date, 'EEEE, MMMM d')}
          </h3>
          <p className="text-sm text-muted-foreground">Daily Summary</p>
        </div>

        <div className="space-y-4">
          {entries.map((entry) => (
            <div key={entry.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{entry.type}</span>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/journal/${entry.id}`}>
                    <Pencil className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {entry.preview}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}