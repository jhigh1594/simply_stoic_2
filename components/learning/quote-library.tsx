"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, BookmarkPlus } from 'lucide-react';
import { quotes } from '@/lib/data/quotes';
import { useToast } from '@/hooks/use-toast';

export function QuoteLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const filteredQuotes = quotes.filter(quote =>
    quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = (quoteId: string) => {
    toast({
      title: "Quote Saved",
      description: "Added to your favorites for quick reference.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search quotes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-4">
        {filteredQuotes.map((quote) => (
          <Card key={quote.id} className="p-6">
            <div className="flex justify-between gap-4">
              <div className="space-y-2">
                <blockquote className="text-lg">
                  "{quote.text}"
                </blockquote>
                <p className="text-sm text-muted-foreground">
                  — {quote.author}
                </p>
                {quote.source && (
                  <p className="text-sm text-muted-foreground">
                    From: {quote.source}
                  </p>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSave(quote.id)}
              >
                <BookmarkPlus className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}