import { Container } from '@mui/material';
import { ChangeEventHandler, FC, FormEventHandler, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Section from '../Common/Section.tsx';
import SearchInfo from './parts/SearchInfo.tsx';
import SearchListItem from './parts/SearchListItem';
import SearchResultsInput from './parts/SearchResultsInput';
import ShowMoreBtn from './parts/ShowMoreBtn.tsx';

import { ContentBox, SearchResultsWrapper } from './styles.ts';
import { testData } from './testData.ts';

const Search: FC = () => {
  const [searchParams] = useSearchParams();
  let search = searchParams.get('request') || '';

  useEffect(() => {
    search = searchParams.get('request') || '';
    setInputData(search);
    if (inputData.length > 2) {
      setSearchResults([]);
      setSearchResults(searchContent(search));
      setSearchTitleVal(search);
      setVisibleNum(5);
    }
  }, [searchParams]);

  const [inputData, setInputData] = useState(search);
  const [searchResults, setSearchResults] = useState(() => {
    return searchContent(search);
  });
  const [searchTitleVal, setSearchTitleVal] = useState(inputData);
  const [visibleNum, setVisibleNum] = useState(5);

  function searchContent(patt: string) {
    if (patt.length) {
      const pattern = new RegExp(patt, 'gim');
      return testData.filter((el) => pattern.test(el.description || '') || pattern.test(el.title));
    }
    return [];
  }

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setInputData(e.target.value);
  };

  const changeVisibleNum = () => {
    setVisibleNum((prevVal) => prevVal + 5);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (inputData.length > 2) {
      setSearchResults([]);
      setSearchTitleVal(inputData);
      setSearchResults(searchContent(inputData));
      setVisibleNum(5);
    }
  };

  return (
    <Section variant="light">
      <Container>
        <ContentBox>
          <SearchResultsInput {...{ inputData, handleChange, onSubmit }} />
          <SearchInfo resultsCount={searchResults.length} searchTitle={searchTitleVal} />
          {!!searchResults?.length && (
            <>
              <SearchResultsWrapper component={'ul'}>
                {searchResults.slice(0, visibleNum).map((data, index) => {
                  return <SearchListItem key={index} {...data} />;
                })}
              </SearchResultsWrapper>
              {visibleNum < searchResults.length && <ShowMoreBtn onClick={changeVisibleNum} />}
            </>
          )}
        </ContentBox>
      </Container>
    </Section>
  );
};

export default Search;
