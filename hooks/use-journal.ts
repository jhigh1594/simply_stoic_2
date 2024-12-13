"use client";

import { useState } from 'react';
import { JournalEntry } from '@/types/journal';
import { useToast } from '@/hooks/use-toast';

export function useJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const { toast } = useToast();

  const saveEntry = async (entry: JournalEntry) => {
    try {
      // TODO: Implement API call
      setEntries([...entries, entry]);
      toast({
        title: "Entry Saved",
        description: "Your journal entry has been saved successfully.",
      });
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save journal entry. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const getEntries = () => entries;

  return {
    entries,
    saveEntry,
    getEntries,
  };
}