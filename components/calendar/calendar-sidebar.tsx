"use client";

import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import { CalendarDays, CheckCircle2, XCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { DailySummary } from '@/components/calendar/daily-summary';

interface CalendarSidebarProps {
  selectedDate: Date;
}

export function CalendarSidebar({ selectedDate }: CalendarSidebarProps) {
  // Mock data - replace with actual data from your backend
  const monthlyStats = {
    totalDays: 31,
    completedDays: 22,
    streak: 7
  };

  const progress = (monthlyStats.completedDays / monthlyStats.totalDays) * 100;

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Monthly Overview</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between text-sm">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 mr-1" />
                Completed
              </div>
              <p className="text-2xl font-bold">{monthlyStats.completedDays}</p>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center text-sm text-muted-foreground">
                <XCircle className="h-4 w-4 mr-1" />
                Missed
              </div>
              <p className="text-2xl font-bold">
                {monthlyStats.totalDays - monthlyStats.completedDays}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4 mr-1" />
                Current Streak
              </div>
              <span className="text-xl font-bold">{monthlyStats.streak} days</span>
            </div>
          </div>
        </div>
      </Card>

      <DailySummary date={selectedDate} />
    </div>
  );
}