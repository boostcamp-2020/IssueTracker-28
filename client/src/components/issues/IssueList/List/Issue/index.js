import React, {useState, useEffect} from 'react';
import { IssueOpenedIcon, MilestoneIcon, IssueClosedIcon} from '@primer/octicons-react';
import {
  IssueWrapper,
  IssueContainer,
  LabelList,
  OtherContainer,
  MilestoneContainer,
} from './style';

function Issue({ issue, isAllChecked, checkedItemHandler }) {
  const [beChecked, setChecked] = useState(false);
  
  const checkHandler = ({target})=>{
    setChecked(!beChecked);
    checkedItemHandler(issue.id, target.checked);
  };
  const allCheckHandler = () => setChecked(isAllChecked);

  useEffect(() => allCheckHandler(), [isAllChecked]);

  return (
    <IssueWrapper>
      <input type="checkbox" checked={beChecked} onChange={(e)=>checkHandler(e)} className="issue-checkbox"  />
      {issue.status === 'opened' ?
      <IssueOpenedIcon className="issue-open-icon" size={16} /> 
      : <IssueClosedIcon className="issue-closed-icon" size={15} />
      }
      <IssueContainer>
        <div className="title-container">
          <div className="title">{issue.title}</div>
          <LabelList>
            {issue.labels && issue.labels.map((label) => <div style={{background : label.color}} className="label">{label.name}</div>)}
          </LabelList>
        </div>
        <OtherContainer>
          <div className="author">
            #{issue.id} {issue.status} 12 hours ago by {issue.author}
          </div>
          {issue.milestone && (
            <MilestoneContainer>
              <MilestoneIcon className="milestone-icon" size={14} />
              <div className="milestone">{issue.milestone}</div>
            </MilestoneContainer>
          )}
        </OtherContainer>
      </IssueContainer>
    </IssueWrapper>
  );
}

export default Issue;
