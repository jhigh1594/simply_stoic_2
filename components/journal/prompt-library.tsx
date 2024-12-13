"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { journalPrompts } from '@/lib/data/journal-prompts';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface PromptLibraryProps {
  onSelectPrompt: (prompt: string) => void;
}

export function PromptLibrary({ onSelectPrompt }: PromptLibraryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const filteredCategories = journalPrompts.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.prompts.some(prompt =>
      prompt.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const toggleCategory = (id: string) => {
    setOpenCategories(prev =>
      prev.includes(id)
        ? prev.filter(c => c !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search prompts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-4">
        {filteredCategories.map((category) => (
          <Card key={category.id} className="p-6">
            <Collapsible
              open={openCategories.includes(category.id)}
              onOpenChange={() => toggleCategory(category.id)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="icon">
                    {openCategories.includes(category.id) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
              </div>

              <CollapsibleContent className="mt-4">
                <div className="grid gap-3">
                  {category.prompts.map((prompt) => (
                    <Button
                      key={prompt.id}
                      variant="outline"
                      className="justify-start h-auto p-4 text-left"
                      onClick={() => onSelectPrompt(prompt.text)}
                    >
                      {prompt.text}
                    </Button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>
    </div>
  );
}