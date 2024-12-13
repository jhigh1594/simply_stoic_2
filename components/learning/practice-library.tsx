"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { practices } from '@/lib/data/practices';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function PracticeLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openPractices, setOpenPractices] = useState<string[]>([]);

  const filteredPractices = practices.filter(practice =>
    practice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    practice.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const togglePractice = (id: string) => {
    setOpenPractices(prev =>
      prev.includes(id)
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search practices..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-4">
        {filteredPractices.map((practice) => (
          <Card key={practice.id} className="p-6">
            <Collapsible
              open={openPractices.includes(practice.id)}
              onOpenChange={() => togglePractice(practice.id)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{practice.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {practice.description}
                  </p>
                </div>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="icon">
                    {openPractices.includes(practice.id) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
              </div>

              <CollapsibleContent className="mt-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Instructions</h4>
                    <p className="text-muted-foreground">
                      {practice.instructions}
                    </p>
                  </div>
                  
                  {practice.tips && (
                    <div>
                      <h4 className="font-medium mb-2">Tips</h4>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {practice.tips.map((tip, index) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>
    </div>
  );
}