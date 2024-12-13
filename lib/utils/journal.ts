import { JournalEntry } from '@/types/journal';

export const validateJournalEntry = (entry: Partial<JournalEntry>): boolean => {
  return !!(entry.templateId && entry.date);
};

export const calculateStreak = (entries: JournalEntry[]): number => {
  // TODO: Implement streak calculation
  return 7; // Placeholder
};

export const calculateCompletionRate = (
  entries: JournalEntry[],
  totalDays: number
): number => {
  const completedEntries = entries.filter(entry => entry.isCompleted);
  return (completedEntries.length / totalDays) * 100;
};