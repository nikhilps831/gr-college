import { GALLERY_ITEMS, GALLERY_ALBUMS } from '../data/galleryData';

const delay = (ms = 150) => new Promise((resolve) => setTimeout(resolve, ms));

export const galleryService = {
  async getGalleryItems() {
    await delay();
    return [...GALLERY_ITEMS];
  },

  async getGalleryAlbums() {
    await delay();
    return [...GALLERY_ALBUMS];
  },

  async filterGallery(category) {
    await delay();
    if (!category || category === 'All') return [...GALLERY_ITEMS];
    return GALLERY_ITEMS.filter((g) => g.category.toLowerCase() === category.toLowerCase());
  }
};
