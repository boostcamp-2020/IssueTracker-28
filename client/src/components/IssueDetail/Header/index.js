import React from 'react';
import { StateLabel, Button } from '@primer/components';
import S from './style';

const Header = ({ issue, commentsCount }) => {
  return (
    <S.HeaderWrapper>
      <S.TitleWrapper>
        <S.IssueTitle>{issue.title}</S.IssueTitle>&nbsp;&nbsp;&nbsp;
        <S.IssueId>#{issue.id}</S.IssueId>
      </S.TitleWrapper>
      <S.ContentWrapper>
        {issue.status === 'opened' ? (
          <StateLabel status="issueOpened" variant="small">
            Open
          </StateLabel>
        ) : (
          <StateLabel status="issueClosed" variant="small">
            Closed
          </StateLabel>
        )}
        <S.Content>
          <span className="detail-author">{issue.author}</span>&nbsp;
          {issue.status} this issue 3 days ago · {commentsCount} comment
        </S.Content>
      </S.ContentWrapper>
      <Button className="edit-button" variant="small">
        Edit
      </Button>
    </S.HeaderWrapper>
  );
};

export default Header;
