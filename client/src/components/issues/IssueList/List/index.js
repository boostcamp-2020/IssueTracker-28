import React, { useEffect } from 'react';
import Issue from './Issue';
import { useIssuesState, useIssuesDispatch, getIssues } from '@contexts/IssuesContext';
import {filterIssue} from '../../../../util/filterIssue'
import { test_items } from './testItems'
import {IssueOpenedIcon} from '@primer/octicons-react'
import {NoResultsBox} from './style.js';


function List() {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();

  const { data: issues, loading, error} = state.issues;
  const {filters, filterMessage} = state;
  console.log('현재 적용중인 필터 : ', filters)
  console.log('현재 적용중인 필터메세지 : ', filterMessage)

  const fetchData = () => {
    getIssues(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div> 로딩중.. </div>;
  if (error) return <div> 에러가 발생했습니다 </div>;
  if (!issues) return <button onClick={fetchData}> 불러오기 </button>;

  const filteredIssues = test_items.filter((issue)=>{
    return filterIssue(issue, filters)
    }).map((issue) => (
    <Issue key={issue.id} issue={issue} />
  ))

  return (
    <div className="list-wrapper">
      {filteredIssues.length > 0  ? 
        filteredIssues :
        <NoResultsBox><IssueOpenedIcon size={35} className="issue-opened-icon"/>No results matched your search.</NoResultsBox>
      }
    </div>
  );
}

export default List;
