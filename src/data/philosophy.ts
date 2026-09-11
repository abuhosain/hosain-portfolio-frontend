export interface QuoteItem {
  quote: string;
  context: string;
}

export const philosophyData = {
  headline: "Engineering Philosophy",
  subheadline: "The guiding mental models behind every line of code, architecture decision, and product shipped.",
  quotes: [
    {
      quote: "Good software solves problems. Great software feels inevitable.",
      context: "On software craftsmanship & user experience",
    },
    {
      quote: "Ideas are cheap. Execution is the interesting part.",
      context: "On building real products versus endless theorizing",
    },
  ] as QuoteItem[],
  principles: [
    {
      title: "Simplicity Over Cleverness",
      description: "Write code that is obvious to read, straightforward to maintain, and resilient against unexpected edge cases.",
    },
    {
      title: "Velocity Through Craft",
      description: "Building fast doesn't mean cutting corners. Thoughtful architecture early on enables lightning-fast iteration later.",
    },
    {
      title: "Beyond the Browser",
      description: "Software isn't confined to screens. Connecting code to physical sensors and actuators unlocks next-tier leverage.",
    },
  ],
};
