import React, { useState, useEffect, useReducer } from 'react';
import S from './style';

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
  const [searchValue, setSerachValue] = useState(['is:open is:issue']);
  useEffect(() => {
    let filterMessage = '';
    switch (props.filterValue) {
      case 'Open issues and pull requests':
        filterMessage = 'is:open';
        break;
      case 'Your issues':
        filterMessage = 'is:open is:issue author:@me';
        break;
      case 'Your pull requests':
        filterMessage = 'is:open is:pr author:@me';
        break;
      case 'Everything assigned to you':
        filterMessage = 'is:open assignee:@me';
        break;
      case 'Everything mention you':
        filterMessage = 'is:open mentions:@me';
        break;
    }
    setSerachValue(filterMessage);
  }, [props.filterValue]);
  const serachHandler = (e) => {
    setSerachValue(e.target.value);
  };
  const enterHandler = (e) => {
    if (e.key == 'Enter') {
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
      onChange={serachHandler}
      onKeyPress={enterHandler}
      value={searchValue}
    />
  );
}

export default SearchBar;
