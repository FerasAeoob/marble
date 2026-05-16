export const business = {
  name: "Your Marble Brand",
  phoneDisplay: "+1 (555) 123-4567",
  phoneHref: "+15551234567",
  whatsappNumber: "15551234567",
  email: "quotes@yourmarblebrand.com",
  location: "Your City, Your State",
  hours: "Monday - Saturday: 8:00 AM - 6:00 PM",
  tagline: "Premium marble, granite, porcelain, quartz, and natural stone fabrication.",
};

export const whatsappQuoteLink =
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    "Hello, I would like a quote for marble/stone work. I can send photos, drawings, or dimensions.",
  )}`;
