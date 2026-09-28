import { FACILITIES } from '../data/facilitiesData';

const delay = (ms = 150) => new Promise((resolve) => setTimeout(resolve, ms));

export const facilityService = {
  async getAllFacilities() {
    await delay();
    return [...FACILITIES];
  },

  async getFacilityBySlug(slug) {
    await delay();
    const facility = FACILITIES.find((f) => f.slug === slug);
    if (!facility) throw new Error(`Facility with slug "${slug}" not found`);
    return { ...facility };
  }
};
