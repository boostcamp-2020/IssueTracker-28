import React, { useState } from 'react';
import { LabelsButton, MilestonesButton, NewIssueButton } from './Buttons';
import { useIssuesState, useIssuesDispatch, initialFilters } from '../../../contexts/IssuesContext';
import {XCircleFillIcon} from '@primer/octicons-react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import S from './style';

function IssueHeader() {
  let [filterValue, setFilterValue] = useState('');
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const filters = state.filters;
  
  const resetHandler = ()=>{
    dispatch({type : 'UPDATE_FILTER', filters : initialFilters})
  }
  console.log("initialFilters 확인 ㅣ ", initialFilters)
  console.log("filters 확인 ㅣ ", filters )
  console.log("같은지 확인 ㅣ ", JSON.stringify(initialFilters)===JSON.stringify(filters))
  return (
    <>
      <S.IssueHeader>
        <S.HeaderItemWrapper>
          <Filters filterValue={filterValue} setFilterValue={setFilterValue} />
          <SearchBar filterValue={filterValue} />
        </S.HeaderItemWrapper>
        <S.HeaderItemWrapper>
          <LabelsButton />
          <MilestonesButton />
        </S.HeaderItemWrapper>
        <NewIssueButton />
      </S.IssueHeader>
      {JSON.stringify(initialFilters)!==JSON.stringify(filters) ? 
        <S.ResetButton onClick={resetHandler}><XCircleFillIcon className="x-icon" size={16}/>  Clear current search query, filters, and sorts</S.ResetButton> : null}
    </>
  );
}

export default IssueHeader;
