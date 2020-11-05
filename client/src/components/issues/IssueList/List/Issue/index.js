import React, { useState, useEffect } from 'react';
import { IssueOpenedIcon, MilestoneIcon, IssueClosedIcon } from '@primer/octicons-react';
import { useCheckedItemState, useCheckedItemDispatch } from '@contexts/CheckedItemContext';
import { CHECKED_UPDATE } from '@constants/actionTypes';
import S from './style';

function Issue({issue}) {
  const [checkState, setCheckState] = useState(false);
  const state = useCheckedItemState();
  const dispatch = useCheckedItemDispatch();
  const {checkedItems, isAllChecked} = state;

  const checkHandler=(e)=>{
    const isChecked = e.target.checked;
    if (isChecked !== checkState){
      setCheckState(!checkState);
      isChecked ? checkedItems.add(issue.id) : checkedItems.delete(issue.id);  
      dispatch({type:CHECKED_UPDATE, data : new Set([...checkedItems])});
    }
  }

  // 전체 선택 상태 변경시, 해당상태 반영
  useEffect(()=>{
    setCheckState(isAllChecked);
    if (isAllChecked){
      checkedItems.add(issue.id);
      dispatch({type:CHECKED_UPDATE, data : new Set([...checkedItems])});
    }
  }, [isAllChecked])

  useEffect(()=>{
    if (checkedItems.size===0)
      setCheckState(false);
  }, [checkedItems])

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
