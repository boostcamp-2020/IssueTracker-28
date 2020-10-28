import React, { useState } from 'react';
import S from './style';

function SearchBar() {
  const InitialMessage = 'ᑫ Search all issues';
  const [value, setValue] = useState('is:open is:issue');

  const serachHandler = (e) => {
    setValue(e.target.value);
  };
  const enterHandler = (e) => {
    if (e.key == 'Enter') {
      console.log('검색: ', e.target.value);
    }
  };
  return (
    <S.SearchBar
      placeholder={InitialMessage}
      onChange={serachHandler}
      onKeyPress={enterHandler}
      value={value}
    />
  );
}

export default SearchBar;
