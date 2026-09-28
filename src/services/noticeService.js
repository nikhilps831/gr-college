import { NOTICES } from '../data/noticesData';

const delay = (ms = 150) => new Promise((resolve) => setTimeout(resolve, ms));

export const noticeService = {
  async getAllNotices() {
    await delay();
    return [...NOTICES];
  },

  async getLatestNotices(limit = 4) {
    await delay();
    return NOTICES.slice(0, limit);
  },

  async filterNotices({ category, search }) {
    await delay();
    return NOTICES.filter((item) => {
      const matchCategory = !category || category === 'All' || item.category.toLowerCase() === category.toLowerCase();
      const matchSearch = !search || item.title.toLowerCase().includes(search.toLowerCase()) || item.summary.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  },

  async createNotice(noticeData) {
    await delay();
    const newNotice = {
      id: `n-${Date.now()}`,
      publishDate: new Date().toISOString().split('T')[0],
      isNew: true,
      ...noticeData
    };
    NOTICES.unshift(newNotice);
    return newNotice;
  },

  async deleteNotice(id) {
    await delay();
    const index = NOTICES.findIndex((n) => n.id === id);
    if (index !== -1) {
      return NOTICES.splice(index, 1)[0];
    }
    throw new Error('Notice not found');
  }
};
