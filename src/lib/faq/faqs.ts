// Shared Section 125 FAQ bank. Powers the main /faq page (all of them) and the
// industry pages (industry-specific FAQs plus a relevant subset of these).
//
// Benefit-led: the cafeteria plan and pre-tax benefits are the product. The
// tax/payroll effect appears only as a factual, rolled-in detail, never the
// selling point. No em or en dashes.

export type Faq = { question: string; answer: string; category: string };

export const GENERAL_FAQS: Faq[] = [
  // About the plan
  {
    category: "About the plan",
    question: "What is a Section 125 cafeteria plan?",
    answer:
      "It is a written employee benefit plan, authorized by Section 125 of the Internal Revenue Code, that lets employees pay for certain qualified benefits with pre-tax dollars through payroll. The plan is the pre-tax wrapper around benefits you already offer.",
  },
  {
    category: "About the plan",
    question: "What is the difference between a Section 125 plan and a Premium Only Plan (POP)?",
    answer:
      "A POP is the simplest type of Section 125 plan. It runs only insurance premiums through the pre-tax wrapper. A full cafeteria plan can also include flexible spending accounts, dependent care, and other qualified elections.",
  },
  {
    category: "About the plan",
    question: "Which benefits can be paid pre-tax under Section 125?",
    answer:
      "Common ones include group health, dental, and vision premiums, Health Savings Account contributions, health and dependent care flexible spending accounts, and group term life within IRS limits. We map your benefits to the qualifying categories during setup.",
  },
  {
    category: "About the plan",
    question: "What do employees gain from a Section 125 plan?",
    answer:
      "Employees pay for qualified benefits with pre-tax dollars, so they keep more of each paycheck for the same coverage, and they gain access to a clear, well-run benefits program.",
  },
  {
    category: "About the plan",
    question: "What does the employer gain?",
    answer:
      "A stronger, more competitive benefits offering that helps with recruiting and retention, delivered for one predictable monthly fee with the compliance handled. Because the deductions are pre-tax, payroll costs come down as well.",
  },
  {
    category: "About the plan",
    question: "Does a Section 125 plan replace our health insurance?",
    answer:
      "No. The plan does not replace your insurance or benefits. It is the pre-tax mechanism that lets employees pay for the benefits you already offer with untaxed dollars.",
  },
  {
    category: "About the plan",
    question: "Can we keep our current benefits and carriers?",
    answer:
      "Yes. The plan works alongside your existing benefits and carriers. We complement what you already offer rather than replace it.",
  },
  {
    category: "About the plan",
    question: "Do employees have to participate?",
    answer:
      "No. Participation is the employee's choice. We run plain-language enrollment so each person can decide with a clear picture of their options.",
  },
  // Eligibility and enrollment
  {
    category: "Eligibility and enrollment",
    question: "Who is eligible to participate?",
    answer:
      "Eligibility is set in the plan design, which we build with you. In general, employees who meet the plan's service and hours requirements can participate.",
  },
  {
    category: "Eligibility and enrollment",
    question: "How does enrollment work?",
    answer:
      "We run plain-language enrollment and employee education, in person and across shifts where needed, so participation is high and your team is not left answering questions.",
  },
  {
    category: "Eligibility and enrollment",
    question: "Can employees change their elections mid-year?",
    answer:
      "Section 125 elections are generally locked for the plan year, with changes allowed for qualifying life events such as marriage, birth, or a change in employment status. We help manage those changes when they happen.",
  },
  {
    category: "Eligibility and enrollment",
    question: "Can part-time or seasonal employees participate?",
    answer:
      "It depends on the eligibility rules in your plan design. We set those rules with you and then enroll everyone who qualifies.",
  },
  // Cost and fees
  {
    category: "Cost and fees",
    question: "How much does a Section 125 plan cost?",
    answer:
      "One monthly administration fee covers everything: the plan document, annual nondiscrimination testing, payroll coordination, support, and the platform. We provide a clear figure for your roster, usually within one business day.",
  },
  {
    category: "Cost and fees",
    question: "Are there setup fees?",
    answer:
      "No. There are no setup fees and no separate charges for plan documents or testing. The monthly fee covers the full service.",
  },
  {
    category: "Cost and fees",
    question: "How is the fee structured?",
    answer:
      "The fee is a small percentage of the pre-tax deductions run through the plan, billed as one predictable monthly amount. We explain exactly how it applies to your group before you commit.",
  },
  {
    category: "Cost and fees",
    question: "Are there hidden or annual filing fees?",
    answer:
      "No. There are no surprise costs, no separate nondiscrimination testing fees, and no annual filing fees built on top. Everything is in the monthly fee.",
  },
  // Compliance
  {
    category: "Compliance",
    question: "What compliance documents does a Section 125 plan require?",
    answer:
      "A written plan document, an adoption agreement, and per-employee salary reduction forms, plus annual nondiscrimination testing. We prepare, file, and maintain all of these for you.",
  },
  {
    category: "Compliance",
    question: "What is nondiscrimination testing?",
    answer:
      "Nondiscrimination testing confirms that the plan's pre-tax benefits reach the whole workforce, not just owners and highly compensated employees. The IRS requires it each plan year.",
  },
  {
    category: "Compliance",
    question: "Do you handle the nondiscrimination testing?",
    answer:
      "Yes. We run the required testing every plan year and flag anything that needs attention while there is still time to act, so the plan stays in good standing.",
  },
  {
    category: "Compliance",
    question: "What happens if a plan trends toward failing a test?",
    answer:
      "We flag it during the year rather than at year end, which gives you time to adjust eligibility, expand participation, or restructure before the plan year closes.",
  },
  {
    category: "Compliance",
    question: "Do we need to file a Form 5500?",
    answer:
      "It depends on the benefits wrapped in the plan and your group size. We tell you exactly what stays on your side and provide the data you need to file anything that is your responsibility.",
  },
  {
    category: "Compliance",
    question: "How are records kept for an audit?",
    answer:
      "Every plan document, signed form, and election is stored securely and kept audit-ready, so if your plan is ever reviewed the paperwork is already in order.",
  },
  // Payroll
  {
    category: "Payroll",
    question: "Do you work with our payroll provider?",
    answer:
      "Yes. We coordinate with your existing payroll vendor. Roster updates and deduction files are handled on a schedule we manage, so the numbers on payroll stay right.",
  },
  {
    category: "Payroll",
    question: "How are the pre-tax deductions set up on payroll?",
    answer:
      "After enrollment, we provide the deduction amounts and coordinate with your payroll so each participating employee's election is taken out pre-tax on the correct schedule.",
  },
  {
    category: "Payroll",
    question: "Does it work with weekly, biweekly, semimonthly, or monthly payroll?",
    answer:
      "Yes. We design the plan around your pay frequency, whatever it is, so deductions land correctly every cycle.",
  },
  {
    category: "Payroll",
    question: "What is our role each month?",
    answer:
      "Almost nothing. Your team sends a census at setup and when the team changes, signs the agreements, and confirms the roster each month. Benefit Builder handles everything else.",
  },
  // Getting started
  {
    category: "Getting started",
    question: "How long does it take to set up a plan?",
    answer:
      "Most plans move quickly. After a short discovery call we design the plan around your workforce and pay frequency, prepare the documents for signature, and schedule enrollment.",
  },
  {
    category: "Getting started",
    question: "How many employees do we need?",
    answer:
      "Plans work across a wide range of sizes. We administer Section 125 plans for teams of around ten as well as groups of several hundred.",
  },
  {
    category: "Getting started",
    question: "Can our insurance agent or broker stay involved?",
    answer:
      "Yes. Agents and brokers keep 100% of their commissions and stay the agent of record. Benefit Builder runs the Section 125 administration, compliance, and employee education.",
  },
  {
    category: "Getting started",
    question: "Is Benefit Builder local, and how do we get a quote?",
    answer:
      "We are a Texas-based, family-run team that serves employers nationwide, and owners answer the phone. To get a quote, run your roster on the plan calculator or contact us and we will prepare a figure for your team.",
  },
];

// A relevant general subset to round out each industry page to ~12 FAQs without
// pulling the full 30. These are the questions employers ask most.
export const INDUSTRY_GENERAL_SUBSET: Faq[] = GENERAL_FAQS.filter((f) =>
  [
    "What is a Section 125 cafeteria plan?",
    "Which benefits can be paid pre-tax under Section 125?",
    "How much does a Section 125 plan cost?",
    "Are there setup fees?",
    "How does enrollment work?",
    "What compliance documents does a Section 125 plan require?",
    "Do you handle the nondiscrimination testing?",
    "What is our role each month?",
    "How long does it take to set up a plan?",
    "Can our insurance agent or broker stay involved?",
  ].includes(f.question),
);
