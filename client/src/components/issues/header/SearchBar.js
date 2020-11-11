import React, { useState, useEffect } from 'react';
import { useIssuesState, useIssuesDispatch, initialFilters } from '@contexts/IssuesContext';
import { uncheckAllFilters } from '@utils/uncheckAllFilters';
import { UPDATE_FILTER } from '@constants/actionTypes';
import S from './style';

function SearchBar() {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const { filters, filterMessage } = state;

  const placeholderMessage = 'ᑫ Search all issues';
  const [searchValue, setSearchValue] = useState(filterMessage);

  useEffect(() => {
    setSearchValue(filterMessage);
  }, [filters]);

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const enterHandler = (e) => {
    let isValid = true;
    const filters = {};
    const keywords = [];
    filters.status = '*';
    filters.labels = new Set();
    filters.assignees = new Set();
    if (e.key === 'Enter' && searchValue === '') {
      dispatch({ type: UPDATE_FILTER, filters: { ...initialFilters, status: '*' } });
      dispatch({ type: 'UPDATE_SEARCH_KEYWORD', data: [] });
      uncheckAllFilters();
    } else if (e.key === 'Enter') {
      for (const value of searchValue.split(' ')) {
        const filter = value.split(':');
        if (filter.length === 2) {
          // 필터 검색
          switch (filter[0]) {
            case 'is':
              if (filter[1] === 'opened' || filter[1] === 'closed') filters.status = filter[1];
              else if (filter[1] === 'every') filters.status = '*';
              else if (filter[1] === 'issue') break;
              else isValid = false;
              break;
            case 'author':
              filters.author = filter[1];
              break;
            case 'labels':
              const labels = filter[1].split(',');
              labels.forEach((label) => filters.labels.add(label));
              break;
            case 'milestone':
              filters.milestone = filter[1];
              break;
            case 'assignees':
              const assignees = filter[1].split(',');
              assignees.forEach((assignee) => filters.assignees.add(assignee));
              break;
            default:
              isValid = false;
          }
        } else keywords.push(filter[0]);
      }
      if (isValid) {
        if (filters.labels.size === 0) filters.labels = '*';
        if (filters.assignees.size === 0) filters.assignees = '*';
        dispatch({ type: UPDATE_FILTER, filters: { ...initialFilters, ...filters } });
        dispatch({ type: 'UPDATE_SEARCH_KEYWORD', data: keywords });
      }
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
