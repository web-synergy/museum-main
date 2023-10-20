import { FC } from 'react';
import { NoResultsStack, NothingFoundSubTitle, NothingFoundTitle, SearchTitle } from '../styles';

interface SearchInfoProps {
  resultsCount: number;
  searchTitle: string;
}

const SearchInfo: FC<SearchInfoProps> = ({ resultsCount, searchTitle }) => {
  return (
    <>
      {resultsCount ? (
        <SearchTitle component={'p'} variant="h2">
          За запитом “{searchTitle}” знайдено {resultsCount} результатів:
        </SearchTitle>
      ) : (
        <NoResultsStack>
          <NothingFoundTitle component={'p'} variant="button">
            На жаль, за Вашим запитом “{searchTitle}” нічого не знайдено.
          </NothingFoundTitle>
          <NothingFoundSubTitle component={'p'}>
            Будь ласка, перевірте правильність написання і повторіть спробу ще раз або використайте інші ключові слова.
          </NothingFoundSubTitle>
        </NoResultsStack>
      )}
    </>
  );
};

export default SearchInfo;
