import React, {useState} from 'react';
import S from './style';


function SearchBar (){

  const InitialMessage = 'ᑫ Search all issues';
  const [value, setValue] = useState('is:open is:issue');

  return (
    <S.SearchBar
      placeholder={InitialMessage}
      onChange={(e)=>setValue(e.target.value)}
      value={value}
    />
  );
};

export default SearchBar;
