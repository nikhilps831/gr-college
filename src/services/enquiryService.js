import { MOCK_ENQUIRIES, MOCK_CONTACT_MESSAGES } from '../data/enquiriesData';

const delay = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms));

export const enquiryService = {
  async submitEnquiry(data) {
    await delay();
    const newEnquiry = {
      id: `enq-${Date.now()}`,
      submittedAt: new Date().toLocaleString(),
      status: 'Pending',
      ...data
    };
    MOCK_ENQUIRIES.unshift(newEnquiry);
    return { success: true, message: 'Admission enquiry submitted successfully!', enquiryId: newEnquiry.id };
  },

  async submitContactMessage(data) {
    await delay();
    const newMsg = {
      id: `msg-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Unread',
      ...data
    };
    MOCK_CONTACT_MESSAGES.unshift(newMsg);
    return { success: true, message: 'Thank you for reaching out! We will contact you soon.' };
  },

  async getEnquiries() {
    await delay();
    return [...MOCK_ENQUIRIES];
  },

  async getContactMessages() {
    await delay();
    return [...MOCK_CONTACT_MESSAGES];
  },

  async updateEnquiryStatus(id, status) {
    await delay();
    const target = MOCK_ENQUIRIES.find((e) => e.id === id);
    if (target) {
      target.status = status;
      return target;
    }
    throw new Error('Enquiry not found');
  }
};
