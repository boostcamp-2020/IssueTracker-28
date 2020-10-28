import React, {useState} from 'react';
import S from './style';


function SearchBar (){

  const InitialMessage = 'ᑫ Search all issues';
  const [value, setValue] = useState('is:open is:issue');

  const handleChange = (e) =>{
    setValue(e.target.value)
  }

  return (
    <S.SearchBar
      placeholder={InitialMessage}
      onChange={(e)=>handleChange(e)}
      value={value}
    />
  );
};



export default SearchBar;
