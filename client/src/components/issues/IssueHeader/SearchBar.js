import React, { useState, useEffect } from 'react';
import S from './style';
import { useIssuesState, useIssuesDispatch, initialFilters } from '@contexts/IssuesContext';
import { UPDATE_FILTER } from '@constants/actionTypes';

function SearchBar() {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const {filters, filterMessage} = state;
  const [searchValue, setSearchValue] = useState(filterMessage);
  const placeholderMessage = 'ᑫ Search all issues';

  useEffect(() => {
    setSearchValue(filterMessage)
  }, [filters]);
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const enterHandler = (e) => {
    if (e.key === 'Enter' && searchValue=="") {
      dispatch({type : UPDATE_FILTER, filters : {...initialFilters, status : '*'}})
    }
  };
  return (
    <S.SearchBar
      type="search"
      placeholder={placeholderMessage}
      onChange={searchHandler}
      onKeyPress={enterHandler}
      value={searchValue}
    />
  );
}

export default SearchBar;
