import { JournalTemplate } from '@/types/journal';

export const eveningTemplate: JournalTemplate = {
  id: 'evening',
  name: 'Evening Review',
  description: 'Reflect on your day and prepare for tomorrow',
  prompts: [
    {
      id: 'mood',
      text: 'How are you feeling after today?',
      type: 'mood'
    },
    {
      id: 'accomplishments',
      text: 'What did you accomplish today?',
      type: 'text'
    },
    {
      id: 'lessons',
      text: 'What lessons or insights did you gain today?',
      type: 'text'
    },
    {
      id: 'gratitude',
      text: 'What are you grateful for from today?',
      type: 'gratitude'
    },
    {
      id: 'tomorrow',
      text: 'What are your priorities for tomorrow?',
      type: 'priorities'
    }
  ]
};