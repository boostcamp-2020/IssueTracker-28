import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '@api/issue';
import Header from '@components/issueDetail/header';
import Content from '@components/issueDetail/content';
import S from './style';

const IssueDetail = () => {
  const [issue, setIssue] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.getIssueDetail(id);
      setIssue(data.issueDetail);
      setComments(data.comments);
    }
    fetchData();
  }, []);
  if (Object.keys(issue).length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <S.IssueDetailWrapper>
      <Header issue={issue} commentsCount={comments.length} />
      <Content issue={issue} comments={comments} />
    </S.IssueDetailWrapper>
  );
};

export default IssueDetail;
