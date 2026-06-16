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
  {
    slug: "healthcare",
    name: "Healthcare",
    noun: "healthcare and medical practices",
    h1: "Section 125 Plans for Healthcare and Medical Practices",
    metaDescription:
      "Section 125 cafeteria plans for clinics, dental offices, physician practices, and home care. A pre-tax benefit that helps recruit and keep clinical staff.",
    intro:
      "Clinics, dental offices, physician practices, and home care employers compete hard for clinical talent. A Section 125 cafeteria plan lets you offer stronger pre-tax benefits that help recruit and retain staff, with enrollment and compliance handled.",
    why: "Providers, clinical staff, and front office teams all value benefits they can actually use. Under a Section 125 plan, your people pay for qualified benefits with pre-tax dollars, so they keep more of each paycheck and your practice competes for talent in a tight market. Benefit Builder builds the plan, runs enrollment, and handles the documents and annual testing so your office can stay focused on patients.",
    highlights: [
      { title: "Clinical and administrative staff", body: "Providers, nurses, technicians, and front office all gain access to pre-tax benefits." },
      { title: "Fits your practice payroll", body: "We coordinate with your existing payroll so deductions land correctly every cycle." },
      { title: "Retention in a tight talent market", body: "A modern benefit that helps you keep experienced clinical staff." },
    ],
    faq: [
      { question: "Will it work with our practice management or payroll system?", answer: "Yes. We coordinate with your existing payroll vendor and pay schedule. Roster and deduction files are handled on a schedule we manage." },
      { question: "Can providers and staff both participate?", answer: "Eligible providers and staff can participate. We run plain-language enrollment so everyone understands their options." },
      { question: "Who handles the compliance side?", answer: "Benefit Builder prepares and files the plan documents, salary reduction forms, and annual nondiscrimination testing." },
    ],
  },
  {
    slug: "restaurants-hospitality",
    name: "Restaurants and Hospitality",
    noun: "restaurants and hospitality employers",
    h1: "Section 125 Plans for Restaurants and Hospitality",
    metaDescription:
      "Section 125 cafeteria plans for restaurants, bars, hotels, and food service. A pre-tax benefit that helps retain hourly and tipped staff in a high-turnover field.",
    intro:
      "Restaurants, bars, hotels, and food service run on tight margins and high turnover. A Section 125 cafeteria plan gives your team valuable pre-tax benefits that help them stay, with enrollment and compliance handled for you.",
    why: "Hourly and tipped staff value real benefits, and a stronger offer is one of the few things that moves retention in hospitality. Under a Section 125 plan, your team pays for qualified benefits with pre-tax dollars, which helps you keep good people without raising labor cost. Benefit Builder sets up the plan, enrolls staff around their shifts, and keeps the compliance current.",
    highlights: [
      { title: "Built for hourly and tipped staff", body: "We design enrollment and education around how your team is paid and scheduled." },
      { title: "Enrollment across shifts", body: "Front of house, back of house, days and nights. We reach everyone so participation stays high." },
      { title: "A retention edge", body: "A benefit that helps you keep reliable staff in a field defined by turnover." },
    ],
    faq: [
      { question: "Can hourly and tipped employees participate?", answer: "Yes. We run plain-language enrollment for your whole eligible team, designed around hourly and tipped pay." },
      { question: "How does enrollment work across shifts?", answer: "We schedule enrollment around your shifts so front and back of house both get the chance to participate." },
      { question: "Does this work for a single location?", answer: "Yes. We administer plans for single locations as well as multi-unit operators." },
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    noun: "retail employers",
    h1: "Section 125 Plans for Retail Employers",
    metaDescription:
      "Section 125 cafeteria plans for stores, shops, and grocers. Offer pre-tax benefits that help recruit and retain staff, with one monthly fee and no paperwork.",
    intro:
      "Stores, shops, and grocers compete for reliable staff against larger chains. A Section 125 cafeteria plan lets you offer pre-tax benefits that help you recruit and retain, with one monthly fee and no paperwork on your side.",
    why: "Retail teams notice when an employer offers real benefits. Under a Section 125 plan, your staff pays for qualified benefits with pre-tax dollars, so they keep more of each paycheck and your store stands out as a place to work. Benefit Builder runs the plan, enrollment, and compliance, so your managers can stay on the floor.",
    highlights: [
      { title: "Hourly and seasonal staff", body: "We design enrollment around how retail teams are scheduled and paid." },
      { title: "Single or multi-location", body: "One store or a chain, the plan and administration work the same way." },
      { title: "Stand out as an employer", body: "A benefit that helps you compete for staff against larger retailers." },
    ],
    faq: [
      { question: "Is this worth it for a small store?", answer: "Yes. We administer plans for small shops as well as multi-location retailers, with the same bundled compliance." },
      { question: "Can part-time staff participate?", answer: "Eligibility depends on plan design, which we set up with you. We then enroll everyone who qualifies." },
      { question: "What does it cost?", answer: "One monthly fee covers the plan document, testing, support, and the platform. There are no setup fees." },
    ],
  },
  {
    slug: "transportation-logistics",
    name: "Transportation and Logistics",
    noun: "transportation and logistics employers",
    h1: "Section 125 Plans for Transportation and Logistics",
    metaDescription:
      "Section 125 cafeteria plans for trucking, delivery, and logistics employers. A pre-tax benefit that helps recruit and retain drivers and support staff.",
    intro:
      "Trucking, delivery, and logistics employers compete hard for drivers. A Section 125 cafeteria plan gives drivers and support staff valuable pre-tax benefits that help keep them, with enrollment and compliance handled.",
    why: "Driver turnover is expensive, and a stronger benefits offering is a real reason to stay. Under a Section 125 plan, your drivers and office staff pay for qualified benefits with pre-tax dollars, so they keep more of each paycheck and your fleet competes for experienced people. Benefit Builder builds the plan, runs enrollment, and handles compliance so dispatch can stay focused on the road.",
    highlights: [
      { title: "Drivers and dispatch", body: "Over-the-road and local drivers, plus dispatch and office staff, all gain access." },
      { title: "Works with your payroll", body: "We coordinate with your existing payroll vendor and pay schedule." },
      { title: "Driver retention", body: "A benefit that helps you hold onto experienced drivers in a competitive market." },
    ],
    faq: [
      { question: "Can over-the-road drivers enroll?", answer: "Yes. We run enrollment in a way that reaches drivers who are not in the office, so everyone eligible can participate." },
      { question: "Will it fit our payroll runs?", answer: "Yes. We coordinate with your payroll vendor and pay frequency so deductions are handled correctly." },
      { question: "How fast can we start?", answer: "Most plans move quickly. After a short discovery call we design the plan and schedule enrollment." },
    ],
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    noun: "agriculture and farm employers",
    h1: "Section 125 Plans for Agriculture and Farm Employers",
    metaDescription:
      "Section 125 cafeteria plans for farms, ranches, and ag businesses. A pre-tax benefit that helps keep skilled crews, with the plan and compliance handled.",
    intro:
      "Farms, ranches, and agriculture businesses run lean and value benefits that help keep good workers. A Section 125 cafeteria plan lets your team access pre-tax benefits, with the plan, enrollment, and compliance handled for you.",
    why: "Skilled, dependable workers are hard to replace in agriculture. Under a Section 125 plan, your crew pays for qualified benefits with pre-tax dollars, so they keep more of each paycheck and you have a stronger offer when you hire. Benefit Builder builds the plan around how you pay, runs enrollment, and keeps the compliance current.",
    highlights: [
      { title: "Seasonal and year-round crews", body: "We design the plan around your workforce and pay calendar." },
      { title: "Hands-on, rural-friendly support", body: "A Texas-based team that answers the phone, not a national call center." },
      { title: "Keep skilled hands", body: "A benefit that helps you retain experienced workers season to season." },
    ],
    faq: [
      { question: "Does this work for a seasonal workforce?", answer: "Yes. We design eligibility and enrollment around your workforce and pay schedule." },
      { question: "Will it fit weekly or irregular payroll?", answer: "Yes. We coordinate with your payroll so deductions are handled on the right schedule." },
      { question: "How much administration is on us?", answer: "Very little. After setup, Benefit Builder runs the plan, compliance, and employee education." },
    ],
  },
  {
    slug: "automotive",
    name: "Automotive",
    noun: "automotive employers",
    h1: "Section 125 Plans for Automotive Businesses",
    metaDescription:
      "Section 125 cafeteria plans for dealerships, body shops, and repair shops. A pre-tax benefit that helps recruit and retain skilled techs and sales staff.",
    intro:
      "Dealerships, body shops, and repair shops compete for skilled technicians and sales staff. A Section 125 cafeteria plan lets you offer pre-tax benefits that help recruit and retain, with enrollment and compliance handled.",
    why: "Good technicians and salespeople have options, and a stronger benefits offering helps you keep them. Under a Section 125 plan, your team pays for qualified benefits with pre-tax dollars, so they keep more of each paycheck and your shop competes with larger operators. Benefit Builder stands up the plan, runs enrollment, and handles the documents and testing.",
    highlights: [
      { title: "Techs, sales, and service", body: "Service technicians, sales, and office staff all gain access to pre-tax benefits." },
      { title: "Single store or group", body: "One location or a dealer group, the plan works the same way." },
      { title: "Keep skilled technicians", body: "A benefit that helps you hold onto experienced techs in a tight labor market." },
    ],
    faq: [
      { question: "Can flat-rate or commission staff participate?", answer: "Yes. We design enrollment around how your team is paid so everyone eligible can take part." },
      { question: "Does this work for a single shop?", answer: "Yes. We administer plans for single shops as well as dealer groups." },
      { question: "Who handles compliance?", answer: "Benefit Builder prepares and files the plan documents, salary reduction forms, and annual testing." },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    noun: "professional services firms",
    h1: "Section 125 Plans for Professional Services Firms",
    metaDescription:
      "Section 125 cafeteria plans for accounting, legal, insurance, title, and real estate offices. A pre-tax benefit that helps attract and keep talent.",
    intro:
      "Accounting firms, law offices, insurance agencies, title companies, and real estate offices want to attract and keep good people. A Section 125 cafeteria plan adds a valuable pre-tax benefit with one monthly fee and almost no administrative load.",
    why: "Professional teams expect real benefits, and a stronger offer helps you compete for talent. Under a Section 125 plan, your staff pays for qualified benefits with pre-tax dollars, so they keep more of each paycheck and your firm stands out as an employer. Benefit Builder builds the plan, runs enrollment, and keeps the compliance current, so your team stays focused on clients.",
    highlights: [
      { title: "Built for white-collar teams", body: "A clean, professional benefit for office and client-facing staff." },
      { title: "Simple administration", body: "After setup, the plan runs on our side with nothing on your office." },
      { title: "Compete for talent", body: "A benefit that strengthens your offer when you are hiring." },
    ],
    faq: [
      { question: "Is a plan worth it for a small firm?", answer: "Yes. We administer plans for small offices as well as larger firms, with the same bundled compliance." },
      { question: "How much work is on our office?", answer: "Very little. Your team sends a census, signs the agreements, and confirms the roster monthly. We handle the rest." },
      { question: "Can our insurance agent stay involved?", answer: "Yes. Agents keep their commissions. We run the Section 125 administration and compliance." },
    ],
  },
  {
    slug: "nonprofits",
    name: "Nonprofits and Faith-Based",
    noun: "nonprofits and faith-based organizations",
    h1: "Section 125 Plans for Nonprofits and Faith-Based Organizations",
    metaDescription:
      "Section 125 cafeteria plans for nonprofits, churches, ministries, and charities. A pre-tax benefit for staff on a tight budget, with compliance handled.",
    intro:
      "Nonprofits, churches, ministries, and charities want to care for their people without straining a tight budget. A Section 125 cafeteria plan lets staff access pre-tax benefits, with the plan documents, testing, and enrollment handled for you.",
    why: "Mission-driven organizations work hard to retain dedicated staff. Under a Section 125 plan, your people pay for qualified benefits with pre-tax dollars, so they keep more of each paycheck and you strengthen your benefits offering without a large new cost. Benefit Builder builds the plan, runs enrollment, and keeps the compliance current year over year.",
    highlights: [
      { title: "A budget-friendly benefit", body: "One predictable monthly fee, with no setup charge and no separate testing fee." },
      { title: "Staff and ministry teams", body: "Office, program, and ministry staff all gain access to pre-tax benefits." },
      { title: "Compliance handled", body: "Plan documents and annual nondiscrimination testing are prepared and filed for you." },
    ],
    faq: [
      { question: "Can a small organization use a plan?", answer: "Yes. We administer plans for small staffs as well as larger organizations, with the same bundled compliance." },
      { question: "Does this work with our pay schedule?", answer: "Yes. We design the plan around how your organization pays, whether monthly, semimonthly, or biweekly." },
      { question: "Who handles the paperwork?", answer: "Benefit Builder does. Plan documents, salary reduction forms, and annual testing are prepared and filed for you." },
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    noun: "construction and building employers",
    h1: "Section 125 Plans for Construction Companies",
    metaDescription:
      "Section 125 cafeteria plans for general contractors and builders. A pre-tax benefit that helps recruit and keep skilled crews, with compliance handled.",
    intro:
      "General contractors and builders compete for skilled crews on every job. A Section 125 cafeteria plan lets you offer pre-tax benefits that help recruit and keep workers, with enrollment and compliance handled for you.",
    why: "Field crews and office staff both value benefits they can use, and a stronger offer helps you hold a good team together. Under a Section 125 plan, your people pay for qualified benefits with pre-tax dollars, so they keep more of each paycheck and your company competes for skilled labor. Benefit Builder builds the plan, runs enrollment, and handles the documents and testing so your team can stay on the job.",
    highlights: [
      { title: "Field and office", body: "Crews, foremen, estimators, and office staff all gain access to pre-tax benefits." },
      { title: "Works with your payroll", body: "We coordinate with your payroll vendor and pay schedule, including weekly runs." },
      { title: "Crew retention", body: "A benefit that helps you keep skilled workers from job to job." },
    ],
    faq: [
      { question: "How is this different from a plan for the trades?", answer: "It is the same Section 125 plan, tuned for general contractors and builders. We also serve service trades like HVAC and electrical." },
      { question: "Will it work with weekly payroll?", answer: "Yes. We coordinate with your payroll so deductions land correctly, including weekly and biweekly runs." },
      { question: "How many employees do we need?", answer: "Plans work across a wide range of sizes, from small crews to larger companies." },
    ],
  },
  {
    slug: "property-management",
    name: "Property Management",
    noun: "property management companies",
    h1: "Section 125 Plans for Property Management Companies",
    metaDescription:
      "Section 125 cafeteria plans for property managers, apartment communities, and real estate operators. A pre-tax benefit that helps retain on-site and office staff.",
    intro:
      "Property managers, apartment communities, and real estate operators want to retain reliable on-site and office staff. A Section 125 cafeteria plan adds a valuable pre-tax benefit with one monthly fee and no paperwork on your side.",
    why: "On-site managers, leasing, and maintenance staff value real benefits, and turnover at a property is costly. Under a Section 125 plan, your team pays for qualified benefits with pre-tax dollars, so they keep more of each paycheck and you strengthen your offer when you hire. Benefit Builder builds the plan, runs enrollment, and keeps the compliance current.",
    highlights: [
      { title: "On-site and office staff", body: "Property managers, leasing agents, and maintenance teams all gain access." },
      { title: "Multi-property friendly", body: "One property or a portfolio, the plan and administration work the same way." },
      { title: "Reduce turnover", body: "A benefit that helps you keep dependable staff across your properties." },
    ],
    faq: [
      { question: "Can on-site maintenance staff participate?", answer: "Yes. We run enrollment for your whole eligible team, including on-site and maintenance staff." },
      { question: "Does this work across multiple properties?", answer: "Yes. We administer plans for single properties as well as multi-property operators." },
      { question: "Who handles compliance?", answer: "Benefit Builder prepares and files the plan documents, salary reduction forms, and annual testing." },
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
