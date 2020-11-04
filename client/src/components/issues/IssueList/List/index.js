import React, { useEffect } from 'react';
import { useIssuesState, useIssuesDispatch, getIssues } from '@contexts/IssuesContext';
import {IssueOpenedIcon} from '@primer/octicons-react'
import Issue from './Issue'
import S from './style.js';

function List({isAllChecked, checkedItemHandler, filteredIssues}) {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const { data: issues, loading, error} = state.issues;

  const fetchData = () => {
    getIssues(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div> 로딩중.. </div>;
  if (error) return <div> 에러가 발생했습니다 </div>;
  if (!issues) return <button onClick={fetchData}> 불러오기 </button>;

  return (
    <div className="list-wrapper">
      {filteredIssues.length > 0 
          ? 
        filteredIssues.map((issue) => (
          <Issue key={issue.id} issue={issue} isAllChecked={isAllChecked} checkedItemHandler={checkedItemHandler}/>))
           :
           <S.NoResultsBox><IssueOpenedIcon size={35} className="issue-opened-icon"/>No results matched your search.</S.NoResultsBox>
      }
    </div>
  );
}

export default List;
