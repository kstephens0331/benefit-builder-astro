// Industry landing page data. Canonical source for the /industries silo.
//
// Each vertical maps to employer types Benefit Builder actually serves, so the
// content is specific and fact-based rather than thin copy. Benefit-led framing:
// the Section 125 cafeteria plan and the pre-tax benefits are the product. The
// tax/payroll effect is only ever a rolled-in detail, never the selling point.

import type { RouteDescriptor } from "../seo/routes";

export type IndustryLoc = {
  slug: string; // url segment, e.g. "manufacturing"
  name: string; // "Manufacturing"
  noun: string; // "manufacturers"
  h1: string;
  metaDescription: string; // <=160 chars, unique
  intro: string; // unique opening paragraph
  why: string; // why a Section 125 plan fits this industry
  highlights: { title: string; body: string }[]; // 3 industry-specific cards
  faq: { question: string; answer: string }[];
};

export const INDUSTRIES: IndustryLoc[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    noun: "manufacturers",
    h1: "Section 125 Plans for Manufacturers",
    metaDescription:
      "Section 125 cafeteria plans for manufacturers. Offer stronger pre-tax benefits to recruit and retain skilled labor, with enrollment and compliance handled.",
    intro:
      "Manufacturers compete for skilled labor on tight margins. A Section 125 cafeteria plan lets you offer stronger pre-tax benefits that help you recruit and keep good people, without adding cost or paperwork to a lean front office.",
    why: "Production teams care about take-home pay and benefits they can actually use. Under a Section 125 plan, your employees pay for qualified benefits with pre-tax dollars, so they get more from every paycheck and your offer holds up against larger shops. Benefit Builder builds the plan, runs enrollment right on the floor, and handles every compliance piece, so your office stays focused on the work.",
    highlights: [
      { title: "Built for hourly, weekly payroll", body: "We work with your existing payroll vendor and pay calendar, including weekly and biweekly runs, so deductions land correctly every cycle." },
      { title: "Floor-level enrollment", body: "We meet employees where they work, in plain language, so participation is high and HR is not left answering questions." },
      { title: "A real recruiting and retention edge", body: "A modern benefit that costs one predictable monthly fee, helping you win and keep skilled workers." },
    ],
    faq: [
      { question: "Will a Section 125 plan work with our payroll system?", answer: "Yes. We coordinate with your existing payroll vendor and pay frequency. Roster updates and deduction files are handled on a schedule we manage." },
      { question: "How does enrollment work for a shop floor?", answer: "We run plain-language enrollment on site and across shifts so every employee understands their options. You are not left running the sessions." },
      { question: "How many employees do we need to start?", answer: "Plans work at a wide range of sizes. We administer Section 125 plans for shops with a handful of employees up to a few hundred." },
    ],
  },
  {
    slug: "senior-care",
    name: "Senior Care",
    noun: "senior care and nursing employers",
    h1: "Section 125 Plans for Senior Care and Nursing Employers",
    metaDescription:
      "Section 125 cafeteria plans for nursing homes, assisted living, and hospice. A pre-tax benefit that helps retain caregivers, with enrollment and compliance handled.",
    intro:
      "Turnover is the constant pressure in senior care. A Section 125 cafeteria plan gives caregivers valuable pre-tax benefits that help them stay, while we handle the plan, enrollment across every shift, and all of the compliance.",
    why: "Nursing homes, assisted living, hospice, and home care run lean and never stop. A Section 125 plan lets your staff pay for qualified benefits with pre-tax dollars, which strengthens your retention story without adding work for an already-stretched office. Benefit Builder sets up the plan, enrolls caregivers around their shifts, and keeps the documents and annual testing current.",
    highlights: [
      { title: "Enrollment around every shift", body: "Days, nights, and weekends. We reach caregivers where and when they work so participation stays high." },
      { title: "A retention tool that runs itself", body: "Once the plan is set up, administration happens on our side. Nothing lands back on your office." },
      { title: "Compliance kept current", body: "Plan documents, salary reduction forms, and annual nondiscrimination testing are prepared and filed for you." },
    ],
    faq: [
      { question: "Can you enroll staff who work overnight or weekend shifts?", answer: "Yes. We schedule enrollment around your shifts so every eligible caregiver gets the chance to participate." },
      { question: "Does this add work for our office?", answer: "No. After setup, Benefit Builder runs the administration, compliance, and employee education. Your team stays focused on care." },
      { question: "What benefits can caregivers pay for pre-tax?", answer: "Qualified benefits such as insurance premiums and other eligible elections. We map your offerings to the qualifying categories during setup." },
    ],
  },
  {
    slug: "trades-contractors",
    name: "Trades and Contractors",
    noun: "trades and contractor businesses",
    h1: "Section 125 Plans for Trades and Contractors",
    metaDescription:
      "Section 125 cafeteria plans for HVAC, electrical, roofing, and construction businesses. Offer big-company pre-tax benefits at any size, with one monthly fee.",
    intro:
      "Good technicians have options. A Section 125 cafeteria plan lets a small shop offer the kind of benefits people expect from a large employer, with one monthly fee and no paperwork on your side.",
    why: "HVAC, electrical, roofing, plumbing, and general contractors win and lose crews on the strength of their offer. A Section 125 plan lets your team pay for qualified benefits with pre-tax dollars, so they keep more of every paycheck and your shop competes with the big names. Benefit Builder stands up the plan, runs enrollment, and bundles every compliance piece at no extra charge.",
    highlights: [
      { title: "Big-company benefits at any size", body: "The same plan documents, testing, and hands-on enrollment that larger groups get, sized for a small crew." },
      { title: "One fee, no surprises", body: "No setup fee and no separate charge for documents or testing. One monthly fee covers everything." },
      { title: "Keep your best people", body: "A competitive benefit that helps keep skilled technicians from leaving for a larger shop." },
    ],
    faq: [
      { question: "Is a Section 125 plan worth it for a small crew?", answer: "Yes. We administer plans for teams of around ten as well as larger groups, with the same bundled compliance and enrollment." },
      { question: "Are there setup or hidden fees?", answer: "No. One monthly fee covers the plan document, annual testing, support, and the platform. There are no setup or separate testing fees." },
      { question: "Can our insurance agent stay involved?", answer: "Yes. Agents keep their commissions. We run the Section 125 administration and compliance so the agent stays the agent of record." },
    ],
  },
  {
    slug: "schools-education",
    name: "Schools and Education",
    noun: "schools and education employers",
    h1: "Section 125 Plans for Schools and Education Employers",
    metaDescription:
      "Section 125 cafeteria plans for schools, charter schools, and education employers. A pre-tax benefit for faculty and support staff, with compliance handled.",
    intro:
      "Schools run on tight budgets and value benefits that help retain staff. A Section 125 cafeteria plan lets faculty and support staff access pre-tax benefits, with the plan documents, testing, and enrollment handled for you.",
    why: "Public, private, and charter schools want to take care of their people without adding administrative load. A Section 125 plan lets employees pay for qualified benefits with pre-tax dollars, strengthening your benefits offering for teachers and support staff alike. Benefit Builder builds the plan around your pay calendar, runs enrollment, and keeps the compliance current year over year.",
    highlights: [
      { title: "Works with school pay calendars", body: "Monthly, semimonthly, or biweekly. We design the plan around how your district or school actually pays." },
      { title: "Faculty and support staff", body: "Teachers, aides, office, and facilities staff all gain access to pre-tax benefits." },
      { title: "Compliance and testing included", body: "Plan documents and annual nondiscrimination testing are prepared and filed, so the plan stays in good standing." },
    ],
    faq: [
      { question: "Does this work with a monthly school pay schedule?", answer: "Yes. We design the plan around your pay calendar, whether you run monthly, semimonthly, or biweekly payroll." },
      { question: "Who at the school can participate?", answer: "Eligible faculty and support staff. We run plain-language enrollment so everyone understands their options." },
      { question: "Who handles the compliance paperwork?", answer: "Benefit Builder does. Plan documents, salary reduction forms, and annual testing are prepared and filed for you." },
    ],
  },
];

export function getIndustry(slug: string): IndustryLoc | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export function getAllIndustryPaths(): string[] {
  return INDUSTRIES.map((i) => `/industries/${i.slug}`);
}

// RouteDescriptors for the hub + every industry. Appended to ROUTES so the
// sitemap and OG generators (which both loop ROUTES) pick them up for free.
export function industryRouteDescriptors(): RouteDescriptor[] {
  const hub: RouteDescriptor = {
    path: "/industries",
    title: "Section 125 Plans by Industry | Benefit Builder LLC",
    description:
      "Section 125 cafeteria plan administration tailored to the industries we serve, from manufacturing and senior care to trades and schools.",
    ogImage: "/og/og-industries.png",
    priority: 0.7,
    changefreq: "monthly",
    includeInSitemap: true,
  };
  const pages: RouteDescriptor[] = INDUSTRIES.map((i) => ({
    path: `/industries/${i.slug}`,
    title: `${i.h1} | Benefit Builder LLC`,
    description: i.metaDescription,
    ogImage: `/og/og-industry-${i.slug}.png`,
    priority: 0.7,
    changefreq: "monthly",
    includeInSitemap: true,
  }));
  return [hub, ...pages];
}
