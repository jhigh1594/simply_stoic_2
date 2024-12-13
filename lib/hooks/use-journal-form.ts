"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { JournalTemplate } from '@/types/journal';

export function useJournalForm(template: JournalTemplate) {
  const [responses, setResponses] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      // TODO: Implement save functionality
      toast({
        title: "Journal Entry Saved",
        description: `Your ${template.name.toLowerCase()} has been saved successfully.`,
      });
      router.push('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save journal entry. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCancel = () => {
    router.push('/dashboard');
  };

  return {
    responses,
    setResponses,
    handleSubmit,
    handleCancel,
  };
}