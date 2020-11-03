import React, { useEffect } from 'react';
import Issue from './Issue';
import { useIssuesState, useIssuesDispatch, getIssues } from '@contexts/IssuesContext';
import {filterIssue} from '../../../../util/filterIssue'


function List() {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();

  const { data: issues, loading, error} = state.issues;
  const filter = state.filters;
  console.log('현재 적용중인 필터 : ', filter)

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
      {issues.filter((issue)=>{
        return filterIssue(issue, filter)
      }).map((issue) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </div>
  );
}

export default List;
