import { useEffect, useState } from 'react';

interface LoadingDataResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  eventLoading: (data: any) => void;
}

export const useFetch = <T>(dataFetcher: (data: any) => Promise<{ data: T }>, event = false): LoadingDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (requestData: any) => {
    setIsLoading(true);
    try {
      const response = await dataFetcher(requestData);
      setData(response.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
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

  return { data, isLoading, error, eventLoading };
};
