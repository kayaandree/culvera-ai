/**
 * Culvera AI — shared "About the company" content
 * ----------------------------------------------------------------------
 * Single source of truth for the Why Culvera / Why Vietnam / Our Goal /
 * tech-statement copy that appears on both the homepage (as the concise
 * introduction) and the About page (as the fuller story). Edit copy here
 * once and both pages pick it up — components/why-culvera.js etc. only
 * know how to render this shape, never hardcode the words themselves.
 */

export const whyCulveraContent = {
  eyebrow: "WHY CULVERA",
  heading: "Farming intelligence should not depend on the size of your farm.",
  paragraphs: [
    "Agriculture generates enormous amounts of information — climate patterns, soil conditions, satellite observations, market movements and historical production data. Yet many of the farmers responsible for producing the world's food still make critical decisions without access to the tools that turn that information into practical guidance.",
    "Culvera AI was created to help close that gap.",
    "Our platform brings multiple sources of agricultural data together and translates them into clear, location-specific decision intelligence. The goal is to help farmers and the organizations that support them make better-informed decisions about production, inputs, climate risk, expected yields and market conditions.",
    "This reflects Culvera's mission of giving smallholder farmers access to the type of decision intelligence normally available to much larger agricultural organizations.",
  ],
};

export const whyVietnamContent = {
  heading: "Why Vietnam",
  paragraphs: [
    "Vietnam is one of the world's major agricultural exporters, while millions of smallholder farmers remain underserved by forecasting, decision-support and market-information tools.",
    "We chose Vietnam as Culvera's first proving ground because it combines a large smallholder farming population, globally important agricultural production, significant climate and market exposure, and an environment where better access to information can create measurable impact.",
    "The objective is not to build a platform that only works in Vietnam. It is to prove a model that can eventually be adapted to agricultural regions around the world.",
  ],
};

export const goalsContent = {
  eyebrow: "OUR GOAL",
  statement: "Turn fragmented agricultural data into decisions farmers can actually use.",
  items: [
    {
      title: "Better Decisions",
      body: "Combine climate, soil, satellite, farm and market information into practical, location-specific guidance.",
    },
    {
      title: "Greater Resilience",
      body: "Help farmers anticipate risks such as extreme weather, changing growing conditions, input pressures and other local agricultural challenges rather than responding only after losses occur.",
    },
    {
      title: "Intelligence That Improves",
      body: "Feed real-world farming outcomes back into the system so predictions and recommendations become more accurate and locally relevant over time.",
    },
  ],
};

export const techStatementContent = {
  text: "Climate. Soil. Satellite. Markets. Farm outcomes. One decision layer.",
};
