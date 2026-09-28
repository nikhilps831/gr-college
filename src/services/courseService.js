import { COURSES } from '../data/coursesData';

// Simulated API delay for asynchronous behavior
const delay = (ms = 150) => new Promise((resolve) => setTimeout(resolve, ms));

export const courseService = {
  async getAllCourses() {
    await delay();
    return [...COURSES];
  },

  async getCourseBySlug(slug) {
    await delay();
    const course = COURSES.find((c) => c.slug === slug);
    if (!course) {
      throw new Error(`Course with slug "${slug}" not found`);
    }
    return { ...course };
  },

  async getCoursesByCategory(category) {
    await delay();
    return COURSES.filter((c) => c.category.toLowerCase() === category.toLowerCase());
  },

  async createCourse(courseData) {
    await delay();
    const newCourse = {
      id: `course-${Date.now()}`,
      slug: courseData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      ...courseData
    };
    COURSES.unshift(newCourse);
    return newCourse;
  },

  async updateCourse(id, updatedData) {
    await delay();
    const index = COURSES.findIndex((c) => c.id === id);
    if (index !== -1) {
      COURSES[index] = { ...COURSES[index], ...updatedData };
      return COURSES[index];
    }
    throw new Error('Course not found');
  },

  async deleteCourse(id) {
    await delay();
    const index = COURSES.findIndex((c) => c.id === id);
    if (index !== -1) {
      const deleted = COURSES.splice(index, 1);
      return deleted[0];
    }
    throw new Error('Course not found');
  }
};
