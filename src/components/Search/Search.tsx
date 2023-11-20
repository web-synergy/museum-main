import { Container } from '@mui/material';
import { ChangeEventHandler, FC, FormEventHandler, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Section from '../Common/Section.tsx';
import SearchInfo from './parts/SearchInfo.tsx';
import SearchListItem from './parts/SearchListItem';
import SearchResultsInput from './parts/SearchResultsInput';
import ShowMoreBtn from './parts/ShowMoreBtn.tsx';

import { getSearchResults } from '@/api/index.ts';
import { getStringFromQuery } from './heplers.ts';
import { ContentBox, SearchResultsWrapper } from './styles.ts';

interface Data {
  id: string;
  title: string;
  description?: string;
  contentType?: string;
}

const Search: FC = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('request') || '';

  const [data, setData] = useState<Data[] | []>([]);
  const [visibleNum, setVisibleNum] = useState(5);
  const [inputValue, setInputValue] = useState(getStringFromQuery(searchQuery));
  const [searchTitle, setSearchTitle] = useState('');

  const changeVisibleNum = () => {
    setVisibleNum((prevVal) => prevVal + 5);
  };

  const updateInputVal: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => setInputValue(e.target.value);

  const fetchData = async (inputValue: string) => {
    const query = encodeURIComponent(inputValue);
    const data = await getSearchResults(query);
    if (data !== null && data.length) setData(data);
    else setData([]);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (inputValue.length > 2) {
      navigate(`/search?request=${inputValue.split(' ').join('-')}`);
    }
  };

  useEffect(() => {
    setInputValue(getStringFromQuery(searchQuery));
    if (searchQuery.length > 2) {
      fetchData(searchQuery);
      setSearchTitle(inputValue);
      setVisibleNum(5);
    }
  }, [searchQuery]);

  return (
    <Section variant="light">
      <Container>
        <ContentBox>
          <SearchResultsInput {...{ inputValue, updateInputVal, onSubmit }} />
          <SearchInfo resultsCount={data.length} searchTitle={searchTitle} />
          {!!data.length && (
            <>
              <SearchResultsWrapper component={'ul'}>
                {data.slice(0, visibleNum).map((data, index) => (
                  <SearchListItem key={index} {...data} />
                ))}
              </SearchResultsWrapper>
              {visibleNum < data.length && <ShowMoreBtn onClick={changeVisibleNum} />}
            </>
          )}
        </ContentBox>
      </Container>
    </Section>
  );
};

export default Search;
