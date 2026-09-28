import { UPCOMING_EVENTS } from '../data/newsEventsData';

const delay = (ms = 150) => new Promise((resolve) => setTimeout(resolve, ms));

export const eventService = {
  async getAllEvents() {
    await delay();
    return [...UPCOMING_EVENTS];
  },

  async getEventBySlug(slug) {
    await delay();
    const event = UPCOMING_EVENTS.find((item) => item.slug === slug);
    if (!event) throw new Error(`Event with slug "${slug}" not found`);
    return { ...event };
  },

  async createEvent(eventData) {
    await delay();
    const newEvent = {
      id: `evt-${Date.now()}`,
      slug: eventData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      ...eventData
    };
    UPCOMING_EVENTS.unshift(newEvent);
    return newEvent;
  },

  async deleteEvent(id) {
    await delay();
    const index = UPCOMING_EVENTS.findIndex((e) => e.id === id);
    if (index !== -1) return UPCOMING_EVENTS.splice(index, 1)[0];
    throw new Error('Event not found');
  }
};
