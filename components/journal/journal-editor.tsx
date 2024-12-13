"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { Editor } from '@/components/journal/editor';
import { PromptLibrary } from '@/components/journal/prompt-library';

interface JournalEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function JournalEditor({ value, onChange }: JournalEditorProps) {
  const [showPrompts, setShowPrompts] = useState(false);

  const handleSelectPrompt = (promptText: string) => {
    onChange(promptText);
    setShowPrompts(false);
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Let's Journal</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowPrompts(true)}
        >
          <Pencil className="h-4 w-4 mr-2" />
          Browse Prompts
        </Button>
      </div>

      {showPrompts ? (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Select a Prompt</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPrompts(false)}
            >
              Close
            </Button>
          </div>
          <PromptLibrary onSelectPrompt={handleSelectPrompt} />
        </div>
      ) : (
        <Editor
          value={value}
          onChange={onChange}
          placeholder="Take a moment to center yourself. This is your space for reflection, growth, and self-discovery. Remember, honest self-reflection is the foundation of progress."
        />
      )}
    </Card>
  );
}