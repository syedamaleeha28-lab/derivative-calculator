/** Named author used for E-E-A-T bylines and BlogPosting / Article JSON-LD. */
export const SITE_AUTHOR = {
  name: "Iftikhar ud din",
  /** Visible byline subtitle / caption. */
  role: "Professor of Mathematics, Punjab University, Pakistan",
  jobTitle: "Professor of Mathematics",
  worksFor: {
    "@type": "CollegeOrUniversity" as const,
    name: "Punjab University",
  },
} as const;

export type SiteAuthor = typeof SITE_AUTHOR;
