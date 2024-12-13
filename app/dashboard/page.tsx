"use client";

import { useEffect, useState } from 'react';
import { PageHeader } from '@/components/layout/page-header';
import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { StatsSection } from '@/components/dashboard/sections/stats-section';
import { QuickActionsSection } from '@/components/dashboard/sections/quick-actions-section';
import { RecentEntriesSection } from '@/components/dashboard/sections/recent-entries-section';
import { usePracticeStats } from '@/lib/hooks/use-practice-stats';

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  const stats = usePracticeStats();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DashboardLayout>
      <PageHeader 
        title="Daily Practice"
        description="Track your progress and maintain your practice"
      />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <StatsSection streak={stats.streak} progress={stats.progress} />
        <QuickActionsSection />
        <RecentEntriesSection />
      </div>
    </DashboardLayout>
  );
}