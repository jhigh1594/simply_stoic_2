"use client";

import { useState } from 'react';
import { JournalTemplate } from '@/types/journal';
import { Button } from '@/components/ui/button';
import { JournalPromptSection } from '@/components/journal/journal-prompt-section';
import { JournalEditor } from '@/components/journal/journal-editor';

interface JournalFormProps {
  template: JournalTemplate;
  responses: Record<string, string>;
  onResponsesChange: (responses: Record<string, string>) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

export function JournalForm({
  template,
  responses,
  onResponsesChange,
  onSubmit,
  onCancel
}: JournalFormProps) {
  const handleResponseChange = (promptId: string, value: string) => {
    onResponsesChange({
      ...responses,
      [promptId]: value
    });
  };

  return (
    <div className="space-y-8 mt-8">
      {/* Mood Selector */}
      <JournalPromptSection
        prompt={template.prompts.find(p => p.id === 'mood')!}
        value={responses['mood'] || ''}
        onChange={(value) => handleResponseChange('mood', value)}
      />

      {/* Journal Editor */}
      <JournalEditor
        value={responses['freeform'] || ''}
        onChange={(value) => handleResponseChange('freeform', value)}
      />

      {/* Other Prompts */}
      {template.prompts
        .filter(prompt => !['mood', 'freeform'].includes(prompt.id))
        .map((prompt) => (
          <JournalPromptSection
            key={prompt.id}
            prompt={prompt}
            value={responses[prompt.id] || ''}
            onChange={(value) => handleResponseChange(prompt.id, value)}
          />
        ))}
      
      <div className="flex justify-end gap-4 pt-6">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onSubmit}>
          Save Entry
        </Button>
      </div>
    </div>
  );
}