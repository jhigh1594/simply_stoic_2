export interface JournalPromptCategory {
  id: string;
  name: string;
  description: string;
  prompts: JournalPromptItem[];
}

export interface JournalPromptItem {
  id: string;
  text: string;
  author?: string;
  source?: string;
  category: string;
}

export const journalPrompts: JournalPromptCategory[] = [
  {
    id: "reflection",
    name: "Self-Reflection",
    description: "Examine your thoughts, actions, and character",
    prompts: [
      {
        id: "reflection-1",
        text: "What negative thoughts or habits am I currently struggling with, and how can I reframe them through Stoic principles?",
        category: "reflection"
      },
      {
        id: "reflection-2",
        text: "In what ways have I acted virtuously today, and where have I fallen short?",
        category: "reflection"
      },
      {
        id: "reflection-3",
        text: "What situations today tested my character, and how did I respond?",
        category: "reflection"
      }
    ]
  },
  {
    id: "preparation",
    name: "Daily Preparation",
    description: "Set intentions and prepare for the day ahead",
    prompts: [
      {
        id: "preparation-1",
        text: "What potential challenges might I face today, and how can I prepare to meet them with wisdom?",
        category: "preparation"
      },
      {
        id: "preparation-2",
        text: "What virtues do I most need to embody today?",
        category: "preparation"
      },
      {
        id: "preparation-3",
        text: "How can I serve others today while maintaining my own principles?",
        category: "preparation"
      }
    ]
  },
  {
    id: "gratitude",
    name: "Gratitude",
    description: "Practice appreciation and perspective",
    prompts: [
      {
        id: "gratitude-1",
        text: "What advantages or privileges do I currently have that I often take for granted?",
        category: "gratitude"
      },
      {
        id: "gratitude-2",
        text: "Who are the people in my life that I'm grateful for, and why?",
        category: "gratitude"
      },
      {
        id: "gratitude-3",
        text: "What challenges have I faced that ultimately led to growth?",
        category: "gratitude"
      }
    ]
  }
];