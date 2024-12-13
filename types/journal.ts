export type JournalTemplate = {
  id: string;
  name: string;
  description: string;
  prompts: JournalPrompt[];
};

export type JournalPrompt = {
  id: string;
  text: string;
  type: 'text' | 'mood' | 'gratitude' | 'priorities';
};

export type JournalEntry = {
  id: string;
  templateId: string;
  date: string;
  mood?: string;
  responses: Record<string, string>;
  isCompleted: boolean;
};

export type MoodOption = {
  value: string;
  label: string;
  icon: string;
};