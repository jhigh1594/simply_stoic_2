"use client";

import { MoodSelector } from '@/components/journal/mood-selector';

interface MoodSectionProps {
  value: string;
  onChange: (value: string) => void;
}

export function MoodSection({ value, onChange }: MoodSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">How are you feeling this morning?</h2>
      <MoodSelector value={value} onChange={onChange} />
    </div>
  );
}