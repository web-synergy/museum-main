import axios from 'axios';
import { IEvent, IFormInput, IMuseumData } from '../types';

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

export const sendFeedbackForm = (data: IFormInput) => {
  return instance.post('/feedback/submit', data);
};

export const getEvents = (size = 5, page = 1) => {
  return instance.get(`/events?size=${size}&page=${page}`);
};

export const getEventById = (slug: string) => {
  return instance.get<IEvent>(`/events/${slug}`);
};

export const getMuseumData = () => {
  return instance.get<IMuseumData>(`/museum-data`);
};

export const getSearchResults = async (query: string) => {
  try{
    const { data } = await instance.get(`/search/${query}`)
    return data
  }catch (e) {
    return null
  } 
}

  
