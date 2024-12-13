"use client";

import { GratitudeInput } from '@/components/journal/gratitude-input';

interface GratitudeSectionProps {
  value: string;
  onChange: (value: string) => void;
}

export function GratitudeSection({ value, onChange }: GratitudeSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Daily Gratitude</h2>
      <p className="text-muted-foreground">
        Take a moment to appreciate the good things in your life
      </p>
      <GratitudeInput value={value} onChange={onChange} />
    </div>
  );
}