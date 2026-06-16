export type RouteDescriptor = {
  path: string;
  title: string;
  description: string;
  ogImage: string;
  priority: number;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  includeInSitemap: boolean;
  noindex?: boolean;
};

// Location pages (the /locations silo) supply their own descriptors, appended to
// ROUTES below so the sitemap and OG generators (which loop ROUTES) include them.
import { locationRouteDescriptors } from "../locations/locations";
import { industryRouteDescriptors } from "../industries/industries";

const STATIC_ROUTES: RouteDescriptor[] = [
  {
    path: "/",
    title: "Pre-Tax Benefits Administration | Benefit Builder LLC",
    description:
      "Section 125 cafeteria plan administration: valuable pre-tax benefits for your team, a stronger benefits offering, and full compliance handled. Texas-based, all-inclusive monthly fee.",
    ogImage: "/og/og-home.png",
    priority: 1.0,
    changefreq: "weekly",
    includeInSitemap: true,
  },
  {
    path: "/services",
    title: "Benefits Services for Employers & Brokers | Benefit Builder",
    description:
      "Section 125, supplemental benefits, payroll integration, NDT, and compliance services for employers and brokers nationwide.",
    ogImage: "/og/og-services.png",
    priority: 0.9,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/services/employers",
    title: "Pre-Tax Benefits for Employers | Benefit Builder LLC",
    description:
      "Give your team valuable pre-tax benefits with a Section 125 cafeteria plan, fully administered and IRS-compliant with bundled NDT and plan documents. Texas-based.",
    ogImage: "/og/og-employers.png",
    priority: 0.9,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/services/brokers",
    title: "Benefits Partner Program for Brokers | Benefit Builder LLC",
    description:
      "Refer or co-broker pre-tax benefits with us. Compliance handled, you keep your commissions, employers happier. Texas brokers welcome.",
    ogImage: "/og/og-brokers.png",
    priority: 0.9,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/platform",
    title: "Benefits Administration Platform | Benefit Builder LLC",
    description:
      "Benefit Builder runs your Section 125 plan on our in-house platform. You send a census, sign the agreements, and verify your roster monthly. We handle the rest.",
    ogImage: "/og/og-platform.png",
    priority: 0.8,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/savings-calculator",
    title: "Section 125 Plan Calculator | Benefit Builder LLC",
    description:
      "See what a Section 125 cafeteria plan could offer your team. Estimate the pre-tax benefit and take-home impact in seconds. Free, no signup, 2026 rates built in.",
    ogImage: "/og/og-calculator.png",
    priority: 0.8,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/compliance",
    title: "Section 125 Compliance Bundled Free | Benefit Builder LLC",
    description:
      "Plan document, adoption agreement, salary reduction, annual NDT, and audit-ready records included in your monthly fee.",
    ogImage: "/og/og-compliance.png",
    priority: 0.8,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/about",
    title: "About Benefit Builder LLC | Texas Benefits Administration",
    description:
      "Family-run, Texas-based benefits administration. Built around plain-language education for employees and predictable cost for leaders.",
    ogImage: "/og/og-about.png",
    priority: 0.7,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/partners",
    title: "Become a Broker Partner | Benefit Builder LLC",
    description:
      "Join the Benefit Builder broker partner network. Co-branded enrollment materials, bundled NDT and compliance support, and you keep 100% of your commissions.",
    ogImage: "/og/og-partners.png",
    priority: 0.7,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/contact",
    title: "Contact Benefit Builder LLC | Quotes Within 1 Business Day",
    description:
      "Talk to a Texas benefits advisor. Quotes within one business day. (817) 296-5547 or admin@benefitbuilderllc.com.",
    ogImage: "/og/og-contact.png",
    priority: 0.8,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/legal/privacy",
    title: "Privacy Policy | Benefit Builder LLC",
    description:
      "How Benefit Builder LLC collects, uses, and protects your personal data and our data retention practices, plus your privacy rights. CCPA and GDPR aligned.",
    ogImage: "/og/og-privacy.png",
    priority: 0.3,
    changefreq: "yearly",
    includeInSitemap: true,
  },
  {
    path: "/legal/terms",
    title: "Terms of Service | Benefit Builder LLC",
    description:
      "Terms of service for the Benefit Builder LLC website and services: disclaimers, limitation of liability, intellectual property, and governing law.",
    ogImage: "/og/og-terms.png",
    priority: 0.3,
    changefreq: "yearly",
    includeInSitemap: true,
  },
  {
    path: "/blog",
    title: "Section 125 Blog and Guides | Benefit Builder LLC",
    description:
      "Plain-language guides on Section 125 pre-tax benefits, FICA savings, and compliance, for employers and the agents who serve them.",
    ogImage: "/og/og-blog.png",
    priority: 0.7,
    changefreq: "weekly",
    includeInSitemap: true,
  },
];

export const ROUTES: RouteDescriptor[] = [
  ...STATIC_ROUTES,
  ...industryRouteDescriptors(),
  ...locationRouteDescriptors(),
];

export function findRoute(path: string): RouteDescriptor | undefined {
  return ROUTES.find((r) => r.path === path);
}
