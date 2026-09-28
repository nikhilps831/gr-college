import { RESULTS } from '../data/resultsData';

const delay = (ms = 150) => new Promise((resolve) => setTimeout(resolve, ms));

export const resultService = {
  async getAllResults() {
    await delay();
    return [...RESULTS];
  },

  async filterResults({ academicYear, program, search }) {
    await delay();
    return RESULTS.filter((item) => {
      const matchYear = !academicYear || academicYear === 'All' || item.academicYear === academicYear;
      const matchProgram = !program || program === 'All' || item.program.toLowerCase() === program.toLowerCase();
      const matchSearch = !search || item.title.toLowerCase().includes(search.toLowerCase()) || item.class.toLowerCase().includes(search.toLowerCase());
      return matchYear && matchProgram && matchSearch;
    });
  },

  async createResult(resultData) {
    await delay();
    const newResult = {
      id: `res-${Date.now()}`,
      declaredDate: new Date().toISOString().split('T')[0],
      ...resultData
    };
    RESULTS.unshift(newResult);
    return newResult;
  },

  async deleteResult(id) {
    await delay();
    const index = RESULTS.findIndex((r) => r.id === id);
    if (index !== -1) return RESULTS.splice(index, 1)[0];
    throw new Error('Result entry not found');
  }
};
