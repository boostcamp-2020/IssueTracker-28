import React, { useState } from 'react';
import { StateLabel, Button, TextInput } from '@primer/components';
import getElapsedTime from '@utils/getElapsedTime';
import S from './style';

const Header = ({ issue, commentsCount }) => {
  const [isEditClicked, setIsEditClicked] = useState(false);

  const editButton = isEditClicked ? null : (
    <Button className="edit-button" variant="small" onClick={() => setIsEditClicked(true)}>
      Edit
    </Button>
  );

  const saveHandler = () => {
    // 이슈 제목 업데이트하는 API 호출
  };

  return (
    <S.HeaderWrapper>
      {isEditClicked ? (
        <S.EditWrapper>
          <TextInput
            value={issue.title}
            aria-label="issueTitle"
            name="issueTitle"
            autoComplete="postal-code"
            variant="large"
            className="issue-title"
          />
          <Button className="save-button" variant="small" onClick={() => saveHandler()}>
            Save
          </Button>
          <span className="cancle-button">Cancel</span>
        </S.EditWrapper>
      ) : (
          <S.TitleWrapper>
            <S.IssueTitle>{issue.title}</S.IssueTitle>&nbsp;&nbsp;&nbsp;
            <S.IssueId>#{issue.id}</S.IssueId>
          </S.TitleWrapper>
        )}
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
          {issue.status} this issue {issue.time ? getElapsedTime(issue.time) : null} ago · {commentsCount} comment
        </S.Content>
      </S.ContentWrapper>
      {editButton}
    </S.HeaderWrapper>
  );
};

export default Header;
