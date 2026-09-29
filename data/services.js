import catalogue from "./services.json" with { type: "json" };

export const services = catalogue.services;
export const serviceListing = catalogue.listing;

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}
