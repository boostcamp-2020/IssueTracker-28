import React, { useEffect } from 'react';
import Issue from './Issue';
import { useIssuesState, useIssuesDispatch, getIssues } from '@contexts/IssuesContext';
import {filterIssue} from '../../../../util/filterIssue'
import { test_items } from './testItems'


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
  }, [dispatch]);

  if (loading) return <div> 로딩중.. </div>;
  if (error) return <div> 에러가 발생했습니다 </div>;
  if (!issues) return <button onClick={fetchData}> 불러오기 </button>;

  return (
    <div className="list-wrapper">
      {test_items.filter((issue)=>{
        return filterIssue(issue, filters)
      }).map((issue) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </div>
  );
}

export default List;
