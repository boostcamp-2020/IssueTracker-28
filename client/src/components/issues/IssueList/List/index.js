import React, { useEffect } from 'react';
import Issue from './Issue';
import { useIssuesState, useIssuesDispatch, getIssues } from '../../../../contexts/IssuesContext';

function List() {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();

  const fetchData = () => {
    getIssues(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const { data: issues, loading, error } = state.issues;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!issues) return <button onClick={fetchData}>불러오기</button>;

  return (
    <div className="list-wrapper">
      {issues.map((issue) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </div>
  );
}

export default List;
