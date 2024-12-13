export interface Quote {
  id: string;
  text: string;
  author: string;
  source?: string;
  tags?: string[];
}

export const quotes: Quote[] = [
  {
    id: "1",
    text: "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius",
    source: "Meditations",
    tags: ["mindfulness", "perspective"]
  },
  {
    id: "2",
    text: "We suffer more often in imagination than in reality.",
    author: "Seneca",
    source: "Letters from a Stoic",
    tags: ["anxiety", "perspective"]
  },
  {
    id: "3",
    text: "The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control.",
    author: "Epictetus",
    source: "Discourses",
    tags: ["control", "choice"]
  },
  {
    id: "4",
    text: "Waste no more time arguing about what a good man should be. Be one.",
    author: "Marcus Aurelius",
    source: "Meditations",
    tags: ["action", "virtue"]
  },
  {
    id: "5",
    text: "He who fears death will never do anything worthy of a living man.",
    author: "Seneca",
    source: "Moral Letters",
    tags: ["courage", "fear"]
  }
];