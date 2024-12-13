"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

type GratitudeInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function GratitudeInput({ value, onChange }: GratitudeInputProps) {
  const gratitudeItems = value ? JSON.parse(value) : [];
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    if (newItem.trim() && gratitudeItems.length < 3) {
      const updated = [...gratitudeItems, newItem.trim()];
      onChange(JSON.stringify(updated));
      setNewItem('');
    }
  };

  return (
    <div className="space-y-4">
      {gratitudeItems.map((item: string, index: number) => (
        <Input key={index} value={item} readOnly />
      ))}
      
      {gratitudeItems.length < 3 && (
        <div className="flex gap-2">
          <Input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="I am grateful for..."
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