"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';

type PrioritiesListProps = {
  value: string;
  onChange: (value: string) => void;
};

export function PrioritiesList({ value, onChange }: PrioritiesListProps) {
  const priorities = value ? JSON.parse(value) : [];
  const [newPriority, setNewPriority] = useState('');

  const handleAdd = () => {
    if (newPriority.trim() && priorities.length < 3) {
      const updated = [...priorities, newPriority.trim()];
      onChange(JSON.stringify(updated));
      setNewPriority('');
    }
  };

  const handleRemove = (index: number) => {
    const updated = priorities.filter((_: string, i: number) => i !== index);
    onChange(JSON.stringify(updated));
  };

  return (
    <div className="space-y-4">
      {priorities.map((priority: string, index: number) => (
        <div key={index} className="flex items-center gap-2">
          <Input value={priority} readOnly />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleRemove(index)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}
      
      {priorities.length < 3 && (
        <div className="flex gap-2">
          <Input
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
            placeholder="Add a priority..."
            onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          />
          <Button onClick={handleAdd}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}