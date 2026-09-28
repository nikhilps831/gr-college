import { DOWNLOADS } from '../data/downloadsData';

const delay = (ms = 150) => new Promise((resolve) => setTimeout(resolve, ms));

export const downloadService = {
  async getAllDownloads() {
    await delay();
    return [...DOWNLOADS];
  },

  async filterDownloads({ category, year, search }) {
    await delay();
    return DOWNLOADS.filter((item) => {
      const matchCategory = !category || category === 'All' || item.category.toLowerCase() === category.toLowerCase();
      const matchYear = !year || year === 'All' || item.academicYear === year;
      const matchSearch = !search || item.title.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchYear && matchSearch;
    });
  },

  async createDownload(data) {
    await delay();
    const newDoc = {
      id: `doc-${Date.now()}`,
      publishedDate: new Date().toISOString().split('T')[0],
      ...data
    };
    DOWNLOADS.unshift(newDoc);
    return newDoc;
  },

  async deleteDownload(id) {
    await delay();
    const index = DOWNLOADS.findIndex((d) => d.id === id);
    if (index !== -1) return DOWNLOADS.splice(index, 1)[0];
    throw new Error('Download document not found');
  }
};
