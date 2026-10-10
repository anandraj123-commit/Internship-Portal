import catalogue from "./services.json" with { type: "json" };

const internshipImages = [
  "/images/internship-web-dev.jpg",
  "/images/internship-mentorship.jpg",
  "/images/internship-analytics.jpg",
  "/images/internship-teamwork.jpg",
  "/images/internship-mobile-app.jpg",
  "/images/internship-digital-marketing.jpg",
  "/images/internship-content-planning.jpg",
  "/images/internship-career-prep.jpg",
  "/images/internship-hero.jpg",
];

export const services = catalogue.services.map((service, serviceIndex) => ({
  ...service,
  media: service.media.map((media, mediaIndex) => {
    const imagePath =
      internshipImages[(serviceIndex + mediaIndex) % internshipImages.length];
    const { srcSet, sizes, ...imageMetadata } = media.image;
    return {
      ...media,
      href: imagePath,
      image: {
        ...imageMetadata,
        src: imagePath,
        width: "1536",
        height: "1024",
        alt: `${service.title} internship training`,
        title: `${service.title} internship training`,
      },
    };
  }),
}));
export const serviceListing = catalogue.listing;

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}
