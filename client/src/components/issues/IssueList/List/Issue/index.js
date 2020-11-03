import React from 'react';
import { IssueOpenedIcon, MilestoneIcon } from '@primer/octicons-react';
import S from './style';

function Issue({ issue }) {
  return (
    <S.IssueWrapper>
      <input className="issue-checkbox" type="checkbox" />
      <IssueOpenedIcon className="issue-open-icon" size={16} />
      <S.IssueContainer>
        <div className="title-container">
          <div className="title">{issue.title}</div>
          <S.LabelList>
            {issue.labels && issue.labels.map((label) => <div className="label">{label.name}</div>)}
          </S.LabelList>
        </div>
        <S.OtherContainer>
          <div className="author">
            #{issue.id} {issue.status} 12 hours ago by {issue.author}
          </div>
          {issue.milestone && (
            <S.MilestoneContainer>
              <MilestoneIcon className="milestone-icon" size={14} />
              <div className="milestone">{issue.milestone}</div>
            </S.MilestoneContainer>
          )}
        </S.OtherContainer>
      </S.IssueContainer>
    </S.IssueWrapper>
  );
}

export default Issue;
