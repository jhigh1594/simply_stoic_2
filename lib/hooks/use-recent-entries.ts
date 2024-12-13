"use client";

import { useState, useEffect } from 'react';

interface Entry {
  id: number;
  title: string;
  date: string;
  preview: string;
}

export function useRecentEntries() {
  const [entries, setEntries] = useState<Entry[]>([
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
  ]);

  // TODO: Implement API call to fetch recent entries
  useEffect(() => {
    // Fetch entries from API
  }, []);

  return { entries };
}