import React from 'react';
import { XCircleFillIcon } from '@primer/octicons-react';
import { useIssuesState, useIssuesDispatch, initialFilters } from '@contexts/IssuesContext';
import { UPDATE_FILTER } from '@constants/actionTypes';
import { uncheckAllFilters } from '@utils/uncheckAllFilters';
import { LabelsButton, MilestonesButton, NewIssueButton } from './buttons';
import SearchBar from './SearchBar';
import Filters from './Filters';
import S from './style';

function IssueHeader() {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const { filters } = state;

  const resetHandler = () => {
    dispatch({ type: UPDATE_FILTER, filters: initialFilters });
    dispatch({ type: 'UPDATE_SEARCH_KEYWORD', data: [] });
    uncheckAllFilters();
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
      {JSON.stringify(initialFilters) !== JSON.stringify(filters) && (
        <S.ResetButton onClick={resetHandler}>
          <XCircleFillIcon className="x-icon" size={16} />
          <span> Clear current search query, filters, and sorts</span>
        </S.ResetButton>
      )}
    </>
  );
}

export default IssueHeader;
