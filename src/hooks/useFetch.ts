import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface LoadingDataResult<T> {
  data: T | null;
  isLoading: boolean;
  error: AxiosError | null;
  isFulfilled: boolean;
  eventLoading: (data: any) => void;
}

export const useFetch = <T>(dataFetcher: (data: any) => Promise<{ data: T }>, event?: boolean): LoadingDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isFulfilled, setIsFulfilled] = useState<boolean>(false);

  const fetchData = async (requestData: any) => {
    setIsLoading(true);
    try {
      const response = await dataFetcher(requestData);
      setData(response.data);
      setIsFulfilled(true);
      setIsLoading(false);
    } catch (error: any) {
      setError(error as AxiosError);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!event) {
      fetchData(null);
    }
  }, [dataFetcher, event]);

  const eventLoading = (data: any) => {
    fetchData(data);
  };

  return { data, isLoading, error, eventLoading, isFulfilled };
};
