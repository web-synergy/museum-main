import { useContext } from 'react';
import { DataContext } from '@/context/dataContext';

const useData = () => {
  return useContext(DataContext);
};

export default useData;
