"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp } from "lucide-react";

export function DashboardStats() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Practice Streak</h3>
          <TrendingUp className="h-5 w-5 text-primary" />
        </div>
        
        <div className="text-3xl font-bold">7 Days</div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Monthly Progress</span>
            <span>65%</span>
          </div>
          <Progress value={65} className="h-2" />
        </div>
      </div>
    </Card>
  );
}