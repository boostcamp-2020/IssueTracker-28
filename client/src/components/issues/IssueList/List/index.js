import React from 'react';
import { IssueOpenedIcon } from '@primer/octicons-react';
import Issue from './Issue';
import S from './style';

function List({ isAllChecked, checkedItemHandler, filteredIssues }) {
  return (
    <div className="list-wrapper">
      {filteredIssues.length > 0 ? (
        filteredIssues.map((issue) => (
          <Issue
            key={issue.id}
            issue={issue}
            isAllChecked={isAllChecked}
            checkedItemHandler={checkedItemHandler}
          />
        ))
      ) : (
        <S.NoResultsBox>
          <IssueOpenedIcon size={35} className="issue-opened-icon" />
          No results matched your search.
        </S.NoResultsBox>
      )}
    </div>
  );
}

export default List;
