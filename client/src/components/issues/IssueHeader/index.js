import React, { useState } from 'react';
import { XCircleFillIcon } from '@primer/octicons-react';
import { LabelsButton, MilestonesButton, NewIssueButton } from './Buttons';
import { useIssuesState, useIssuesDispatch, initialFilters } from '@contexts/IssuesContext';
import SearchBar from './SearchBar';
import Filters from './Filters';
import S from './style';
import { UPDATE_FILTER } from '@constants/actionTypes';

function IssueHeader() {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const { filters } = state;
  const resetHandler = () => {
    dispatch({ type: UPDATE_FILTER, filters: initialFilters });
  };

  return (
    <>
      <S.IssueHeader>
        <S.FilterSearch>
          <Filters />
          <SearchBar />
        </S.FilterSearch>
        <S.LabelMilestone>
          <LabelsButton />
          <MilestonesButton />
        </S.LabelMilestone>
        <NewIssueButton />
      </S.IssueHeader>
      {JSON.stringify(initialFilters)!==JSON.stringify(filters)
        ? 
          <S.ResetButton onClick={resetHandler}>
            <XCircleFillIcon className="x-icon" size={16}/>
            <span>  Clear current search query, filters, and sorts</span>
          </S.ResetButton>
         :
         null}
    </>
  );
}

export default IssueHeader;
