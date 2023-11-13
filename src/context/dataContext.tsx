import { FC, PropsWithChildren, createContext } from 'react';
import { AxiosError } from 'axios';
import { getMuseumData } from '@/api';
import { useFetch } from '@/hooks/useFetch.ts';
import { IMuseumData } from '@/types';

interface DataContextType {
  data: IMuseumData | null;
  isLoading: boolean;
  error: AxiosError<unknown, unknown> | null;
}

export const DataContext = createContext<DataContextType>(null!);

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data, isLoading, error } = useFetch<IMuseumData, unknown>(getMuseumData);

  console.log(data);
  const value = { data, isLoading, error };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
