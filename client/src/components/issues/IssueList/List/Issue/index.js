import React, { useState, useEffect } from 'react';
import { IssueOpenedIcon, IssueClosedIcon, MilestoneIcon } from '@primer/octicons-react';
import S from './style';

function Issue({ issue, isAllChecked, checkedItemHandler }) {
  const [beChecked, setChecked] = useState(false);

  const checkHandler = ({ target }) => {
    setChecked(!beChecked);
    checkedItemHandler(issue.id, target.checked);
  };
  const allCheckHandler = () => setChecked(isAllChecked);

  useEffect(() => allCheckHandler(), [isAllChecked]);

  return (
    <S.IssueWrapper>
      <input
        type="checkbox"
        checked={beChecked}
        onChange={(e) => checkHandler(e)}
        className="issue-checkbox"
      />
      {issue.status === 'opened' ? (
        <IssueOpenedIcon className="issue-open-icon" size={16} />
      ) : (
        <IssueClosedIcon className="issue-closed-icon" size={15} />
      )}
      <S.IssueContainer>
        <div className="title-container">
          <div className="title">{issue.title}</div>
          <S.LabelList>
            {issue.labels &&
              issue.labels.map((label) => (
                <div style={{ background: label.color }} className="label">
                  {label.name}
                </div>
              ))}
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
