"use client";

import { Button } from '@/components/ui/button';
import { MoodOption } from '@/types/journal';
import { Smile, Meh, Frown } from 'lucide-react';

const moodOptions: MoodOption[] = [
  { value: 'positive', label: 'Positive', icon: 'Smile' },
  { value: 'neutral', label: 'Neutral', icon: 'Meh' },
  { value: 'negative', label: 'Challenging', icon: 'Frown' },
];

type MoodSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export function MoodSelector({ value, onChange }: MoodSelectorProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smile':
        return <Smile className="h-6 w-6" />;
      case 'Meh':
        return <Meh className="h-6 w-6" />;
      case 'Frown':
        return <Frown className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-4">
      {moodOptions.map((option) => (
        <Button
          key={option.value}
          variant={value === option.value ? 'default' : 'outline'}
          className="flex-1 py-8"
          onClick={() => onChange(option.value)}
        >
          <div className="flex flex-col items-center gap-2">
            {getIcon(option.icon)}
            <span>{option.label}</span>
          </div>
        </Button>
      ))}
    </div>
  );
}