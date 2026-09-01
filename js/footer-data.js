/**
 * Culvera AI — Footer content
 * ----------------------------------------------------------------------
 * Every editable string/link the footer renders lives here. Update this
 * file to change footer copy, links, or contact details anywhere on the
 * site — js/footer.js only knows how to *render* this shape, never
 * hardcodes any of the content itself.
 */
export const footerData = {
  brand: {
    name: "CULVERA AI",
    tagline: "Decision intelligence for more resilient agriculture.",
    logoSrc: "assets/images/logo-white.png",
  },

  columns: [
    {
      heading: "Explore",
      links: [
        { label: "Demo", href: "index.html#demo" },
        { label: "About", href: "about.html" },
        { label: "Research", href: "#" },
        { label: "Contact", href: "contact.html" },
      ],
    },
    {
      heading: "Research",
      links: [
        { label: "Vietnam Pilot", href: "#" },
        { label: "Research Partnerships", href: "#" },
        { label: "Technology", href: "#" },
      ],
    },
  ],

  contact: {
    heading: "Contact",
    email: "hello@culvera.ai",
    location: "[Location Placeholder]",
    linkedin: { label: "[LinkedIn Placeholder]", href: "#" },
  },

  legal: {
    holder: "Culvera AI",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
};
