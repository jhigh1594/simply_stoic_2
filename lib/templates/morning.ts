import { JournalTemplate } from '@/types/journal';

export const morningTemplate: JournalTemplate = {
  id: 'morning',
  name: 'Morning Reflection',
  description: 'Start your day with intention and clarity',
  prompts: [
    {
      id: 'mood',
      text: 'How are you feeling this morning?',
      type: 'mood'
    },
    {
      id: 'freeform',
      text: 'Let\'s Journal',
      type: 'text'
    },
    {
      id: 'intention',
      text: 'What is your primary intention for today?',
      type: 'text'
    },
    {
      id: 'challenges',
      text: 'What challenges might you face today, and how will you approach them?',
      type: 'text'
    },
    {
      id: 'gratitude',
      text: 'Name three things you are grateful for this morning.',
      type: 'gratitude'
    },
    {
      id: 'priorities',
      text: 'Set your top priorities for today (maximum 3)',
      type: 'priorities'
    }
  ]
};