import React, { useEffect, useState } from 'react';
import { StateLabel, Button, TextInput } from '@primer/components';
import * as api from '@api/issue';
import S from './style';

const Header = ({ issue, commentsCount }) => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(issue.title);
  }, [issue]);

  const saveHandler = async () => {
    await api.updateIssueTitle(issue.id, title);
    setIsEditClicked(false);
  };

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  const editButton = isEditClicked ? null : (
    <Button className="edit-button" variant="small" onClick={() => setIsEditClicked(true)}>
      Edit
    </Button>
  );

  return (
    <S.HeaderWrapper>
      {isEditClicked ? (
        <S.EditWrapper>
          <TextInput
            value={title}
            aria-label="issueTitle"
            name="issueTitle"
            autoComplete="postal-code"
            className="issue-title"
            onChange={changeHandler}
          />
          <Button className="save-button" variant="small" onClick={() => saveHandler()}>
            Save
          </Button>
          <input
            type="button"
            className="cancle-button"
            onClick={() => {
              setIsEditClicked(false);
            }}
            value="Cancel"
          />
        </S.EditWrapper>
      ) : (
        <S.TitleWrapper>
          <S.IssueTitle>{title}</S.IssueTitle>&nbsp;&nbsp;&nbsp;
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
          {issue.status} this issue 3 days ago · {commentsCount} comment
        </S.Content>
      </S.ContentWrapper>
      <S.HrLine />
      {editButton}
    </S.HeaderWrapper>
  );
};

export default Header;
