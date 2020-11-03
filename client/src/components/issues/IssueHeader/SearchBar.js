import React, { useState, useEffect, useReducer } from 'react';
import S from './style';
import { useIssuesState, useIssuesDispatch, getIssues } from '../../../contexts/IssuesContext';

const items = [
  {
    id: 1,
    title: '스프린트1 이슈1',
    content: '내용',
    author: 'a',
    milestone: '스프린트1',
    status: 'open',
    labels: [
      {
        name: 'bug',
        color: '#bfd4f2',
      },
      {
        name: 'feature',
        color: '#e3a5aa',
      },
    ],
    assignees: ['a'],
    time: '2020-10-28',
  },
  {
    id: 2,
    title: '스프린트1 이슈2',
    content: '내용2',
    author: 'b',
    milestone: '스프린트2',
    status: 'closed',
    labels: [
      {
        name: 'bug',
        color: '#bfd4f2',
      },
      {
        name: 'feature',
        color: '#e3a5aa',
      },
    ],
    assignees: ['a'],
    time: '2020-10-28',
  },
];
function SearchBar(props) {
  const InitialMessage = 'ᑫ Search all issues';
  const [searchValue, setSearchValue] = useState('is:open is:issue');
  
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const filters = state.filters;
  
  useEffect(() => {
    let filterMessage = '';
    switch (props.filterValue) {
      case 'Open issues':
        filterMessage = 'is:open';
        dispatch({type : 'UPDATE_FILTER', filters : {...filters, status : 'opened'}})
        break;
      case 'Your issues':
        filterMessage = 'is:open is:issue author:@me';
        break;
      case 'Everything assigned to you':
        filterMessage = 'is:open assignee:@me';
        break;
      case 'Everything mentioning you':
        filterMessage = 'is:open mentions:@me';
        break;
      case 'Closed issues':
        filterMessage = 'is:closed';
        dispatch({type : 'UPDATE_FILTER', filters : {...filters, status : 'closed'}})
        break;
      default :
        filterMessage = 'is:open is:issue';
    }

    setSearchValue(filterMessage);
  }, [props.filterValue]);
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const enterHandler = (e) => {
    if (e.key == 'Enter') {
      console.log('### value : ', searchValue)
      const result = items.filter((item) => {
        return item.title.includes(searchValue) || item.status.includes(searchValue);
      });
      console.log('검색: ', searchValue);
      console.log('검색결과: ', result);
    }
  };
  return (
    <S.SearchBar
      placeholder={InitialMessage}
      onChange={searchHandler}
      onKeyPress={enterHandler}
      value={searchValue}
    />
  );
}

export default SearchBar;

