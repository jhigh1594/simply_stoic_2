"use client";

import { useState, useEffect } from 'react';

interface PracticeStats {
  streak: number;
  progress: number;
  totalEntries: number;
  completedToday: boolean;
}

export function usePracticeStats() {
  const [stats, setStats] = useState<PracticeStats>({
    streak: 7,
    progress: 65,
    totalEntries: 42,
    completedToday: false
  });

  // TODO: Implement API call to fetch stats
  useEffect(() => {
    // Fetch stats from API
  }, []);

  return stats;
}