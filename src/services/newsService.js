import { NEWS_ARTICLES } from '../data/newsEventsData';

const delay = (ms = 150) => new Promise((resolve) => setTimeout(resolve, ms));

export const newsService = {
  async getAllNews() {
    await delay();
    return [...NEWS_ARTICLES];
  },

  async getNewsBySlug(slug) {
    await delay();
    const article = NEWS_ARTICLES.find((item) => item.slug === slug);
    if (!article) throw new Error(`News article with slug "${slug}" not found`);
    return { ...article };
  },

  async createNews(newsData) {
    await delay();
    const newArticle = {
      id: `news-${Date.now()}`,
      slug: newsData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      publishDate: new Date().toISOString().split('T')[0],
      ...newsData
    };
    NEWS_ARTICLES.unshift(newArticle);
    return newArticle;
  },

  async deleteNews(id) {
    await delay();
    const index = NEWS_ARTICLES.findIndex((n) => n.id === id);
    if (index !== -1) return NEWS_ARTICLES.splice(index, 1)[0];
    throw new Error('News item not found');
  }
};
