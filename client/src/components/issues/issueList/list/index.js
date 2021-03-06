import React, { useEffect } from 'react';
import { useIssuesState, useIssuesDispatch, getIssues } from '@contexts/IssuesContext';
import { IssueOpenedIcon } from '@primer/octicons-react';
import filterIssue from '@utils/filterIssue';
import Spinner from '@images/spinner3.gif';
import Issue from './issue';
import S from './style';

function List() {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const { data: issues, loading, error } = state.issues;
  const { filters, searchKeywords } = state;

  const fetchData = () => {
    getIssues(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <S.LoadSpinner src={Spinner} />;
  if (error) return <div> 에러가 발생했습니다 </div>;
  if (!issues) return <button onClick={fetchData}> 불러오기 </button>;

  const filteredIssues = issues.filter((issue) => {
    return filterIssue(issue, filters);
  });

  const searchIssues = filteredIssues.filter((issue) => {
    let isMatch = true;
    for (const keyword of searchKeywords) {
      if (!issue.title.includes(keyword) && !issue.content.includes(keyword)) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) return true;
  });

  return (
    <div className="list-wrapper">
      {searchIssues.length > 0 ? (
        searchIssues.map((issue) => <Issue key={issue.id} issue={issue} />)
      ) : (
        <S.NoResultsBox>
          <IssueOpenedIcon size={35} className="issue-opened-icon" />
          <span>No results matched your search.</span>
        </S.NoResultsBox>
      )}
    </div>
  );
}

export default List;
