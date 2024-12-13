export interface Practice {
  id: string;
  title: string;
  description: string;
  instructions: string;
  tips?: string[];
  category: string;
}

export const practices: Practice[] = [
  {
    id: "1",
    title: "Morning Premeditatio Malorum",
    description: "Prepare for potential challenges by visualizing them in advance",
    instructions: "Each morning, take a few minutes to consider what challenges or difficulties you might face during the day. Visualize yourself responding to these challenges with wisdom, patience, and virtue. This practice helps reduce anxiety and prepares you to handle difficulties with grace.",
    tips: [
      "Start with small, likely challenges",
      "Focus on your response rather than the challenge itself",
      "Remember that this is a preparation, not a prediction"
    ],
    category: "daily"
  },
  {
    id: "2",
    title: "Evening Review",
    description: "Reflect on your actions and decisions at the end of each day",
    instructions: "Before bed, review your day's actions and decisions. Ask yourself: What did I do well? Where did I fall short? What could I have done differently? This practice promotes self-awareness and continuous improvement.",
    tips: [
      "Be honest but not judgmental",
      "Focus on what you can learn",
      "Consider both actions and thoughts"
    ],
    category: "daily"
  },
  {
    id: "3",
    title: "View From Above",
    description: "Gain perspective by imagining events from a cosmic viewpoint",
    instructions: "Imagine yourself rising above your current situation, seeing it from increasingly higher vantage points - your city, country, planet, and beyond. Consider how your current concerns appear from these perspectives.",
    tips: [
      "Start with your immediate surroundings",
      "Gradually expand your perspective",
      "Notice how your emotions change with perspective"
    ],
    category: "perspective"
  },
  {
    id: "4",
    title: "Voluntary Discomfort",
    description: "Build resilience through intentional challenges",
    instructions: "Regularly practice voluntary discomfort by temporarily giving up certain comforts or conveniences. This might include taking cold showers, fasting, or sleeping on a hard surface.",
    tips: [
      "Start with small discomforts",
      "Focus on your mental response",
      "Remember the purpose is growth, not punishment"
    ],
    category: "resilience"
  }
];