// Site-wide settings and the longer lists of copy.
// Copy source: "JOHN HYTTINEN MASTER DOC - Oct 7 2026" (final website copy).

export const site = {
  name: 'Suunta Labs',
  legalName: 'Suunta Labs Inc.',
  tagline: 'Direction for Better Work',
  description:
    'Human-centered AI consulting that turns underperforming AI adoption into measurable time and cost savings.',
  url: 'https://suuntalabs.com',
  email: 'john@suuntalabs.com',
  linkedin: 'https://www.linkedin.com/in/johnhyttinen/',
  linkedinLabel: 'linkedin.com/in/johnhyttinen',
  location: 'Toronto area, working globally',
  // Placeholder until a booking page (e.g. Calendly) is ready: swap this URL.
  bookingUrl: 'mailto:john@suuntalabs.com?subject=Direction%20Call',
};

export const nav = [
  { label: 'Method', href: '#method' },
  { label: 'Approach', href: '#approach' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
];

export const stats = [
  { value: '80%', prefix: '', text: 'of respondents said AI improved their individual productivity.' },
  { value: '37%', prefix: '', text: 'of respondents reported a positive company-level profit impact from AI.' },
  {
    value: '¾',
    prefix: 'Nearly',
    label: 'Nearly three-quarters',
    text: "of the survey's AI high performers reported fundamentally redesigning workflows.",
  },
];

export const method = [
  { term: 'Work', question: 'How should people and AI contribute to the outcome?' },
  {
    term: 'Workflow',
    question: 'How should work, decisions, data, ownership, and oversight move across the organization?',
  },
  {
    term: 'Value',
    question:
      'How will the organization measure time and cost savings, understand workflow and human value, and reinforce the new way of working?',
  },
];

export const steps = [
  {
    name: 'Direction',
    title: 'Define the outcome.',
    body: 'Agree the business priority, the value sought, the decision questions, the executive sponsor, and the measures that will guide the work.',
  },
  {
    name: 'Work',
    title: 'Redesign the contribution.',
    body: 'Examine tasks, judgment, expertise, and accountability. Clarify where people lead, where AI assists, and where human oversight remains essential.',
  },
  {
    name: 'Workflow',
    title: 'Rebuild how work moves.',
    body: 'Redesign the sequence of activity, decisions, data, access, handoffs, ownership, controls, and exception paths required for the new model.',
  },
  {
    name: 'Activate',
    title: 'Put the model into practice.',
    body: 'When appropriate, begin with a focused pilot or first-workflow implementation. Confirm data, access, governance, and knowledge readiness; align leaders; prepare teams; build trust and capability; and establish the operating rhythms that support confident adoption.',
  },
  {
    name: 'Value',
    title: 'Measure and reinforce.',
    body: 'Track business outcomes; workflow measures such as cycle time, quality, errors, handoffs, and rework; and people measures such as clarity, confidence, capability, judgment, and adoption. Align leadership signals, performance measures, recognition, and rewards with the desired contribution. Use an agreed review period to refine the workflow and identify the next opportunity.',
  },
];

export const services = [
  {
    name: 'Direction Call',
    body: 'A focused executive conversation about one business priority, the value you want AI to create, and the work or workflow involved.',
  },
  {
    name: 'Scoped Diagnostic',
    body: 'An examination of a defined business priority through interviews, relevant information, workflow analysis, and executive decision questions, delivered as a Key Findings Report and executive presentation.',
  },
  {
    name: 'Strategy, Priorities, and Roadmap',
    body: 'A practical roadmap that connects business outcomes, AI opportunities, risks, readiness, priorities, sequencing, value measures, and implementation decisions.',
  },
  {
    name: 'AI-Assisted Work and Workflow Redesign',
    body: 'A redesign of how people and AI contribute to the outcome, how the workflow operates, where decisions and oversight belong, and what data and access are required.',
  },
  {
    name: 'Focused Implementation and Adoption',
    body: 'A focused pilot or first-workflow implementation, with the executive alignment, team preparation, trust, and capability that help it move into practice.',
  },
  {
    name: 'Measurement, Reinforcement, and Optimization',
    body: 'Results measurement, adoption review, and workflow refinement, with performance measures, recognition, incentives, career signals, and leadership expectations aligned to the outcomes you want to encourage.',
  },
];

export const credentials = [
  {
    group: 'AI certifications',
    items: [
      'AI Assisted® Consultant Certification: AI Consultant; AI Implementor Level 1; Data Specialist. Industry Rockstar.',
      'Certified AI for HR Specialist. Academy to Innovate HR (AIHR).',
    ],
  },
  {
    group: 'AI and data learning',
    items: [
      'Google Data Analytics; Google Prompting Essentials; Introduction to Generative AI Learning Path (Google Cloud); AI Strategy for HR Leaders and HR Consulting Skills (AIHR).',
    ],
  },
  {
    group: 'Professional designations',
    items: ['Certified Compensation Professional (CCP) · Certified Human Resources Leader (CHRL)'],
  },
];

export type Source = { label: string; url: string };

export const insights: {
  title: string;
  question: string;
  found: string;
  means: string;
  sources: Source[];
}[] = [
  {
    title: 'Five Conditions Help GenAI Move Beyond Proof of Concept',
    question:
      'Which of these conditions needs the most attention before your next AI initiative can move forward with confidence?',
    found:
      'Gartner’s January 2026 guidance identifies five connected requirements for moving GenAI into practical use: defined business value, AI-ready data, cost visibility, responsible AI, and change management. Gartner says the guidance draws on its analysis of hundreds of GenAI implementations.',
    means:
      'Moving from a promising proof of concept to measurable business value requires more than technical performance. Leaders need a valuable use case, ready data, visible economics, clear governance, and adoption built into the workflow.',
    sources: [
      {
        label: 'Gartner, Why Half of GenAI Projects Fail, January 26, 2026.',
        url: 'https://www.gartner.com/en/articles/genai-project-failure',
      },
    ],
  },
  {
    title: 'Connecting Individual Productivity With Company Profit',
    question:
      'Where is AI already helping people work better, and how will that improvement become measurable time or cost savings for the organization?',
    found:
      "McKinsey's 2026 global survey of 1,719 participants across 97 countries found that 80 percent said AI had improved their individual productivity and half said it helped them make better decisions. Thirty-seven percent reported a positive company-level profit impact from AI, measured before interest and taxes. The survey was fielded from May 4 to June 8, 2026. The findings describe different outcomes; productivity gains may also create value through quality, service, and capacity.",
    means:
      'Individual gains become business value when they connect to a defined business priority, a redesigned workflow, clear ownership, and measures that show what changed.',
    sources: [
      {
        label: 'McKinsey, The State of AI in 2026: On the Road to ROI, August 2026.',
        url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
      },
    ],
  },
  {
    title: 'Continuous Work Redesign Supports Sustained AI Transformation',
    question:
      'Where would continuous work redesign help your organization sustain AI value as priorities and technology evolve?',
    found:
      'In a September 15, 2026, release, Gartner forecast that by 2028, organizations that establish continuous work redesign as a core capability will be twice as likely to sustain AI-driven work transformation. Gartner describes this capability as continuously adapting workflows, decision rights, jobs, and talent deployment as AI capabilities, business priorities, and execution realities change.',
    means:
      'A continuous work-redesign capability gives leaders a practical way to keep AI transformation aligned with changing conditions. It brings visibility into how work is performed, clarity about where people and AI contribute, and a way to refine workflows, responsibilities, measures, and reinforcement as conditions change.',
    sources: [
      {
        label: 'Gartner press release, September 15, 2026.',
        url: 'https://www.gartner.com/en/newsroom/press-releases/2026-15-09-gartner-predicts-by-2028-organizations-that-establish-continous-work-redesign-as-a-core-capability-will-be-twice-as-likely-to-sustain-ai-driven-work-transformation',
      },
    ],
  },
  {
    title: 'Workflow Redesign Is a Pattern Among AI High Performers',
    question: 'Which workflow offers a clear enough value opportunity to redesign, implement, and measure?',
    found:
      "Nearly three-quarters of the survey's AI high performers reported fundamentally redesigning workflows. McKinsey defined this group as respondents who attributed at least 5 percent of their organizations' earnings before interest and taxes to AI and reported significant value from AI. The association is based on 92 respondents and should be read as a pattern for examination; causal conclusions are outside the survey's scope.",
    means:
      'The finding directs attention from isolated tool use to the redesign of the work itself: how tasks, judgment, decisions, data, access, ownership, and oversight fit together.',
    sources: [
      {
        label: 'McKinsey, The State of AI in 2026: On the Road to ROI, August 2026.',
        url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
      },
    ],
  },
  {
    title: 'Adoption Depends on the People and Operating Model Around the Technology',
    question: 'What operating conditions will help the redesigned workflow become part of everyday work?',
    found:
      "McKinsey's July 2026 practical guidance connects AI adoption at scale with workflow redesign, operating-model choices, leadership, culture, trust, and value in employees' daily work. Deloitte's August 2026 research, based on 501 US leaders surveyed from April to June 2026, identified workforce and business processes as the weakest areas of agentic readiness. Half of those leaders reported underinvestment in workforce transformation.",
    means:
      'Strategy and implementation gain staying power when people understand how their work is changing and the organization aligns roles, decision rights, capability, accountability, leadership expectations, performance measures, recognition, and rewards.',
    sources: [
      {
        label: 'McKinsey, Rewired Takes: Practical People Lessons for Scaling AI Adoption, July 13, 2026.',
        url: 'https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/rewired-takes-practical-people-lessons-for-scaling-ai-adoption',
      },
      {
        label: 'Deloitte, AI Agents Are Only the Beginning: The Path to Agentic Transformation, August 12, 2026.',
        url: 'https://www.deloitte.com/us/en/insights/industry/technology/path-to-agentic-transformation.html',
      },
    ],
  },
];

export const bring = [
  'The business outcome you want AI to support.',
  'The workflow, team, or customer experience you want to improve.',
  'The decision you want greater clarity to make.',
];
