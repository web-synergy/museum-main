import axios from 'axios';
import { IFormInput } from '../types';

const instance = axios.create({
  baseURL: '/api',
});

export const sendFeedbackForm = (data: IFormInput) => {
  return instance.post('/feedback/submit', data);
};

export const getEvents = (size = 5, page = 1) => {
  return instance.get(`/events?size=${size}&page=${page}`);
};

export const getEventById = (id: string) => {
  return instance.get(`/events/${id}`);
};
