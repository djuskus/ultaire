// src/data/plans.ts
export interface Plan {
  category: string;
  name:     string;
  desc:     string;
  tags:     string[];
}

export const plans: Plan[] = [
  {
    category: 'assistant',
    name:     'signal',
    desc:     'A personal AI that knows your rhythm. Checks in, holds the line, and refuses to let the important things slip. Built to run quietly in the background of your life.',
    tags:     ['telegram', 'ai', 'personal'],
  },
  {
    category: 'research',
    name:     'ledger',
    desc:     'Deep market exploration without the noise. Patterns, signals, and opportunities surfaced before they become obvious. Research as a competitive edge.',
    tags:     ['markets', 'research', 'data'],
  },
  {
    category: 'data',
    name:     'harvest',
    desc:     'The web as a structured data source. Reach into any corner of the internet and pull back exactly what you need — clean, structured, and ready to use.',
    tags:     ['scraping', 'data', 'pipeline'],
  },
  {
    category: 'web',
    name:     'dylan.bet',
    desc:     'Upcoming redesigned public personal profile. In order to stop hiding behind this vague site',
    tags:     ['web', 'tbd'],
  },
];
