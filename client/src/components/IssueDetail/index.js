import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '@api/issue';
import Header from '@components/IssueDetail/Header';
import Content from '@components/IssueDetail/Content';
import S from './style';

const IssueDetail = () => {
  const [issue, setIssue] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(async () => {
    const { data } = await api.getIssueDetail(id);
    setIssue(data.issueDetail);
    setComments(data.comments);
  }, []);

  return (
    <S.IssueDetailWrapper>
      <Header issue={issue} commentsCount={comments.length} />
      <Content issue={issue} comments={comments} />
    </S.IssueDetailWrapper>
  );

};

export default IssueDetail;
