import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  useIssueDetailState,
  useIssueDetailDispatch,
  getIssue,
} from '@contexts/IssueDetailContext';
import Header from '@components/issueDetail/header';
import Content from '@components/issueDetail/content';
import S from './style';

const IssueDetail = () => {
  const { id } = useParams();
  const state = useIssueDetailState();
  const dispatch = useIssueDetailDispatch();

  const { data, loading, error } = state.issue;
  const issue = data?.issueDetail;
  const comments = data?.comments;
  const fetchData = () => {
    getIssue(dispatch, id);
  };

  useEffect(async () => {
    fetchData();
  }, [dispatch]);
  if (loading) return <div> 로딩중.. </div>;
  if (error) return <div> 에러가 발생했습니다 </div>;
  if (!data) return <button onClick={fetchData}> 불러오기 </button>;

  return (
    <S.IssueDetailWrapper>
      <Header issue={issue} commentsCount={comments.length} />
      <Content issue={issue} comments={comments} />
    </S.IssueDetailWrapper>
  );
};

export default IssueDetail;
