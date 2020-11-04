import React from 'react';
import { XCircleFillIcon } from '@primer/octicons-react';
import { useIssuesState, useIssuesDispatch, initialFilters } from '@contexts/IssuesContext';
import { LabelsButton, MilestonesButton, NewIssueButton } from './Buttons';
import SearchBar from './SearchBar';
import Filters from './Filters';
import S from './style';

function IssueHeader() {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const { filters } = state;

  const resetHandler = () => {
    dispatch({ type: 'UPDATE_FILTER', filters: initialFilters });
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
      {JSON.stringify(initialFilters) !== JSON.stringify(filters) ? (
        <S.ResetButton onClick={resetHandler}>
          <XCircleFillIcon className="x-icon" size={16} /> Clear current search query, filters, and
          sorts
        </S.ResetButton>
      ) : null}
    </>
  );
}

export default IssueHeader;
