"use client";

import { PrioritiesList } from '@/components/journal/priorities-list';

interface PrioritiesSectionProps {
  value: string;
  onChange: (value: string) => void;
}

export function PrioritiesSection({ value, onChange }: PrioritiesSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Set Your Priorities</h2>
      <p className="text-muted-foreground">
        What are the most important tasks you want to accomplish today?
      </p>
      <PrioritiesList value={value} onChange={onChange} />
    </div>
  );
}